// ChatScreen.tsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, FlatList, Alert, Text, BackHandler, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useVoice } from '../hooks/useVoice';
import { usePersistentChatHistory } from '../context/PersistentChatHistoryContext';
import { usePracticeDialog } from '../hooks/usePracticeDialog';
import { styles } from '../shared/styles/ChatScreen.styles';
import { PracticeDialogView, PracticeDialogViewHandle } from '../components/PracticeDialogView';
import FreeChatView from '../components/FreeChatView'; // ✅ default import
import { TOPIC_TITLES } from '../constants/topics';
import { allDialogs } from '../constants/templateDialogs';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useLanguage } from '../hooks/useLanguage';
import { router } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import { generateFreeTalkFeedback, saveFeedbackToStorage } from '../utils/feedback';
import { useFeedbackStore } from '../store/feedbackStore';
import * as Speech from 'expo-speech';
import { getFeedbackByMode } from '../utils/feedback'; // ✅ 정확한 경로 확인
import { checkPronunciation } from '../utils/checkPronunciation';
import { feedbackTemplates } from '../constants/feedbackTemplates';
import { API_BASE_URL } from '../lib/api';
import { startProgress, flushProgress } from '../hooks/useProgress';
import type {
  Message,
  FeedbackItem,
  DialogState,
  LanguageCode,
  PracticeScene,
  TopicType,
  LevelType
} from '../types';

// ChatScreen.tsx 내부

// ✅ 다국어 텍스트 추가
const localizedText = {
  networkErrorTitle: {
    ko: "네트워크 오류",
    en: "Network Error",
    zh: "网络错误",
    ja: "ネットワークエラー",
    vi: "Lỗi mạng",
  },
  networkErrorMessage: {
    ko: "네크웍트래픽으로 지연되고 있습니다. 연결상태 확인후 다시 시도해주세요.",
    en: "Network traffic is delayed. Please check your connection and try again.",
    zh: "网络流量延迟。请检查连接后重试。",
    ja: "ネットワークトラフィックが遅延しています。接続を確認して再試行してください。",
    vi: "Lưu lượng mạng đang chậm. Vui lòng kiểm tra kết nối và thử lại.",
  },
  noSpeechTitle: {
    ko: "음성이 감지되지 않았습니다",
    en: "No Speech Detected",
    zh: "未检测到语音",
    ja: "音声が検出されませんでした",
    vi: "Không phát hiện giọng nói",
  },
  noSpeechMessage: {
    ko: "잘 듣지 못했습니다. 다시 말씀해주시겠어요?",
    en: "I didn’t catch that. Could you repeat?",
    zh: "我没听清楚，可以再说一遍吗？",
    ja: "よく聞き取れませんでした。もう一度お願いします。",
    vi: "Tôi chưa nghe rõ. Bạn có thể nói lại không?",
  },
  wordbookButton: {
    ko: "단어 사전학습",
    en: "Wordbook Study",
    zh: "单词预习",
    ja: "単語学習",
    vi: "Học từ vựng",
  },
};

