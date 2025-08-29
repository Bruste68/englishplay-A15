import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  StyleSheet,
  Dimensions,  
  Alert,
  BackHandler
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles as baseStyles } from '../shared/styles/ChatScreen.styles';
import { router } from 'expo-router';
import { LevelType, Message } from '../types';
import * as Speech from 'expo-speech';
import { LogBox } from 'react-native';
import { saveFeedbackToStorage } from '../utils/feedback'; 
import { Image, FlatList } from 'react-native';
import { useVoice } from '../hooks/useVoice';

LogBox.ignoreLogs([
  'new NativeEventEmitter',
  'Setting a timer',
]);

interface PracticeDialogViewProps {
  topicKey: string;
  currentLevel: string;
  setCurrentLevel: (level: LevelType) => void;
  messages: any[];
  practice: any;
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
  flatListRef?: React.RefObject<FlatList<any> | null>;
  onPracticeEnd?: () => void;
}

export const PracticeDialogView: React.FC<PracticeDialogViewProps> = ({
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
  onPracticeEnd
}) => {
  const {
    sceneIndex,
    togglePracticeMode,
    practiceMode,
    dialogState,
    scenes,
    setSceneIndex,
    setDialogState,
    processDialogWithState,
    handlePausePractice,
    handleResumePractice
  } = practice;

  const {
    abortWhisper,
    clearTranscript,
    stopAllRecordingLogic
  } = useVoice();

  const flatListRef = useRef<ScrollView | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const scrollContainerRef = useRef<View | null>(null);
  const highlightRef = useRef<View | null>(null);
  const memorizationScrollRef = useRef<ScrollView | null>(null);
  const [language, setLanguage] = useState('ko');
  const currentScene = scenes?.[sceneIndex];
  const { height } = Dimensions.get('window');
  const [selectedLevel, setSelectedLevel] = useState<LevelType | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('appLanguage').then(lang => {
      if (lang) setLanguage(lang);
    });
  }, []);

  useEffect(() => {
    const onBackPress = (): boolean => {
      // 물리 버튼 누르면 이전 화면으로 이동하도록
      if (router.canGoBack()) {
        handleBackToNormalMode();
        router.replace('/login'); 
        return true; // 기본 동작 막음
      }
      return false; // 조건 안 맞으면 기본 동작 허용
    };

    // ✅ addEventListener가 Subscription 객체 반환
    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // ✅ cleanup에서 subscription.remove() 호출
    return () => subscription.remove();
  }, []);

  // 🎯 추가 위치 예시 (다른 useEffect들과 같은 위치에)
  useEffect(() => {
    const currentScene = scenes[sceneIndex];
    const maxStep = currentScene?.dialogues?.length ?? 0;

    if (
      (practiceMode || isMemorizationMode) &&
      dialogState.step >= maxStep &&
      typeof onPracticeEnd === 'function'
    ) {
      console.log('✅ [AUTO END] Triggering feedback generation due to end of script');
      onPracticeEnd();
      setDialogState({
        step: 0,
        isUserTurn: false,
        isActive: false,
        isSpeaking: false,
        loadingSummary: false,
      });
      togglePracticeMode();
    }
  }, [dialogState.step, scenes, sceneIndex]);


  useEffect(() => {
    if (!showFullScript || !highlightRef.current || !scrollViewRef.current) return;

    const timer = setTimeout(() => {
      highlightRef.current?.measureLayout(
        scrollContainerRef.current!,
        (x: number, y: number) => {
          scrollViewRef.current?.scrollTo({ y: Math.max(0, y - 200), animated: true });
        },
        () => console.warn('Scroll error')
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [dialogState.step, showFullScript]);



  useEffect(() => {
    const checkSpeech = async () => {
      try {
        if (!Speech) {
          console.warn('Speech module is not available');
        }
      } catch (error) {
        console.error('Error checking Speech module:', error);
      }
    };
    checkSpeech();
  }, []);

  useEffect(() => {
    if (isMemorizationMode && !showFullScript && memorizationScrollRef.current) {
      setTimeout(() => {
        memorizationScrollRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [dialogState.step, isMemorizationMode, showFullScript]);

  const handleNextScene = () => {
    const nextIndex = sceneIndex + 1;
    if (nextIndex >= scenes.length) return;

    stopRecording();
    Speech.stop();

    const newState = {
      step: 0,
      isUserTurn: false,
      isActive: true,
      isSpeaking: false,
      loadingSummary: false,
    };
    setSceneIndex(nextIndex);
    setDialogState(newState);

    // 다음 장면이 있고 대사가 있을 경우에만 처리 시작
    if (scenes[nextIndex]?.dialogues?.length > 0) {
      setTimeout(() => {
        // 새로운 장면의 첫 대사 처리
        processDialogWithState(newState);
      }, 500);
    }
  };

  useEffect(() => {
    if (
      (practiceMode || isMemorizationMode) &&
      dialogState.isActive &&
      !dialogState.isPaused &&
      !dialogState.isSpeaking &&
      scenes.length > 0 &&
      currentScene?.dialogues?.length > dialogState.step &&
      dialogState.step >= 0 // step 음수 방지      
    ) {
      if (dialogState.step === 0 && dialogState.isActive && !dialogState.isUserTurn) {
        console.log('[FIX] STEP 0인데 isUserTurn false → AI 먼저 대사 처리');
        processDialogWithState(dialogState);
        return;
      }
      // 💡 추가 조건: 흐름 초기화를 기다리는 중이면 실행 안 함
      if (dialogState.step === 0 && !dialogState.isUserTurn) {
        console.log('🛑 [AUTO-BLOCK] 초기 상태, 자동 흐름 차단');
        return;
      }
      console.log('🔁 [AUTO] Triggering next line from useEffect');
      processDialogWithState(dialogState);

      // 🔥 릴리즈에서 대화 끊김 방지 (재시도)
      setTimeout(() => {
        if (dialogState.isActive && !dialogState.isSpeaking && !dialogState.isPaused) {
          console.log("🔁 [SAFE RETRY] Retrying auto trigger");
          processDialogWithState(dialogState);
        }
      }, 150);
    }
  }, [
    practiceMode,
    isMemorizationMode,
    dialogState.step,
    dialogState.isActive,
    dialogState.isPaused,
    dialogState.isSpeaking,
    currentScene 
  ]);

  const getSceneTitle = () => {
    const desc = currentScene?.description;
    if (!desc) return 'No description';
    if (typeof desc === 'object') return desc[language] || desc['ko'];
    return desc;
  };

  const handleStartMemorization = () => {
    console.log('[START MEMO] practiceMode:', practiceMode); 
    // ✅ practiceMode가 꺼져 있을 때만 켜기
    if (!practiceMode) togglePracticeMode();

    const initialUserTurn = practice.isRoleReversed ? true : false;
    setDialogState({
      step: 0,
      isUserTurn: initialUserTurn,  // ✅ 역할 변경 반영
      isActive: true, // ✅ 자동 흐름 작동을 위한 핵심 설정
      isSpeaking: false,
      isPaused: false,
      loadingSummary: false,
    });
  };

  const handleBackToNormalMode = async () => {
    stopAllRecordingLogic(); // <- useVoice에서 가져온 것

    try {

      // ✅ 1. 대화 흐름 즉시 멈춤
      practice.setDialogState({
        ...practice.dialogState,
        isActive: false,
        isPaused: true,
      });

      setDialogState((prev: any) => ({
        ...prev,
        isActive: false,
        isSpeaking: false,
        isPaused: false
      }));
      stopAll();  
      if (Speech && typeof Speech.stop === 'function') {
        await Speech.stop();
      } else {
        console.warn('Speech module is not available');
      }

      // 🎧 녹음 중이면 중단
  //    if (isRecording) {
  //      console.log('🛑 [뒤로가기] 녹음 중 → 중단');
  //      await stopRecording();  // useVoice에서 가져온 함수
  //    }

      if (isRecording) {
        console.log('🛑 [뒤로가기] 녹음 중 → 중단');
        try {
          await stopRecording();
        } catch (err) {
          console.warn('⚠️ stopRecording 중복 호출 무시:', err?.message || err);
        }
      }

      // 🌐 Whisper 전송 중이면 중단
      if (abortWhisper && typeof abortWhisper === 'function') {
        abortWhisper(); // AbortController 방식
        console.log('🛑 [뒤로가기] Whisper 요청 중단');
      }

      // 📄 transcript 초기화
      clearTranscript();

      // 피드백 생성 및 저장 로직 추가
      if (practiceMode && messages.length > 0 && typeof onPracticeEnd === 'function') {
        console.log('📩 [FEEDBACK] Triggering feedback generation');
        onPracticeEnd();
      }
  
      setDialogState({
        step: 0,
        isUserTurn: false,
        isActive: false,
        isSpeaking: false,
        loadingSummary: false,
      });
  
      setShowFullScript(true);
      setIsMemorizationMode(false);
       setTimeout(() => {
         if (practiceMode) togglePracticeMode(); // 연습 모드가 켜져 있으면 끄기
       }, 200);
    } catch (error) {
      console.error('Error in handleBackToNormalMode:', error);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    if (item.role === 'system') {
      return (
        <View style={{ alignItems: 'center', marginVertical: 8 }}>
          <Text style={{ fontStyle: 'italic', color: '#888', fontSize: 13 }}>
            📢 {item.text}
          </Text>
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
            {new Date(item.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
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
          scrollEnabled={true}
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
                <Text style={baseStyles.scriptText}>
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
    const visibleMessages = currentScene?.dialogues?.slice(0, dialogState.step + 1) || [];

    return (
      <View style={memStyles.container}>
        <Text style={memStyles.header}>🧠 Blind Mode</Text>

        <ScrollView 
          ref={memorizationScrollRef}
          contentContainerStyle={{ padding: 16 }}
          scrollEnabled={true}
          scrollEventThrottle={16}
          decelerationRate="fast"
          onContentSizeChange={() => memorizationScrollRef.current?.scrollToEnd({ animated: true })}
        >
          {visibleMessages.map((msg: any, index: number) => {
            const actualRole = isRoleReversed ? (msg.role === 'user' ? 'ai' : 'user') : msg.role;
            if (actualRole === 'user' && index >= dialogState.step) return null;

            return (
              <View
                key={index}
                style={{
                  flexDirection: actualRole === 'user' ? 'row-reverse' : 'row',
                  marginVertical: 10,
                  paddingHorizontal: 8
                }}
              >
                <View style={[
                  memStyles.bubble,
                  actualRole === 'user' ? memStyles.userBubble : memStyles.aiBubble,
                  index === visibleMessages.length - 1 && { 
                    borderWidth: 2, 
                    borderColor: '#FFD700',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 5
                  }
                ]}>
                  <Text style={[
                    memStyles.text,
                    actualRole === 'user' ? memStyles.userText : memStyles.aiText
                  ]}>
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
      {/* 버튼 고정 위치 */}
      <View style={levelStyles.levelContainer}>
        {levels.map(level => (
          <TouchableOpacity
            key={level}
            style={[
              levelStyles.levelButton,
              currentLevel === level && levelStyles.levelButtonActive
            ]}
            onPress={() => {
              if (dialogState.isSpeaking || dialogState.isActive) {
                  Alert.alert(
                    'On talking',
                    'Conversation is currently in progress. Please press the exit button first.',
                    [{ text: 'Confirm' }]
                  );
                  return;
              }
              const isSame = selectedLevel === level;
              setSelectedLevel(isSame ? null : level);
              setCurrentLevel(level);
              setSceneIndex(0);
              setDialogState({
                step: 0,
                isUserTurn: false,
                isActive: false,
                isSpeaking: false,
                loadingSummary: false,
              });
            }}
          >
            <Text style={[
              levelStyles.levelButtonText,
              currentLevel === level && levelStyles.levelButtonTextActive
            ]}>
              {labels[level]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 목차는 버튼과 분리해서 고정 위치 */}
      {selectedLevel && (
        <View style={levelStyles.sceneListBox}>
          <ScrollView style={levelStyles.sceneListScroll}>
            {(practice?.scenes ?? []).map((scene: any, index: number) => {
              const isCurrent = sceneIndex === index;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSceneIndex(index);
                    setDialogState({
                      step: 0,
                      isUserTurn: false,
                      isActive: true,
                      isSpeaking: false,
                      loadingSummary: false,
                    });
                    if (!practiceMode) togglePracticeMode();
                    setShowFullScript(true);
                    setIsMemorizationMode(false);
                    setSelectedLevel(null); // 선택 종료 시 닫기
                  }}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                    backgroundColor: isCurrent ? '#fffacc' : 'transparent',
                  }}
                >
                  <Text style={{
                    fontWeight: isCurrent ? 'bold' : 'normal',
                    fontSize: 13
                  }}>
                    📘 Scene {index + 1}: {typeof scene.description === 'string'
                      ? scene.description
                      : scene.description?.[language] || scene.description?.ko || ''}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderLevelButtons()}
      <Text style={baseStyles.topicTitle}>
        Scene {sceneIndex + 1}: {getSceneTitle()}
      </Text>

      <TouchableOpacity
        style={[baseStyles.scriptToggle, {
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }]}
        onPress={() => setShowFullScript(!showFullScript)}
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
        {showFullScript ? (
          renderFullScript()
        ) : isMemorizationMode ? (
          renderMemorizationMode()
        ) : (
          <ScrollView
            ref={flatListRef}
            style={baseStyles.messageList}
            contentContainerStyle={{ paddingBottom: 120 }}
            scrollEventThrottle={16}
            decelerationRate="fast"
            scrollEnabled={true}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          >
            {messages
              .filter(item => item && item.text && (item.role === 'user' || item.role === 'ai' || item.role === 'system'))
              .map((item, index) => renderMessage({ item }))}
          </ScrollView>
        )}
      </View>

      <View style={styles.fixedControls}>
        {practiceMode || isMemorizationMode ? (
          <>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity 
                 onPress={isRecording ? stopRecording : startRecording} 
                 disabled={!dialogState.isUserTurn || dialogState.isSpeaking} // AI가 말할 때 비활성화
              >
                <Image
                  source={
                    isRecording
                      ? require('../assets/images/stop.png')
                      : require('../assets/images/wait.png')
                  }
                  style={{ width: 60, height: 50, resizeMode: 'contain', opacity: (!dialogState.isUserTurn || dialogState.isSpeaking) ? 0.5 : 1 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                 onPress={
                   dialogState.isPaused
                     ? handleResumePractice
                     : dialogState.isActive
                     ? handlePausePractice
        //             : togglePracticeMode
                     : handleStartMemorization
                 }
                 disabled={dialogState.isSpeaking || (dialogState.step === 0 && dialogState.isUserTurn)} 
               >
                  <Image
                    source={
                     dialogState.isPaused
                       ? require('../assets/images/resume.png')
                       : dialogState.isActive
                       ? require('../assets/images/pause.png')
                       : require('../assets/images/start.png')
                    }
                    style={{ 
                     width: 60, 
                     height: 50, 
                     resizeMode: 'contain', 
                     opacity: (dialogState.isSpeaking || (dialogState.step === 0 && dialogState.isUserTurn)) ? 0.5 : 1 
                    }}
                  />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity 
                 onPress={handleBackToNormalMode} 
                 disabled={dialogState.isSpeaking} // AI가 말할 때 비활성화
              >
                <Image
                  source={require('../assets/images/back.png')}
                  style={{ width: 60, height: 50, resizeMode: 'contain', opacity: dialogState.isSpeaking ? 0.5 : 1 }}
                />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity onPress={togglePracticeMode}>
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

            <View style={styles.buttonWrapper}>
              <TouchableOpacity 
                 onPress={() => (router.canGoBack() ? router.back() : router.replace('/ChatScreen'))}
                 disabled={dialogState.isSpeaking} // AI가 말할 때 비활성화
              >
                <Image
                  source={require('../assets/images/back.png')}
                  style={{ width: 60, height: 50, resizeMode: 'contain', opacity: dialogState.isSpeaking ? 0.5 : 1 }}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const levelStyles = StyleSheet.create({
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 8,
  },
  levelButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  levelButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  levelButtonText: {
    fontSize: 14,
    color: '#333',
  },
  levelButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  levelButtonWrapper: {
    alignItems: 'center',
  },
  sceneListBox: {
    width: '85%',
    maxHeight: 150,
    marginTop: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sceneListScroll: {
    width: '100%',
  },
});

const memStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  header: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 16
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
  userBubble: {
    backgroundColor: '#e3f2fd'
  },
  aiBubble: {
    backgroundColor: '#fce4ec'
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 17,
    lineHeight: 24
  },
  userText: {
    color: '#0d47a1'
  },
  aiText: {
    color: '#880e4f'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 120,
  },
  contentContainer: {
    flex: 1,
    marginBottom: 10,
  },
  fixedControls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: '#CCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 10,
  },
  translationText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
});