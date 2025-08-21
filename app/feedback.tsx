import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import { useLanguage } from '../hooks/useLanguage';
import { generateFeedbackSummary } from '../utils/feedback';
import { Image, BackHandler } from 'react-native';
import type { Message, FeedbackItem, DialogState, LanguageCode, PracticeScene, TopicType, LevelType } from '../types';

interface FeedbackSession {
  mode: string;
  topic: string;
  sceneTitle: string | { [key: string]: string };
  level: string;
  createdAt: string;
  items: FeedbackItem[];
  repeated?: string[];
}

// 다국어 번역 객체
const translations = {
  en: {
    title: '📝 Feedback History',
    noFeedback: 'No feedback saved',
    problem: 'Problem',
    correction: 'Correction',
    tip: '💡 Tip',
    userAudio: '▶ Own Voice',
    listening: '🔊 AI Voice',
    speaking: '🎙️ Speaking',
    stop: '⏹️ Stop',
    check: '▶️ Check',
    summary: '🗣️ Summary',
    practiceTip: 'Practice pronunciation by following AI!',
    back: '⬅ Back',
    mode: {
      practice: 'Practice',
      memorization: 'Memorization',
      free: 'Free Talk'
    }
  },
  ko: {
    title: '📝 피드백 기록',
    noFeedback: '저장된 피드백 없음',
    problem: '※ 문제',
    correction: '□ 수정',
    tip: '💡 팁',
    userAudio: '▶ 본인음성',
    listening: '🔊 AI음성',
    speaking: '🎙️ 말하기',
    stop: '⏹️ 중지',
    check: '▶️ 확인',
    summary: '🗣️ 요약',
    practiceTip: 'AI를 따라하며 발음을 연습하세요!',
    back: '⬅ 뒤로',
    mode: {
      practice: '연습',
      memorization: '암기',
      free: '자유 대화'
    }
  },
  ja: {
    title: '📝 フィードバック履歴',
    noFeedback: '保存されたフィードバックはありません',
    problem: '※ 問題',
    correction: '□ 修正',
    tip: '💡 ヒント',
    userAudio: '▶ 本人音声',
    listening: '🔊 AI音声',
    speaking: '🎙️ 話す',
    stop: '⏹️ 停止',
    check: '▶️ 確認',
    summary: '🗣️ 要約',
    practiceTip: 'AIに続いて発音を練習しましょう！',
    back: '⬅ 戻る',
    mode: {
      practice: '練習',
      memorization: '暗記',
      free: 'フリートーク'
    }
  },
  zh: {
    title: '📝 反馈历史',
    noFeedback: '没有保存的反馈',
    problem: '※ 问题',
    correction: '□ 修正',
    tip: '💡 提示',
    userAudio: '▶ 本人语音',
    listening: '🔊 AI语音',
    speaking: '🎙️ 说',
    stop: '⏹️ 停止',
    check: '▶️ 检查',
    summary: '🗣️ 摘要',
    practiceTip: '跟着AI练习发音！',
    back: '⬅ 返回',
    mode: {
      practice: '练习',
      memorization: '记忆',
      free: '自由对话'
    }
  },
  vi: {
    title: '📝 Phản hồi đã lưu',
    noFeedback: 'Không có phản hồi nào được lưu',
    problem: '※ Vấn đề',
    correction: '□ Sửa chữa',
    tip: '💡 Gợi ý',
    userAudio: '▶ Own Voice',
    listening: '🔊 Âm AI',
    speaking: '🎙️ Nói',
    stop: '⏹️ Dừng',
    check: '▶️ Kiểm tra',
    summary: '🗣️ Tóm tắt',
    practiceTip: 'Luyện phát âm theo AI!',
    back: '⬅ Quay lại',
    mode: {
      practice: 'Luyện tập',
      memorization: 'Ghi nhớ',
      free: 'Tự do nói chuyện'
    }
  }
};

