import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import { fetchGptResponse } from '../services/fetchGptResponse';
import { generateFreeTalkFeedback, saveFeedbackToStorage } from '../utils/feedback';
import { useLanguage } from '../hooks/useLanguage';
import { useFeedbackStore } from '../store/feedbackStore';
import type { Message, FeedbackItem, DialogState, LanguageCode, PracticeScene, TopicType, LevelType } from '../types';
import { usePersistentChatHistory } from '../context/PersistentChatHistoryContext';

const feedbackTranslations = {
  en: {
    saved: 'Your feedback has been saved!',
    saveError: 'Failed to save feedback data.',
    noErrors: 'No significant errors found.',
    processError: 'An error occurred during feedback processing.'
  },
  ko: {
    saved: '피드백이 저장되었습니다!',
    saveError: '피드백 저장에 실패했습니다.',
    noErrors: '중요한 오류가 발견되지 않았습니다.',
    processError: '피드백 처리 중 오류가 발생했습니다.'
  },
  ja: {
    saved: 'フィードバックが保存されました！',
    saveError: 'フィードバックの保存に失敗しました。',
    noErrors: '重大なエラーは見つかりませんでした。',
    processError: 'フィードバック処理中にエラーが発生しました。'
  },
  zh: {
    saved: '反馈已保存！',
    saveError: '保存反馈数据失败。',
    noErrors: '未发现明显错误。',
    processError: '反馈处理过程中发生错误。'
  }
};

type FreeChatViewProps = {
  topicKey: string;
  messages: Message[];
  addMessage: (
    topic: string,
    role: 'user' | 'ai',
    text: string,
    metadata?: Message['metadata'],
  ) => void;
  startRecording: () => void;
  stopRecording: () => void;
  isRecording: boolean;
  transcript: string;
  clearTranscript: () => void;
  onExitFreeTalk: () => void;
};

