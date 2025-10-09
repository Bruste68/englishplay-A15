import React, { useState, useRef, useEffect, useMemo, useImperativeHandle, forwardRef, } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Image,
  DeviceEventEmitter, // 🔵 추가
  AppState, AppStateStatus,
} from 'react-native';
import { styles as baseStyles } from '../shared/styles/ChatScreen.styles';
import { router } from 'expo-router';
import { LevelType, Message } from '../types';
import * as Speech from 'expo-speech';
import { LogBox } from 'react-native';
import { useVoice } from '../hooks/useVoice';
import { useLanguage } from '../hooks/useLanguage';
import { startProgress } from '../hooks/useProgress';
import { speakText } from '../utils/speak'; 
import { ResumeDialog } from './ResumeDialog'; // ✅ 새로 추가


LogBox.ignoreLogs(['new NativeEventEmitter', 'Setting a timer']);

export interface PracticeDialogViewHandle {
  resetAllStates: () => Promise<void>;
}

interface PracticeDialogViewProps {
  topicKey: string;
  currentLevel: string;
  setCurrentLevel: (level: LevelType) => void;
  messages: any[];
  practice: any; // usePracticeDialog() 리턴
  startRecording: () => void;
  stopRecording: () => void;
  stopAll: () => void;
  isRecording: boolean;
  onStartFreeTalk: () => void;
  isRoleReversed: boolean;
  toggleRole: () => void;
  showFullScript: boolean;
  setShowFullScript: (show: boolean) => void;
  isMemorizationMode: boolean;
  setIsMemorizationMode: (mode: boolean) => void;
  startAutoRecording?: (duration?: number) => Promise<void>;
  flatListRef?: React.RefObject<ScrollView | null>;
  onPracticeEnd?: () => void;
  setHasStartedPractice?: (started: boolean) => void;
  hasStartedPractice?: boolean;
}

const DEFAULT_STATE = {
  step: 0,
  isUserTurn: false,
  isActive: false,
  isSpeaking: false,
  isPaused: false as boolean | undefined,
  loadingSummary: false,
};

export const PracticeDialogView = forwardRef<
  PracticeDialogViewHandle,
  PracticeDialogViewProps
