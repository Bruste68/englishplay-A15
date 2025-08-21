// ChatScreen.tsx
import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Alert, Text, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useVoice } from '../hooks/useVoice';
import { usePersistentChatHistory } from '../context/PersistentChatHistoryContext';
import { usePracticeDialog } from '../hooks/usePracticeDialog';
import { styles } from '../shared/styles/ChatScreen.styles';
import { PracticeDialogView } from '../components/PracticeDialogView';
import FreeChatView from '../components/FreeChatView'; // ✅ default import
import { TOPIC_TITLES } from '../constants/topics';
import { allDialogs } from '../constants/templateDialogs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '../hooks/useLanguage';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { generateFreeTalkFeedback, saveFeedbackToStorage } from '../utils/feedback';
import { useFeedbackStore } from '../store/feedbackStore';
import * as Speech from 'expo-speech';
import { getFeedbackByMode } from '../utils/feedback'; // ✅ 정확한 경로 확인
import { Image } from 'react-native';
import { checkPronunciation } from '../utils/checkPronunciation';
import { feedbackTemplates } from '../constants/feedbackTemplates';
import type {
  Message,
  FeedbackItem,
  DialogState,
  LanguageCode,
  PracticeScene,
  TopicType,
  LevelType
} from '../types';

function ChatScreen() {
  const { topicKey } = useLocalSearchParams();
  const { language } = useLanguage();
  const flatListRef = useRef<FlatList>(null);
  const { setFeedbackAvailable } = useFeedbackStore();

  // ✅ FIX: topicKey로 변경
  const rawTopicKey = Array.isArray(topicKey) ? topicKey[0] : topicKey ?? 'travel';
  const topicKeyResolved: TopicType = TOPIC_TITLES[rawTopicKey] ? (rawTopicKey as TopicType) : 'travel';
  const topicTitle = TOPIC_TITLES[topicKeyResolved] || '대화 연습';

  const [currentLevel, setCurrentLevel] = useState<LevelType>('beginner');
  const [showFullScript, setShowFullScript] = useState(true);
  const [isFreeTalk, setIsFreeTalk] = useState(false);
  const [isMemorizationMode, setIsMemorizationMode] = useState(false);
  const [localMessages, setLocalMessages] = useState<Message[]>([]);

  const { messagesByTopic, addMessage, clearMessages } = usePersistentChatHistory();
  const messages = messagesByTopic?.[topicKeyResolved] ?? [];

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

  const handlePracticeEnd = async () => {
    try {
      // messages와 localMessages 병합 후 중복 제거 (scene + step 기반)
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
    } catch (error) {
      console.error('🔴 [FEEDBACK ERROR] Failed to process feedback:', error);
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
    onPracticeEnd: handlePracticeEnd // ✅ 이렇게 넣어야 함
  });

  useEffect(() => {
    if (voiceError) {
      Alert.alert('음성 인식 오류', voiceError);
    }
  }, [voiceError]);

  const handleRoleToggle = () => {
    if (isFreeTalk) {
      // 프리토크 모드에서의 역할 변경
      practice.toggleRole();
      addMessage(
        topicKeyResolved,
        'ai', // system은 타입에 없음 → ai가 메시지를 전하는 형식
        `이제 당신이 ${practice.isRoleReversed ? 'AI' : 'User'} 역할을 하게 됩니다`,
        { isTemplate: true } // or { isSystem: true } if that's defined
      );
    } else {
      // 연습 모드에서의 역할 변경
      practice.toggleRole();
    }
  };

  const currentScene = practice.scenes?.[practice.sceneIndex];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
        {/* 왼쪽 FEEDBACK 버튼 */}
        <TouchableOpacity onPress={() => router.push('/feedback')}>
          <Image
            source={require('../assets/images/feedback.png')}
            style={{ width: 60, height: 40, resizeMode: 'contain' }}
          />
        </TouchableOpacity>

        {/* 중앙 타이틀 */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={[styles.topicTitle, { fontWeight: 'bold', fontSize: 18 }]}>
            {topicTitle}
          </Text>
        </View>

        {/* 오른쪽 TOPIC 버튼 */}
        <TouchableOpacity
          onPress={() => {
            stopRecording();
            Speech.stop();
            practice.setDialogState({
              step: 0,
              isUserTurn: false,
              isActive: false,
              isSpeaking: false,
              isPaused: false,
              loadingSummary: false,
            });
            setLocalMessages([]);
            router.back();
          }}
        >
          <Image
            source={require('../assets/images/topic.png')}
            style={{ width: 80, height: 50, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
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