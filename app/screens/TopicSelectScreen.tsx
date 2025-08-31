import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { TOPIC_TITLES } from '../../constants/topics';

const { width } = Dimensions.get('window');

// ✅ 다국어 지원
const translations = {
  ko: {
    trialDays: (d: string) => `잔여체험일: ${d}`,
    premiumDays: (d: string) => `잔여사용일수: ${d}`,
    expired: "만료",
    daysSuffix: "일",
    backToLogin: '로그인으로 돌아가기',
    title: '- 콘텐츠 -',
  },
  en: {
    trialDays: (d: string) => `Trial days left: ${d}`,
    premiumDays: (d: string) => `Subscription left: ${d}`,
    expired: "Expired",
    daysSuffix: "days",
    backToLogin: 'Back to Login',
    title: '- Contents -',
  },
  zh: {
    trialDays: (d: string) => `剩余体验天数: ${d}`,
    premiumDays: (d: string) => `订阅剩余天数: ${d}`,
    expired: "已过期",
    daysSuffix: "天",
    backToLogin: '返回登录',
    title: '- 内容 -',
  },
  ja: {
    trialDays: (d: string) => `体験残り日数: ${d}`,
    premiumDays: (d: string) => `有効日数: ${d}`,
    expired: "期限切れ",
    daysSuffix: "日",
    backToLogin: 'ログインに戻る',
    title: '- コンテンツ -',
  },
  vi: {
    trialDays: (d: string) => `Ngày dùng thử còn lại: ${d}`,
    premiumDays: (d: string) => `Ngày sử dụng còn lại: ${d}`,
    expired: "Hết hạn",
    daysSuffix: "ngày",
    backToLogin: 'Quay lại đăng nhập',
    title: '- Nội dung -',
  },
};

function calculateTrialDaysLeft(startStr?: string, t?: any): string {
  if (!startStr) return '-';
  try {
    const safeStr = startStr.replace(' ', 'T');
    const start = new Date(safeStr);
    if (isNaN(start.getTime())) throw new Error('Invalid date');

    const now = new Date();
    const end = new Date(start.getTime() + 3 * 86400000);
    const diffDays = Math.ceil((end.getTime() - now.getTime()) / 86400000);

    return diffDays > 0 ? `${diffDays}${t.daysSuffix}` : t.expired;
  } catch {
    return '-';
  }
}

function calculatePremiumDaysLeft(endStr?: string, t?: any): string {
  if (!endStr || endStr === 'null') return '-';
  const end = new Date(endStr);
  if (isNaN(end.getTime())) return '-';

  const now = new Date();
  const diffDays = Math.ceil((end.getTime() - now.getTime()) / 86400000);
  if (diffDays <= 0) return t.expired;
  if (diffDays <= 92) return `${diffDays}${t.daysSuffix} (3개월권)`;
  if (diffDays <= 186) return `${diffDays}${t.daysSuffix} (6개월권)`;
  return `${diffDays}${t.daysSuffix} (1년권)`;
}

export default function TopicSelectScreen() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [trialDaysLeft, setTrialDaysLeft] = useState<string>('-');
  const [premiumDaysLeft, setPremiumDaysLeft] = useState<string>('-');
  const [isTrial, setIsTrial] = useState<boolean>(false);
  const [language, setLanguage] = useState<'ko' | 'en' | 'zh' | 'ja' | 'vi'>('ko');

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const userStr = await AsyncStorage.getItem('currentUser');
      const preferredLang = await AsyncStorage.getItem('preferredLang');
      console.log('💾 preferredLang from storage:', preferredLang);

      if (!token || !userStr) {
        router.replace('/login');
      } else {
        const user = JSON.parse(userStr);
        const storedLang = await AsyncStorage.getItem('preferredLang')
  || await AsyncStorage.getItem('language'); 

        console.log('📦 user.language:', user.language);
        console.log('🌐 translations key:', Object.keys(translations));

        const langRaw = (user.language || storedLang || 'ko').toLowerCase().trim();
        const supportedLangs = Object.keys(translations) as Array<keyof typeof translations>;
        const lang: keyof typeof translations = supportedLangs.includes(langRaw as any)
          ? (langRaw as keyof typeof translations)
          : 'ko';

        console.log('✅ 적용 언어:', lang);
        setLanguage(lang);

        const trialLeft = calculateTrialDaysLeft(user.trialStartAt);
        const premiumLeft = calculatePremiumDaysLeft(user.premiumExpiresAt);

        const premiumDate = user.premiumExpiresAt ? new Date(user.premiumExpiresAt) : null;
        const hasPremium =
          premiumDate instanceof Date &&
          !isNaN(premiumDate.getTime()) &&
          premiumDate.getTime() > Date.now();

        setIsTrial(!hasPremium);
        setTrialDaysLeft(trialLeft);
        setPremiumDaysLeft(premiumLeft);
        setIsLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  const t = translations[language];

  const handleSelect = (key: string) => {
    router.push({ pathname: '/ChatScreen', params: { topicKey: key } });
  };

  const goToLogin = () => {
    router.push('/login');
  };

  const romanNumerals = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.', 'VII.'];
  const formattedTopics = Object.entries(TOPIC_TITLES).map(([key, title], index) => ({
    key,
    title: `${romanNumerals[index]}  ${title.replace('Bussiness', 'Business')}`,
  }));

  if (isLoggedIn === null) return null;

  return (
    <View style={styles.container}>
      <View style={styles.dateRow}>
        <Text style={styles.dateTextLeft}>
          {isTrial
            ? t.trialDays(trialDaysLeft)
            : t.premiumDays(premiumDaysLeft)}
        </Text>
      </View>

      <Text style={styles.bookTitle}>{t.title}</Text>

      <ScrollView contentContainerStyle={styles.topicList} showsVerticalScrollIndicator={false}>
        {formattedTopics.map((item) => (
          <TouchableOpacity key={item.key} style={styles.topicRow} onPress={() => handleSelect(item.key)}>
            <Text style={styles.topicText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.footerButton} onPress={goToLogin}>
        <View style={styles.footerButtonContent}>
          <Text style={styles.footerText}>{t.backToLogin}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf8f3',
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    paddingHorizontal: 1,
  },
  dateTextLeft: {
    fontSize: 18,
    color: '#444',
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
    color: '#2e2e2e',
  },
  footerButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 16,
  },
  footerButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