>((props, ref) => {
  const {
    topicKey,
    currentLevel,
    setCurrentLevel,
    messages,
    practice,
    startRecording,
    stopRecording,
    stopAll,
    isRecording,
    onStartFreeTalk,
    isRoleReversed,
    toggleRole,
    showFullScript,
    setShowFullScript,
    isMemorizationMode,
    setIsMemorizationMode,
    onPracticeEnd,
    setHasStartedPractice,
    hasStartedPractice,
  } = props;

  // ✅ practice 안전 참조
  const sceneIndex = practice?.sceneIndex ?? 0;
  const practiceMode = !!practice?.practiceMode;
  const dialogState = practice?.dialogState ?? DEFAULT_STATE;
  const scenes = Array.isArray(practice?.scenes) ? practice.scenes : [];

  const { language } = useLanguage();
  const { height } = Dimensions.get('window');

  const { abortWhisper, clearTranscript, stopAllRecordingLogic } = useVoice();

  // 🔧 실(實) 백그라운드 인정 임계값/디바운스(ms)
  const REAL_BG_MS = 1800;          // 이 시간 이상 백그라운드에 있었을 때만 "진짜"로 인정
  const PAUSE_ARM_MS = 600;         // 백그라운드 진입 직후 바로 pause하지 않고 약간 지연(깜빡임 방지)
  const RESUME_DEBOUNCE_MS = 3000;  // resume 중복 방지
  const PAUSE_DEBOUNCE_MS = 1200;   // pause 중복 방지

  const flatListRef = useRef<ScrollView | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollContainerRef = useRef<View | null>(null);
  const highlightRef = useRef<View | null>(null);
  const memorizationScrollRef = useRef<ScrollView | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<LevelType | null>(null);
  const hasEndedRef = useRef(false);
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  useImperativeHandle(ref, () => ({ resetAllStates }));

  const lastResumeHandledTimeRef = useRef<number>(0);
  const lastPauseHandledTimeRef = useRef<number>(0);
  const lastBackgroundTimeRef = useRef<number | null>(null);
  const whisperAbortedRef = useRef(false);
  const isResumingRef = useRef(false);

  const currentScene = useMemo(() => scenes?.[sceneIndex], [scenes, sceneIndex]);

  // ✅ 공통 초기화 함수
  const resetAllStates = async () => {
    try {
      stopAllRecordingLogic();
      practice?.setDialogState?.({ ...DEFAULT_STATE, isActive: false, isPaused: true });
      stopAll();
      if (Speech && typeof Speech.stop === 'function') await Speech.stop();

      if (isRecording) {
        console.log('🛑 [뒤로가기] 녹음 중 → 중단');
        try {
          await stopRecording();
        } catch (err) {
          console.warn('⚠️ stopRecording 중복 호출 무시:', (err as any)?.message || err);
        }
      }
      abortWhisper?.();
      clearTranscript();

      if (practiceMode && messages.length > 0 && typeof onPracticeEnd === 'function') {
        console.log('📩 [FEEDBACK] Triggering feedback generation');
        onPracticeEnd();
      }

      practice?.setDialogState?.({ ...DEFAULT_STATE });
      setShowFullScript(true);
      setIsMemorizationMode(false);

      setTimeout(() => {
        if (practiceMode) practice?.togglePracticeMode?.();
      }, 200);
    } catch (error) {
      console.error('Error in resetAllStates:', error);
    }
  };

  // ✅ AppState + Native 이벤트 감지 (백그라운드/복귀)
  useEffect(() => {
    const dialogRef = { current: dialogState };
    let armTimer: NodeJS.Timeout | null = null;

    const pauseNow = () => {
      const now = Date.now();
      if (now - lastPauseHandledTimeRef.current < PAUSE_DEBOUNCE_MS) {
        console.log('⚠️ [PAUSE] 중복 감지 → 무시');
        return;
      }
      lastPauseHandledTimeRef.current = now;

      console.log('🔴 [PAUSE] 확정 → 녹음/음성 정지 + isPaused=true');

      // ✅ Whisper 완전 중단 플래그 설정
      whisperAbortedRef.current = true;
      stopAllRecordingLogic?.();
      stopAll?.();
      try { Speech.stop(); } catch {}

      // ✅ Whisper 중단 호출 (비동기이지만 즉시 반환됨)
      abortWhisper?.();
      // ✅ 내부 상태 플래그 포함하여 안전하게 pause
      if (practice?.pauseForUserAck) {
        practice.pauseForUserAck();
      } else {
        practice?.setDialogState?.({ ...dialogRef.current, isPaused: true });
      }
    };

    const handlePauseArmed = () => {
      // 백그라운드 진입 즉시 pause하지 않고 약간 지연 → 깜빡임 방지
      if (armTimer) clearTimeout(armTimer);
      armTimer = setTimeout(() => {
        pauseNow();
      }, PAUSE_ARM_MS);
    };

    const handleResume = (source: 'native' | 'appstate') => {
      const now = Date.now();
      const bgAt = lastBackgroundTimeRef.current;
      const wasRealBackground = bgAt !== null && now - bgAt >= REAL_BG_MS;

      if (!wasRealBackground) return;

      if (now - lastResumeHandledTimeRef.current < RESUME_DEBOUNCE_MS) return;
      lastResumeHandledTimeRef.current = now;

      console.log(`🟢 [RESUME:${source}] 실BG 확인 → 복귀 팝업 표시`);

      // ✅ 복귀 시작 플래그 ON (자동재개 차단)
      isResumingRef.current = true;

      // ✅ 팝업 떠 있는 동안 자동 재개 금지
      practice?.setResumeGuard?.(true);   // 🔹 추가

      if (!practice?.dialogState?.isPaused) {
        pauseNow();
      }

      setShowResumeDialog(true);
      lastBackgroundTimeRef.current = null;
    };

    const handleAppStateChange = (nextState: AppStateStatus) => {
      console.log('📱 [APPSTATE CHANGE]', nextState);

      if (nextState === 'background') {
        lastBackgroundTimeRef.current = Date.now();
        console.log('📴 [APPSTATE] 백그라운드 진입 기록');
        handlePauseArmed(); // 약간 지연 후 pause (깜빡임 방지)
      } else if (nextState === 'active') {
        if (armTimer) { clearTimeout(armTimer); armTimer = null; }
        console.log('🔙 [APPSTATE] active → resume 판정');
        handleResume('appstate');
      }
    };

    // JS AppState 구독
    const subAppState = AppState.addEventListener('change', handleAppStateChange);

    // 네이티브 브리지 이벤트도 동일 게이트로 처리
    const subNativePause = DeviceEventEmitter.addListener('AppPaused', () => {
      // 혹시 네이티브만 먼저 온 경우를 대비해 타임스탬프 보정
      if (!lastBackgroundTimeRef.current) lastBackgroundTimeRef.current = Date.now();
      handlePauseArmed();
    });
    const subNativeResume = DeviceEventEmitter.addListener('AppResumed', () => {
      handleResume('native');
    });

    return () => {
      if (armTimer) clearTimeout(armTimer);
      subAppState.remove();
      subNativePause.remove();
      subNativeResume.remove();
    };
  }, [dialogState, practice, stopAllRecordingLogic, stopAll]);


  // ✅ 대본 끝 감지 (practice/scenes 준비되지 않으면 동작 안 함)
  useEffect(() => {
    if (!practice || !Array.isArray(scenes) || !currentScene?.dialogues) return;
    const maxStep = currentScene.dialogues.length ?? 0;

    const isEndReached =
      maxStep > 0 &&
      dialogState.step >= Math.max(0, maxStep - 1) &&
      dialogState.isUserTurn === false && 
      (practiceMode || isMemorizationMode) &&
      dialogState.isActive;

    if (!isEndReached || hasEndedRef.current) return;
    hasEndedRef.current = true;

    console.log('✅ [AUTO END] reached end of scene → trigger onPracticeEnd');

    try {
      onPracticeEnd?.();
    } finally {
      practice?.setDialogState?.({
        ...DEFAULT_STATE,
      });
      if (practiceMode) practice?.togglePracticeMode?.();
      setTimeout(() => {
        hasEndedRef.current = false;
      }, 500);
    }
  }, [
    practice,
    scenes,
    currentScene,
    dialogState.step,
    dialogState.isActive,
    dialogState.isUserTurn,
    practiceMode,
    isMemorizationMode,
    onPracticeEnd,
  ]);

  // ✅ 현재 라인 하이라이트 스크롤
  useEffect(() => {
    if (!showFullScript || !highlightRef.current || !scrollViewRef.current) return;

    const timer = setTimeout(() => {
      highlightRef.current?.measureLayout(
        scrollContainerRef.current!,
        (x: number, y: number) => {
          scrollViewRef.current?.scrollTo({ y: Math.max(0, y - 200), animated: true });
        },
        () => console.warn('Scroll error'),
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [dialogState.step, showFullScript]);

  // ✅ 암기모드 스크롤 끝으로
  useEffect(() => {
    if (isMemorizationMode && !showFullScript && memorizationScrollRef.current) {
      setTimeout(() => {
        memorizationScrollRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [dialogState.step, isMemorizationMode, showFullScript]);

  const handleNextScene = () => {
    if (!practice) return;
    const nextIndex = sceneIndex + 1;
    if (!Array.isArray(scenes) || nextIndex >= scenes.length) return;

    stopRecording();
    Speech.stop();

    const newState = {
      ...DEFAULT_STATE,
      isActive: true,
    };
    practice?.setSceneIndex?.(nextIndex);
    practice?.setDialogState?.(newState);

    if (scenes[nextIndex]?.dialogues?.length > 0) {
      setTimeout(() => {
        practice?.processDialogWithState?.(newState);
      }, 500);
    }
  };


  const getSceneTitle = () => {
    const desc = currentScene?.description;
    if (!desc) return 'No description';
    if (typeof desc === 'object') return desc[language] || desc['ko'];
    return desc;
  };

  const handleStartMemorization = () => {
    if (!practice) return;

    const prevState = practice?.dialogState ?? DEFAULT_STATE; 
    const userTurnNow = !!(practice?.dialogState?.isUserTurn);
    console.log('[START MEMO]', {
      isRoleReversed,
      practiceMode,
      step: prevState.step,
      userTurnNow,
    });

    try { Speech.stop(); } catch {}

    // ✅ 사용자 턴일 때 Whisper abort 생략 (무음 방지)
    if (!userTurnNow) {
      stopAllRecordingLogic?.();   // 내부에서 stopRecording 호출 → 서버 업로드 전 로컬만 정리
      stopAll?.();                 // (만약 내부에서 다시 stopRecording 호출한다면 제거해도 무방)
      abortWhisper?.();
      clearTranscript();
    } else {
      console.log('🧠 [MEMO MODE] User turn active → skip Whisper abort');
    }

    // 🔁 항상 완전 초기화 후 모드 진입
    setShowFullScript(false);
    setIsMemorizationMode(true);

    // ✅ dialogState 강제 활성화 및 pause 방지
    const baseState = {
      ...DEFAULT_STATE,
      step: prevState.step ?? 0,
      isActive: true,
      isPaused: false,
      isSpeaking: false,
      isUserTurn: prevState.isUserTurn ?? false,
    };

    practice?.setDialogState?.(baseState);

    // ✅ 연습 모드가 꺼져 있으면 강제 ON
    if (!practice?.practiceMode) {
      console.log('🔄 [MODE FIX] Enabling practice mode before memorization');
      practice?.togglePracticeMode?.();
    }

    // ✅ practiceMode 강제 ON (직접 암기 진입 대비)
  //  if (!practice?.practiceMode) {
  //    practice?.togglePracticeMode?.();
   // }

    // ✅ 처음 시작 기록
    if (!hasStartedPractice) {
      setHasStartedPractice?.(true);
      startProgress(topicKey, currentScene?.code ?? null, currentLevel);
    }

    // ✅ 첫 진입 시 첫 대사 강제 트리거 (중복 방지 플래그)
    setTimeout(() => {
      const st = practice?.dialogState ?? baseState;

      if (st.step === 0 && !userTurnNow) {
        console.log('🚀 [MEMO FIX] Direct memorization start → trigger first AI line');
        const initState = {
          ...baseState,
          isActive: true,
          isPaused: false,
          isUserTurn: false,
        };
        practice?.setDialogState?.(initState);
        practice?.processDialogWithState?.(initState);
        return;
      }

      // 🔁 일반 상황 (중간 단계에서 암기모드 진입)
      if (st.isActive && !st.isPaused && !st.isSpeaking) {
        console.log('▶️ [MEMO RESUME] Continue dialog flow');
        practice?.processDialogWithState?.(st);
      }
    }, 300);
  };

  const handleBackToNormalMode = async () => {
    console.log('[BACK NORMAL] Returning to script mode');

    stopAllRecordingLogic();
    stopAll();
    Speech.stop();
    abortWhisper?.();
    clearTranscript();

    setShowFullScript(true);
    setIsMemorizationMode(false);

    const preserved = {
       ...(practice?.dialogState ?? DEFAULT_STATE),
       isActive: true,
       isPaused: false,
       isSpeaking: false,
       isUserTurn: practice?.dialogState?.isUserTurn ?? false,
    };

    setTimeout(() => {
      practice?.setDialogState?.(preserved);
    }, 100);

    console.log('✅ [MODE] Script mode resumed (reset done)');
  };

  const renderMessage = ({ item }: { item: Message }) => {
    if (item.role === 'system') {
      return (
        <View style={{ alignItems: 'center', marginVertical: 8 }}>
          <Text style={{ fontStyle: 'italic', color: '#888', fontSize: 13 }}>📢 {item.text}</Text>
        </View>
      );
    }
    const actualRole = isRoleReversed ? (item.role === 'user' ? 'ai' : 'user') : item.role;
    if (!actualRole) return null;
    const isUser = actualRole === 'user';

    return (
      <View style={[baseStyles.messageRow, isUser ? baseStyles.rowRight : baseStyles.rowLeft]}>
        <View style={[baseStyles.bubble, isUser ? baseStyles.userBubble : baseStyles.aiBubble]}>
          <Text style={baseStyles.messageText}>{item.text}</Text>
          <Text style={baseStyles.timeText}>
            {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
      </View>
    );
  };

  const renderFullScript = () => {
    if (!showFullScript || !currentScene) return null;

    return (
      <View style={{ maxHeight: height * 0.7 }} ref={scrollContainerRef}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={baseStyles.scriptList}
          scrollEnabled
          scrollEventThrottle={16}
          decelerationRate="fast"
        >
          {(currentScene.dialogues || []).map((item: any, index: number) => {
            if (!item || !item.role) return null;
            const isCurrent = index === dialogState.step;
            const actualRole = isRoleReversed ? (item.role === 'user' ? 'ai' : 'user') : item.role;

            return (
              <View
                key={index}
                style={[baseStyles.scriptLine, isCurrent && baseStyles.currentLine]}
                ref={isCurrent ? highlightRef : null}
              >
                <Text style={[baseStyles.scriptText, { color: "#111" }]}>
                  {actualRole === 'ai' ? '🤖' : '🧑‍💬'} {item.text}
                </Text>
                {item.translations?.[language] && (
                  <Text style={styles.translationText}>{item.translations[language]}</Text>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderMemorizationMode = () => {
    if (!isMemorizationMode || showFullScript) return null;
    const visible = currentScene?.dialogues?.slice(0, dialogState.step + 1) || [];

    return (
      <View style={memStyles.container}>
        <Text style={memStyles.header}>🧠 Blind Mode</Text>

        <ScrollView
          ref={memorizationScrollRef}
          contentContainerStyle={{ padding: 16 }}
          scrollEnabled
          scrollEventThrottle={16}
          decelerationRate="fast"
          onContentSizeChange={() => memorizationScrollRef.current?.scrollToEnd({ animated: true })}
        >
          {visible.map((msg: any, index: number) => {
            const actualRole = isRoleReversed ? (msg.role === 'user' ? 'ai' : 'user') : msg.role;
            if (actualRole === 'user' && index >= dialogState.step) return null;

            return (
              <View
                key={index}
                style={{
                  flexDirection: actualRole === 'user' ? 'row-reverse' : 'row',
                  marginVertical: 10,
                  paddingHorizontal: 8,
                }}
              >
                <View
                  style={[
                    memStyles.bubble,
                    actualRole === 'user' ? memStyles.userBubble : memStyles.aiBubble,
                    index === visible.length - 1 && {
                      borderWidth: 2,
                      borderColor: '#FFD700',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 5,
                    },
                  ]}
                >
                  <Text
                    style={[
                      memStyles.text,
                      actualRole === 'user' ? memStyles.userText : memStyles.aiText,
                    ]}
                  >
                    {msg.text}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const levels: LevelType[] = ['beginner', 'intermediate', 'advanced'];
  const labels = { beginner: 'Light', intermediate: 'Middle', advanced: 'Heavy' };

  const renderLevelButtons = () => (
    <View style={levelStyles.levelButtonWrapper}>
      <View style={levelStyles.levelContainer}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level}
            style={[levelStyles.levelButton, currentLevel === level && levelStyles.levelButtonActive]}
            onPress={() => {
              const isSame = selectedLevel === level;
              setSelectedLevel(isSame ? null : level);
              setCurrentLevel(level);
              practice?.setSceneIndex?.(0);
              practice?.setDialogState?.({ ...DEFAULT_STATE });
            }}
          >
            <Text
              style={[
                levelStyles.levelButtonText,
                currentLevel === level && levelStyles.levelButtonTextActive,
              ]}
            >
              {labels[level]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedLevel && (
        <View style={levelStyles.sceneListBox}>
          <ScrollView style={levelStyles.sceneListScroll}>
            {(scenes ?? []).map((scene: any, index: number) => {
              const isCurrent = sceneIndex === index;
              const desc = (() => {
                if (!scene?.description) return "";
  
                // description이 객체라면
                if (typeof scene.description === "object") {
                  return scene.description[language] || scene.description.ko || "";
                }

                if (typeof scene.description === "string") {
                   return scene.description.trim();
                }

                return "";
              })();


              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    practice?.setSceneIndex?.(index);
                    practice?.setDialogState?.({
                      ...DEFAULT_STATE,
                      isActive: false,   // 👈 대화 시작 안함
                      isPaused: true,
                    });

                    setShowFullScript(true);
                    setIsMemorizationMode(false);
                    setSelectedLevel(null);
                  }}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                    backgroundColor: isCurrent ? '#fffacc' : 'transparent',
                  }}
                >
                  <Text style={{ fontWeight: isCurrent ? 'bold' : 'normal', fontSize: 13, color: "#111" }}>
                    📘 Scene {index + 1}: {desc}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );

  // ✅ practice가 아직 준비 안 된 경우 안전하게 렌더
  if (!practice || !Array.isArray(scenes) || scenes.length === 0) {
    return (
      <View style={{ padding: 16, flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: '#666' }}>Loading scenes…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderLevelButtons()}
      <Text style={[baseStyles.topicTitle, { color: "#111" }]}>
         Scene {sceneIndex + 1}: {getSceneTitle()}
      </Text>

      <TouchableOpacity
        style={[
          baseStyles.scriptToggle,
          { marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
        ]}
        onPress={() => {
          if (showFullScript) {
            // 대본 → 암기
            handleStartMemorization(); // 내부에서 setShowFullScript(false)와 안전 정리 수행
          } else {
            // 암기 → 대본
            handleBackToNormalMode(); // 내부에서 setShowFullScript(true)와 안전 정리 수행
          }
        }}
      >
        <Image
          source={
            showFullScript
              ? require('../assets/images/blindmode.png')
              : require('../assets/images/viewmode.png')
          }
          style={{ width: 60, height: 40, resizeMode: 'contain' }}
        />
        <Text style={[baseStyles.scriptToggleText, { fontWeight: 'bold', fontSize: 18 }]}>
          {showFullScript ? 'Blind Mode' : 'View Mode'}
        </Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        {showFullScript
          ? renderFullScript()
          : isMemorizationMode
          ? renderMemorizationMode()
          : (
            <ScrollView
              ref={flatListRef}
              style={baseStyles.messageList}
              contentContainerStyle={{ paddingBottom: 120 }}
              scrollEventThrottle={16}
              decelerationRate="fast"
              scrollEnabled
              onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            >
              {messages
                .filter(
                  (item) =>
                    item && item.text && (item.role === 'user' || item.role === 'ai' || item.role === 'system'),
                )
                .map((item, index) => renderMessage({ item }))}
            </ScrollView>
          )}
      </View>

      <View style={styles.fixedControls}>
        {practiceMode || isMemorizationMode ? (
          <>
            <View className="buttonWrapper" style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={isRecording ? stopRecording : startRecording}
                disabled={!dialogState.isUserTurn || dialogState.isSpeaking}
              >
                <Image
                  source={
                    isRecording ? require('../assets/images/stop.png') : require('../assets/images/wait.png')
                  }
                  style={{
                    width: 60,
                    height: 50,
                    resizeMode: 'contain',
                    opacity: !dialogState.isUserTurn || dialogState.isSpeaking ? 0.5 : 1,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={
                  dialogState.isPaused
                    ? () => {
                       practice?.handleResumePractice?.();
                      }
                    : dialogState.isActive
                    ? practice?.handlePausePractice
                    : handleStartMemorization
                }
                disabled={dialogState.isSpeaking || (dialogState.step === 0 && dialogState.isUserTurn)}
              >
                <Image
                  source={
                    (!dialogState.isActive && !dialogState.isPaused)
                      ? require('../assets/images/start.png')
                      : dialogState.isPaused
                      ? require('../assets/images/resume.png')
                      : dialogState.isActive
                      ? require('../assets/images/pause.png')
                      : require('../assets/images/start.png')
                  }
                  style={{
                    width: 60,
                    height: 50,
                    resizeMode: 'contain',
                    opacity: dialogState.isSpeaking || (dialogState.step === 0 && dialogState.isUserTurn) ? 0.5 : 1,
                  }}
                />
              </TouchableOpacity>
            </View>


          </>
        ) : (
          <>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                 onPress={() => {
                    console.log('▶️ [PLAY] User manually started practice');

                    // ✅ 역할 반전 여부에 따라 시작 턴 결정
                   const startAsUser = !!isRoleReversed;

                    // ✅ 모드 ON
                    if (!practice?.practiceMode) {
                    practice?.togglePracticeMode?.();
                    console.log('🔄 [MODE] Practice mode enabled by Play button');
                    }

                    // ✅ dialogState 설정
                    practice?.setDialogState?.({
                       ...DEFAULT_STATE,
                       isActive: true,
                       isPaused: false,
                       isSpeaking: false,
                       isUserTurn: startAsUser,  // ✅ 반전 역할 대응
                    });
 
                    // ✅ 학습 시작 기록
                    setHasStartedPractice?.(true);
                    startProgress(topicKey, currentScene?.code ?? null, currentLevel);

                    // ✅ 시작 턴이 사용자면 녹음부터 시작
                    if (startAsUser) {
                       console.log('🎤 [START] 사용자부터 시작 - 자동 녹음');
                       // 암기모드 아님 + 자동 녹음 가능 시
                       if (practice?.startAutoRecording) {
                          practice.startAutoRecording();
                       }
                    } else {
                       console.log('🤖 [START] AI부터 시작 - 대사 실행');
                       setTimeout(() => {
                          practice?.processDialogWithState?.({
                             ...DEFAULT_STATE,
                             isActive: true,
                             isUserTurn: false,
                          });
                       }, 200);
                    }
                 }}
              >
                <Image
                  source={require('../assets/images/play.png')}
                  style={{ width: 60, height: 50, resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={() => {
                  if (dialogState.isSpeaking) {
                    Alert.alert('Wait a minute!', 'Role change is not possible during audio output at this time.');
                    return;
                  }
                  toggleRole();
                }}
                disabled={dialogState.isSpeaking}
              >
                <Image
                  source={require('../assets/images/Role.png')}
                  style={{ width: 60, height: 50, resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      {/* ✅ 복귀 팝업 */}
      <ResumeDialog
        visible={showResumeDialog}
        onContinue={() => {
          setShowResumeDialog(false);
          console.log('▶️ [RESUME POPUP] Continue pressed');
          practice?.setResumeGuard?.(false);
            practice.resumeAfterUserAck?.();
        }}
      />
    </View>
  );
});

const levelStyles = StyleSheet.create({
  levelContainer: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginVertical: 8 },
  levelButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  levelButtonActive: { backgroundColor: '#007bff', borderColor: '#007bff' },
  levelButtonText: { fontSize: 14, color: '#333' },
  levelButtonTextActive: { color: '#fff', fontWeight: 'bold' },
  levelButtonWrapper: { alignItems: 'center' },
  sceneListBox: {
    width: '85%',
    maxHeight: 150,
    marginTop: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sceneListScroll: { width: '100%' },
});

const memStyles = StyleSheet.create({
  container: { flex: 1, marginBottom: 10, backgroundColor: '#fff' },
  header: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  bubble: {
    borderRadius: 16,
    padding: 16,
    maxWidth: '80%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userBubble: { backgroundColor: '#e3f2fd' },
  aiBubble: { backgroundColor: '#fce4ec' },
  text: { fontSize: 17, lineHeight: 24 },
  userText: { color: '#0d47a1' },
  aiText: { color: '#880e4f' },
});

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 120 },
  contentContainer: { flex: 1, marginBottom: 10 },
  fixedControls: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: '#FFF',
    paddingVertical: 10, paddingHorizontal: 16,
    borderTopWidth: 1, borderColor: '#CCC',
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    zIndex: 10,
  },
  translationText: { fontSize: 14, color: '#666', marginTop: 4 },
  buttonWrapper: { flex: 1, marginHorizontal: 4 },
});