export default function FeedbackScreen() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const [feedbackList, setFeedbackList] = useState<FeedbackSession[]>([]);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordedUri, setRecordedUri] = useState<string | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadFeedback = async () => {
      try {
        const json = await AsyncStorage.getItem('feedbackHistory');
        if (json) {
          const data = JSON.parse(json);
          
          // 데이터 구조 검증 및 보정
          const validatedData = Array.isArray(data) 
            ? data.map((item: any) => ({
                ...item,
                items: Array.isArray(item.items) ? item.items : [],
                repeated: Array.isArray(item.repeated) ? item.repeated : [],
                createdAt: item.createdAt || new Date().toISOString(),
                mode: item.mode || 'practice',
                level: item.level || 'beginner'
              }))
            : [];
            
          setFeedbackList(validatedData.reverse());
        } else {
          setFeedbackList([]);
        }
      } catch (err) {
        console.error('Failed to load feedback:', err);
        setFeedbackList([]);
      }
    };

    loadFeedback();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      router.replace('/ChatScreen'); // 👈 연습화면으로 이동
      return true; // 👈 기본 동작(앱 종료 또는 이전 화면 이동) 막음
    });

    return () => backHandler.remove(); // 👈 리스너 해제
  }, []);


  const speak = (text: string) => {
    Speech.speak(text, { language: 'en', rate: 0.9 });
  };

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) return;

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error('Recording start failed', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedUri(uri);
      setRecording(null);
    } catch (err) {
      console.error('Recording stop failed', err);
    }
  };

  const playRecording = async () => {
    if (!recordedUri) return;
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: recordedUri });
      setSound(sound);
      await sound.playAsync();
    } catch (err) {
      console.error('Playback failed', err);
    }
  };

  const getModeTranslation = (mode: string) => {
    switch(mode) {
      case 'practice': return t.mode.practice;
      case 'memorization': return t.mode.memorization;
      case 'free': return t.mode.free;
      default: return mode;
    }
  };

  const getSceneTitle = (title: string | { [key: string]: string }) => {
    if (typeof title === 'string') return title;
    return title[language] || title['en'] || '';
  };

  const playUserAudio = async (uri: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri });
      setSound(sound);
      await sound.playAsync();
    } catch (err) {
      console.error('사용자 음성 재생 실패', err);
    }
  };

  const labels = { beginner: 'Light', intermediate: 'Middle', advanced: 'Heavy' };  

  const renderItem = ({ item, index }: { item: FeedbackSession, index: number }) => {
    if (!item || !item.items) return null;

    const isExpanded = index === expandedIndex;
    const summary = generateFeedbackSummary(item.items, language);
    const repeatedMistakes = item.repeated || [];

    return (
      <TouchableOpacity onPress={() => setExpandedIndex(isExpanded ? null : index)}>
        <View style={styles.itemBox}>
          <Text style={styles.meta}>
            🕒 {new Date(item.createdAt).toLocaleString(language)} | 🎮 {getModeTranslation(item.mode)} | 📚 {item.topic} | 🎯 {labels[item.level as keyof typeof labels] || item.level}
          </Text>

          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>{t.summary}</Text>

            {summary.data.pronunciation && Object.keys(summary.data.pronunciation).length > 0 && (
              <Text style={styles.summaryText}>🔊 {t.problem}: {Object.keys(summary.data.pronunciation).join(', ')}</Text>
            )}

            {summary.data.grammar && Object.keys(summary.data.grammar).length > 0 && (
              <Text style={styles.summaryText}>📘 Grammar: {Object.keys(summary.data.grammar).join('; ')}</Text>
            )}

            {repeatedMistakes.length > 0 && (
              <Text style={styles.summaryText}>📌 {language === 'ko' ? '자주 틀리는 항목' : 'Repeated mistakes'}: {repeatedMistakes.join(', ')}</Text>
            )}

            <Text style={styles.summaryTip}>{t.practiceTip}</Text>
          </View>

          {isExpanded && item.items.map((f, idx) => (
            <View key={idx} style={styles.feedbackCard}>
              <Text style={styles.label}>{t.problem}</Text>
              <Text style={styles.userText}>{f.user}</Text>

              <Text style={styles.label}>{t.correction}</Text>
              <Text style={styles.correctText}>{f.correction}</Text>

              {f.tip && (
                <>
                  <Text style={styles.label}>{t.tip}</Text>
                  <Text style={styles.tipText}>{f.tip}</Text>
                </>
              )}

              {f.type === 'pronunciation' && (
                <View style={styles.buttonContainer}>
                  {f.metadata?.audioFile && (
                    <TouchableOpacity
                       style={styles.practiceButton}
                       onPress={() => playUserAudio(f.metadata!.audioFile!)}
                    >
                       <Text style={styles.practiceText}>{t.userAudio}</Text>
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity style={styles.practiceButton} onPress={() => speak(f.correction || '')}>
                    <Text style={styles.practiceText}>{t.listening}</Text>
                  </TouchableOpacity>

                  {recording ? (
                    <TouchableOpacity style={styles.practiceButton} onPress={stopRecording}>
                      <Text style={styles.practiceText}>{t.stop}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.practiceButton} onPress={startRecording}>
                      <Text style={styles.practiceText}>{t.speaking}</Text>
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity style={styles.practiceButton} onPress={playRecording}>
                    <Text style={styles.practiceText}>{t.check}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>{t.title}</Text>
        <TouchableOpacity
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/ChatScreen'))}
        >
          <Image
            source={require('../assets/images/back.png')}
            style={{ width: 60, height: 50, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      {feedbackList.length === 0 ? (
        <Text style={styles.empty}>{t.noFeedback}</Text>
      ) : (
        <FlatList
          data={feedbackList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  itemBox: {
    marginBottom: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  meta: {
    fontSize: 14,
    marginBottom: 8,
    color: '#444',
  },
  summaryBox: {
    backgroundColor: '#212121',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  summaryTitle: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 6,
  },
  summaryText: {
    color: '#eeeeee',
    marginBottom: 4,
  },
  summaryTip: {
    color: '#bdbdbd',
    fontStyle: 'italic',
  },
  feedbackCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: 6,
  },
  userText: {
    color: '#d32f2f',
    marginBottom: 4,
  },
  correctText: {
    color: '#000',
    marginBottom: 4,
  },
  tipText: {
    color: '#333',
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 6,
  },
  practiceButton: {
    backgroundColor: '#e3f2fd',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bbdefb',
  },
  practiceText: {
    color: '#1976d2',
    fontSize: 13,
  },
  empty: {
    marginTop: 50,
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 100,
  },
});