function ChatScreen() {
  const { topicKey } = useLocalSearchParams();
  const { language } = useLanguage();
  const flatListRef = useRef<FlatList>(null);
  const { setFeedbackAvailable } = useFeedbackStore();

  // ✅ 다국어 변환 함수 (이미 ChatScreen에 있음)
  const getLocalized = (obj: Record<string, string>): string => {
    if (obj[language]) return obj[language];
    if (language.startsWith("zh") && obj["zh"]) return obj["zh"];
    return obj["en"];
  };

  const rawTopicKey = Array.isArray(topicKey) ? topicKey[0] : topicKey ?? 'travel';
  const topicKeyResolved: TopicType = TOPIC_TITLES[rawTopicKey] ? (rawTopicKey as TopicType) : 'travel';
  const topicTitle = TOPIC_TITLES[topicKeyResolved] || '대화 연습';

  const [currentLevel, setCurrentLevel] = useState<LevelType>('beginner');
  const [showFullScript, setShowFullScript] = useState(true);
  const [isFreeTalk, setIsFreeTalk] = useState(false);
  const [isMemorizationMode, setIsMemorizationMode] = useState(false);
  const [localMessages, setLocalMessages] = useState<Message[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now()); 

  const { messagesByTopic, addMessage, clearMessages } = usePersistentChatHistory();
  const messages = messagesByTopic?.[topicKeyResolved] ?? [];
  const isSavingRef = useRef(false);   // ✅ 저장 중복 방지
  const hasEndedRef = useRef(false);   // ✅ 한 세션당 1회 보장
  const practiceRef = useRef<PracticeDialogViewHandle>(null);
  const [hasStartedPractice, setHasStartedPractice] = useState(false);

  const {
    transcript,
    isRecording,
    error: voiceError,
    startRecording,
    stopRecording,
    clearTranscript,
    startAutoRecording,
    abortWhisper,
    audioUri,

  } = useVoice();

  const handleBackToTopic = () => {
    practiceRef.current?.resetAllStates().finally(() => {
      router.replace('/screens/TopicSelectScreen'); 
    });
  };

  // ✅ 하드웨어 백버튼 처리
  useFocusEffect(
    useCallback(() => {
      const onBackPress = async () => {

        // 먼저 저장
        if (!hasEndedRef.current) {
          hasEndedRef.current = true;
          await handlePracticeEnd();
        }

        handleBackToTopic();
        return true; // 기본 동작 차단
      };

      const sub = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => sub.remove();
    }, [handleBackToTopic])
  );


  // ChatScreen.tsx (handle transcript 적용 지점에 추가)
  useEffect(() => {
    const cleanText = (transcript ?? "").trim();

    if (cleanText === "__NETWORK_ERROR__") {
      console.log("🌐 [Whisper] Network error detected");
      addMessage({
        role: "system",
        text: "Network error. Please try again.",
        step: practice.dialogState?.step ?? 0,
        scene: practice.scenes?.[practice.sceneIndex]?.code ?? "unknown",
        timestamp: Date.now(),
      });

      practice.pauseForUserAck?.();

      // Alert 띄우고 OK 누르면 다시 진행
      Alert.alert(
        getLocalized(localizedText.networkErrorTitle),
        getLocalized(localizedText.networkErrorMessage),
        [
          {
            text: "OK",
            onPress: () => {
              practice.resumeAfterUserAck?.();
            },
          },
        ],
        { cancelable: false }
      );

      return;
    }

    if (cleanText === "__NO_SPEECH__") {
      console.log("🤔 [Whisper] No speech detected → repeat request");
      addMessage({
        role: "system",
        text: "I didn’t catch that. Could you repeat?",
        step: practice.dialogState?.step ?? 0,
        scene: practice.scenes?.[practice.sceneIndex]?.code ?? "unknown",
        timestamp: Date.now(),
      });

      practice.pauseForUserAck?.();

      // Alert 띄우고 OK 누르면 다시 진행
      Alert.alert(
        getLocalized(localizedText.noSpeechTitle),
        getLocalized(localizedText.noSpeechMessage),
        [
          {
            text: "OK",
            onPress: () => {
              practice.resumeAfterUserAck?.();
            },
          },
        ],
        { cancelable: false }
      );
      return;
    }


    // ✅ 3. 완전히 빈 응답일 경우 → 무시
    if (!cleanText) {
      console.log("⚠️ [Whisper] Empty text ignored");
      return;
    }

    // ✅ (1) 프리톡일 때는 무시
    if (isFreeTalk) return;

    // ✅ (2) 실제 연습 시작 전이면 무시
    if (!hasStartedPractice) return;

    // ✅ (3) Practice 모드가 아닐 때 무시
    if (!practice?.practiceMode) return;

    // ✅ (4) 현재가 '사용자 턴'이 아닐 때 무시 (사용자 발화만 추가)
    if (!practice?.dialogState?.isUserTurn) return;

    // ✅ (5) 같은 스텝/씬에 동일 텍스트가 이미 들어갔으면 무시 (중복 방지)
    const sceneCode = practice.scenes?.[practice.sceneIndex]?.code ?? "unknown";
    const currStep = practice.dialogState?.step ?? 0;
    const last = messages[messages.length - 1];
    if (
      last &&
      last.role === 'user' &&
      last.step === currStep &&
      last.scene === sceneCode &&
      last.text?.trim() === cleanText
    ) {
      console.log("↩️ [Whisper] duplicate transcript ignored");
      return;
    }

    // ✅ 정상 응답만 메시지 추가
    addMessage({
      role: 'user',
      text: cleanText,
      step: currStep,
      scene: sceneCode,
      timestamp: Date.now(),
    });
  }, [transcript]);

  const handlePracticeEnd = async () => {

    if (!hasStartedPractice) {
      console.log("⏸️ [SKIP] Practice never started → feedback not saved");
      return;
    }

    // handlePracticeEnd or flushProgress 호출 전
    if (!topicKey || !currentLevel || !currentScene?.code) {
      console.warn('⚠️ [FLUSH BLOCKED] Missing topic/level/scene info → skip flushProgress');
      return;
    }

    if (isSavingRef.current) {
     console.log("⏸️ [SKIP] handlePracticeEnd already running");
      return;
    }
    isSavingRef.current = true;

    try {
      console.log("▶️ handlePracticeEnd 시작");

      const combinedMessages = [...messages, ...localMessages].filter(
        (msg, index, self) =>
          index === self.findIndex(
            (m) =>
              m.text === msg.text &&
              m.role === msg.role &&
              m.step === msg.step &&
              m.scene === msg.scene // ✅ scene 기준까지 포함
          )
      );

      console.log("📡 handlePracticeEnd combinedMessages:", combinedMessages.length);

      const feedbackData = {
        mode: 'practice',
        topic: topicKey,
        sceneTitle: currentScene?.description || 'Practice Session',
        level: currentLevel,
        createdAt: new Date().toISOString() + '-' + Math.random().toString(36).substring(2, 6), // ✅ 고유성 강화
        items: [] as FeedbackItem[],
      };

      const dialogues = practice.scenes[practice.sceneIndex]?.dialogues || [];

      for (let i = 0; i < dialogues.length; i++) {
        const expectedText = dialogues[i].text;
        const userMessage = combinedMessages.find(
          (m) => m.step === i && m.role === 'user'
        );

        if (!userMessage || !userMessage.text) continue;

        const missedWords = checkPronunciation(userMessage.text, expectedText);
        const feedbackMessage =
          missedWords.length === 0
            ? feedbackTemplates.perfect
            : feedbackTemplates.missingWord(missedWords[0]);

        feedbackData.items.push({
          type: 'pronunciation',
          user: userMessage.text,
          correction: expectedText,
          tip: feedbackMessage,
          role: 'user',
          text: userMessage.text,
          metadata: {
            audioFile: userMessage.metadata?.audioFile || '',
          },
        });
      }

      const saveResult = await saveFeedbackToStorage(feedbackData);
      if (saveResult) {
        useFeedbackStore.getState().updateFeedbackStats();
      } else {
        console.log('⚠️ [FEEDBACK] Feedback save failed');
      }
      setLocalMessages([]); 

      // -----------------------------
      // 2. Progress 저장 (minutes 계산 후 API 호출)
      // -----------------------------
      const token = await AsyncStorage.getItem("authToken");
      console.log("📡 handlePracticeEnd token:", token);

      if (token) {
        await flushProgress();
        console.log("✅ Progress flush 호출됨");
      }
    } catch (error) {
      console.error('🔴 [PRACTICE END ERROR]', error?.name, error?.message, error);
    } finally {
      isSavingRef.current = false;
      setHasStartedPractice(false);
    }
  };

  const practice = usePracticeDialog({
    topicKey: topicKeyResolved,
    currentLevel,
    transcript,
    clearTranscript,
    addMessage,
    setLocalMessages,
    startRecording, // 추가
    stopRecording, // 추가
    startAutoRecording, // 추가
    isRecording, // 추가
    audioUri,
    onPracticeEnd: () => {
      if (!hasEndedRef.current) {
        hasEndedRef.current = true;
        handlePracticeEnd().finally(() => {
          // 다음 세션 준비를 위해 잠시 뒤 해제
          setTimeout(() => { hasEndedRef.current = false; }, 1000);
        });
      }
    }
  });

  const currentScene = practice?.scenes?.[practice.sceneIndex] ?? null;

  // ✅ Release에서 scenes가 아직 준비 안됐을 경우 방어 처리
  if (!practice?.scenes || practice.scenes.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={{ marginTop: 8, color: "#666" }}>
            {getLocalized(localizedText.networkErrorMessage) || "Loading scenes..."}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  useEffect(() => {
    if (!topicKey || !currentLevel) return;
    if (isMemorizationMode) return; // 추가

    console.log('🔄 [RESET] topic 또는 level 변경 감지됨 → 상태 초기화');
    practice.resetAllStates?.();
  }, [topicKey, currentLevel]);


  useEffect(() => {
    if (voiceError) {
      Alert.alert('음성 인식 오류', voiceError);
    }
  }, [voiceError]);

  const handleRoleToggle = () => {
    practice.toggleRole();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.header,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between', // 중앙 정렬
            paddingHorizontal: 16,
          },
        ]}
      >

        {/* 좌측 상단: 단어 사전학습 버튼 */}
        <TouchableOpacity
          onPress={() => {
            const cur = practice.scenes?.[practice.sceneIndex];
            if (!cur?.code) {
              console.warn("⚠️ [WORD BOOK] Scene not ready yet");
              Alert.alert("잠시 후 다시 시도해주세요.");
              return;
            }

            // navigate 또는 push 모두 가능. 같은 스택이라면 back이 정상 작동.
            router.navigate({
              pathname: "/screens/WordBookScreen",
              params: {
                from: "practice",
                topicKey: topicKeyResolved,
                level: currentLevel,
                sceneCode: cur.code,
              },
            });
          }}
          style={{
            paddingVertical: 6,
            paddingHorizontal: 10,
            backgroundColor: '#007AFF',
            borderRadius: 6,
          }}
        >
          <Text style={{ color: 'white', fontSize: 14 }}>
            {getLocalized(localizedText.wordbookButton)}
          </Text>
        </TouchableOpacity>

        {/* 중앙 타이틀 */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={[styles.topicTitle, { fontWeight: 'bold', fontSize: 18 }]}>
            {topicTitle}
          </Text>
        </View>

        {/* 오른쪽 빈 공간 확보 */}
        <View style={{ width: 80 }} />
      </View> 

      {isFreeTalk ? (
        <FreeChatView
          topicKey={topicKeyResolved}
          messages={messages}
          addMessage={addMessage}
          startRecording={startRecording}
          stopRecording={stopRecording}
          isRecording={isRecording}
          transcript={transcript}
          clearTranscript={clearTranscript}
          onExitFreeTalk={() => setIsFreeTalk(false)}
        />
      ) : (
        <PracticeDialogView
          ref={practiceRef}
          key={`${topicKeyResolved}-${currentLevel}`}
          flatListRef={flatListRef}
          showFullScript={showFullScript}
          setShowFullScript={(val) => {
               if (val) {
                 // View Mode 진입
                 setShowFullScript(true);
                 setIsMemorizationMode(false);
               } else {
                 // Blind Mode(암기 모드) 진입
                 setShowFullScript(false);
                 setIsMemorizationMode(true);

                 practice.setDialogState({
                   step: 0,
                   isUserTurn: false,
                   isActive: false, // ✅ 자동 흐름 차단을 위해 반드시 false
                   isSpeaking: false,
                   isPaused: false,
                   loadingSummary: false,
                 });
               }
          }}
          isMemorizationMode={isMemorizationMode}
          setIsMemorizationMode={setIsMemorizationMode}
          messages={messages}
          isRecording={isRecording}
          startRecording={startRecording}
          stopRecording={stopRecording}
          practice={practice}
          topicKey={topicKeyResolved}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          hasStartedPractice={hasStartedPractice} 
          setHasStartedPractice={setHasStartedPractice}
          onStartFreeTalk={() => {
            clearMessages(topicKeyResolved);      // ✅ 기존 대화 내용 삭제
            clearTranscript();            // ✅ 음성 기록 삭제
            practice.setDialogState({     // ✅ 연습모드 상태 비활성화
              step: 0,
              isUserTurn: false,
              isActive: false,
              isSpeaking: false,
              isPaused: false,
              loadingSummary: false,
            });
            setLocalMessages([]);         // ✅ 프리모드 메시지 초기화
            setIsFreeTalk(true);          // ✅ 프리모드 시작
          }}
          stopAll={() => {
            stopRecording();
            if (Speech && typeof Speech.stop === 'function') {
              Speech.stop();
            }
          }}
          isRoleReversed={practice.isRoleReversed}
          toggleRole={practice.toggleRole}
          startAutoRecording={startAutoRecording}
          onPracticeEnd={handlePracticeEnd}
        />
      )}
    </SafeAreaView>
  );
}

export default ChatScreen;