export default function FreeChatView({
  topicKey,
  messages,
  addMessage,
  startRecording,
  stopRecording,
  isRecording,
  transcript,
  clearTranscript,
  onExitFreeTalk,
}: FreeChatViewProps) {
  const [localMessages, setLocalMessages] = useState(messages ?? []);
  const [feedbackMessage, setFeedbackMessage] = useState<{ type: string; text: string } | null>(null);
  const { language } = useLanguage();
  const isCancelledRef = useRef(false);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const noResponseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const NO_RESPONSE_TIMEOUT = 10000; // 10초 무응답 시 안내 메시지
  const flatListRef = useRef<FlatList>(null);
  const [speakingIndex, setSpeakingIndex] = useState(-1); // 현재 말하고 있는 index
  const [currentSpeakingText, setCurrentSpeakingText] = useState<string[]>([]);
  const [speakingWordIndex, setSpeakingWordIndex] = useState(-1); // <- 텍스트 단위 하이라이트용

  const scrollToIndex = (index: number) => {
     requestAnimationFrame(() => {
       flatListRef.current?.scrollToIndex({ index, animated: true });
     });
  };

  const splitIntoWords = (text: string) => {
     return text.trim().split(/(\s+)/); // 공백 포함해서 split해서 원문 유지
  };

  useEffect(() => {
    // 초기화 시 자동 녹음 시작
    startAutoRecording();
    return () => {
      isCancelledRef.current = true;
      clearTimers();
    };
  }, []);

  useEffect(() => {
     // 메시지가 업데이트될 때마다 아래로 스크롤
     if (flatListRef.current) {
       flatListRef.current.scrollToEnd({ animated: true });
     }
  }, [localMessages]);

  useEffect(() => {
    if (transcript) {
      clearTimeout(noResponseTimerRef.current ?? undefined);
      processUserInput();
    }
  }, [transcript]);

  // 자동 스크롤
  useEffect(() => {
     if (flatListRef.current) {
       flatListRef.current.scrollToEnd({ animated: true });
     }
  }, [localMessages]);

  const clearTimers = () => {
    clearTimeout(silenceTimerRef.current ?? undefined);
    clearTimeout(noResponseTimerRef.current ?? undefined);
  };

  const startAutoRecording = async () => {
    if (isCancelledRef.current) return; // 🔴 Stop 상태일 때는 자동녹음 시작 안함

    clearTimers();
    startRecording();
    // 무응답 타이머 시작
    noResponseTimerRef.current = setTimeout(() => {
      if (!isCancelledRef.current && !transcript) {
        handleNoResponse();
      }
    }, NO_RESPONSE_TIMEOUT);
  };

  // ✅ 말하기 함수에서 텍스트별 하이라이트 적용
  const speakWordByWord = (text: string, onComplete: () => void) => {
     const words = splitIntoWords(text);
     setCurrentSpeakingText(words);

     const speakNext = (idx: number) => {
       if (idx >= words.length || isCancelledRef.current) {
         setSpeakingWordIndex(-1);
         onComplete?.();
         return;
       }

       setSpeakingWordIndex(idx);

       Speech.speak(words[idx], {
         language,
         rate: 1.0,
         onDone: () => speakNext(idx + 1),
       });
     };

     speakNext(0);
  };

  const handleNoResponse = async () => {
    const promptMsg: Message = {
      id: Date.now().toString(),
      role: 'ai',
      text: language === 'en'
        ? "I didn't hear your response. Please say something to continue our conversation."
        : language === 'ko'
        ? "답변을 듣지 못했어요. 대화를 계속하려면 말씀해주세요."
        : language === 'ja'
        ? "返事が聞こえませんでした。会話を続けるには何か話してください。"
        : "我没有听到您的回复。请说些什么以继续我们的对话。",
      timestamp: Date.now(), // ✅ 이제 정상
    };
    
    setLocalMessages((prev: Message[]) => [...prev, promptMsg]);
    await Speech.speak(promptMsg.text, { language });
    startAutoRecording(); // 다시 녹음 시작
  };

  const exitPhrases = [
     '오늘은 그만하자', '끝내자', '조금 있다가 다시하자',
     '나중에 하자', '이따 하자', 'stop', 'exit', 'let\'s stop', 'i want to stop'
  ];

  const processUserInput = async () => {
     if (!transcript || transcript.trim().length === 0) return;

     const normalizedText = transcript.trim().toLowerCase();

     // 🔊 1. 사용자가 음성으로 종료 의사를 표현한 경우
     if (exitPhrases.some(phrase => normalizedText.includes(phrase))) {
        setLocalMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            role: 'user',
            text: transcript,
            timestamp: Date.now()
          },
          { 
            id: (Date.now() + 1).toString(),
            role: 'ai',
            text: language === 'ko'
              ? '좋아요. 대화를 종료할게요!'
              : 'Okay, I’ll stop the conversation now.',
            timestamp: Date.now()
          }
        ]);

        await Speech.speak(
          language === 'ko'
            ? '좋아요. 대화를 종료할게요!'
            : 'Okay, I’ll stop the conversation now.',
          {
            language,
            onDone: () => {
              handleExitWithFeedback(); // fire-and-forget
            }
          }
        );

        clearTranscript();
        return;
     }

     if (isCancelledRef.current) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: transcript.trim(),
      timestamp: Date.now()
    };

    setLocalMessages(prev => [...prev, userMsg]);
    addMessage(topicKey, 'user', userMsg.text);
    clearTranscript();

    try {
      const reply = await fetchGptResponse(userMsg.text, {
        ignorePreviousDialogs: true,
      });

      if (!isCancelledRef.current && reply) {
        const aiMsg: Message = {
          id: Date.now().toString(),
          role: 'ai',
          text: reply,
          timestamp: Date.now()
        };

        const aiIndex = localMessages.length + 1
        setLocalMessages(prev => [...prev, aiMsg]);
        addMessage(topicKey, 'ai', aiMsg.text);

        setSpeakingIndex(aiIndex);  // AI 말풍선 하이라이트
        scrollToIndex(aiIndex);     // 자동 스크롤 이동

        await Speech.speak(reply, {
          language: 'en',
          rate: 0.9,
          onDone: () => {
             setSpeakingIndex(-1); // 말 끝나면 하이라이트 해제
             startAutoRecording();
          }
        });
      }
    } catch (err) {
      console.error('Error in AI response:', err);
      const errorMsg = '⚠️ Sorry, I encountered an error. Please try again.';
      setLocalMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'ai',
          text: errorMsg,
          timestamp: Date.now() // ✅ 필수
        }
      ]);
      await Speech.speak(errorMsg, { language: 'en' });
      startAutoRecording();
    }
  };

  const handleExitWithFeedback = async () => {
     try {
       isCancelledRef.current = true;
       Speech.stop();
       stopRecording();
       setFeedbackMessage(null);
    
       if (localMessages.length > 0) {
         const feedbackItems = await generateFreeTalkFeedback(localMessages, language);

         if (feedbackItems.length > 0) {
           const feedbackData = {
             mode: 'free',
             topic: topicKey,
             sceneTitle: language === 'en' ? 'Free Talk Session'
               : language === 'ko' ? '자유 대화 세션'
               : language === 'ja' ? 'フリートークセッ션'
               : '自由对话环节',
             level: 'free',
             createdAt: new Date().toISOString(),
             items: feedbackItems,
           };

           const saveResult = await saveFeedbackToStorage(feedbackData);
           if (saveResult) {
             useFeedbackStore.getState().updateFeedbackStats(); // 변경된 스토어 메서드 사용
             setFeedbackMessage({
               type: 'success',
               text: feedbackTranslations[language as keyof typeof feedbackTranslations]?.saved
  || feedbackTranslations.en.saved,
             });
           }
         }
       }
     } finally {
       onExitFreeTalk();
     }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
      clearTimers();
      isCancelledRef.current = true; // 자동 흐름 차단
      Speech.stop(); // 발화 강제 종료
    } else {
      isCancelledRef.current = false;
      startAutoRecording();
    }
  };

  return (
    <View style={freeChatStyles.container}>
      <View style={freeChatStyles.titleBox}>
        <Text style={freeChatStyles.title}>🎈 Free Talking with AI</Text>
      </View>

      <FlatList
         ref={flatListRef}
         data={localMessages}
         keyExtractor={(_, index) => index.toString()}
         initialNumToRender={10}
         getItemLayout={(_, index) => ({
           length: 60, // 말풍선 대략 높이 (실제 스타일 맞게 조정)
           offset: 60 * index,
           index,
         })}
         renderItem={({ item, index }) => (
           <View
              style={{
                flexDirection: item.role === 'user' ? 'row-reverse' : 'row',
                paddingHorizontal: 16,
                marginVertical: 4,
              }}>
              <View
                 style={{
                   backgroundColor: item.role === 'user' ? '#d0ecff' : '#fce2eb',
                   borderRadius: 16,
                   paddingVertical: 10,
                   paddingHorizontal: 14,
                   maxWidth: '75%',
                   borderWidth: index === speakingIndex ? 2 : 0,
                   borderColor: index === speakingIndex ? '#ff5e5e' : 'transparent',
                 }}>
                 <Text style={{ fontSize: 16, flexWrap: 'wrap', flexDirection: 'row' }}>
                     {item.role === 'ai' && index === speakingIndex && currentSpeakingText.length > 0
                        ? currentSpeakingText.map((word, idx) => (
                           <Text
                               key={idx}
                               style={{
                                  backgroundColor: idx === speakingWordIndex ? '#ffe9a6' : 'transparent',
                                  fontWeight: idx === speakingWordIndex ? 'bold' : 'normal',
                               }}>
                               {word}
                           </Text>
                          ))
                     : <Text>{item.text}</Text>}
                 </Text>
              </View>
           </View>
         )}
      />

      <View style={freeChatStyles.controls}>
        <TouchableOpacity
          onPress={toggleRecording}
          style={freeChatStyles.controlButton}
        >
          <Image
            source={
              isRecording
                ? require('../assets/images/stop.png')
                : require('../assets/images/wait.png') // 또는 record.png가 있다면 사용
            }
            style={{ width: 60, height: 50, resizeMode: 'contain' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleExitWithFeedback}
          style={freeChatStyles.controlButton}
        >
          <Image
            source={require('../assets/images/exit.png')}
            style={{ width: 60, height: 50, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const freeChatStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  titleBox: {
    backgroundColor: '#e0f5ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#cde8f7',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0077cc',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 20,
  },
  controlButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  recordButton: {
    backgroundColor: '#007bff',
  },
  stopButton: {
    backgroundColor: '#dc3545',
  },
  exitButton: {
    backgroundColor: '#6c757d',
  },
  controlButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});