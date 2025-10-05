import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  BackHandler,
  Image, 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { TOPIC_TITLES } from '../../constants/topics';

const { width } = Dimensions.get('window');

const translations = {
  ko: { expired: "만료" },
  en: { expired: "Expired" },
  zh: { expired: "已过期" },
  ja: { expired: "期限切れ" },
  vi: { expired: "Hết hạn" },
};

export default function TopicSelectScreen() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [language, setLanguage] = useState<'ko' | 'en' | 'zh' | 'ja' | 'vi'>('ko');

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const userStr = await AsyncStorage.getItem('currentUser');
      if (!token || !userStr) {
        router.replace('/login');
      } else {
        setIsLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  // ✅ 하드웨어 뒤로가기 → 로그인 화면으로 이동
  useEffect(() => {
    const backAction = () => {
      router.replace('/login');
      return true; // 기본 종료 방지
    };
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => subscription.remove();
  }, [router]);

  const handleSelect = (key: string) => {
    router.push({ pathname: '/ChatScreen', params: { topicKey: key } });
  };

  const romanNumerals = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.'];
  const formattedTopics = Object.entries(TOPIC_TITLES).map(([key, title], index) => ({
    key,
    title: `${romanNumerals[index]}  ${title.replace('Bussiness', 'Business')}`,
  }));

  if (isLoggedIn === null) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/feedback')}>
          <Image
            source={require('../../assets/images/feedback.png')} // 경로 주의
            style={{ width: 70, height: 70, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.bookTitle}>- Topic Contents -</Text>

      <ScrollView contentContainerStyle={styles.topicList} showsVerticalScrollIndicator={false}>
        {formattedTopics.map((item) => (
          <TouchableOpacity key={item.key} style={styles.topicRow} onPress={() => handleSelect(item.key)}>
            <Text style={styles.topicText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf8f3',
    paddingHorizontal: 24,
    paddingTop: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // 오른쪽 정렬
    paddingBottom: 40,
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    fontStyle: 'italic',
    marginBottom: 50,
  },
  topicList: {
    paddingBottom: 20,
  },
  topicRow: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topicText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#111",   // 더 진한 검정색
    backgroundColor: "transparent",
  },
});
