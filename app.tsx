import { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Slot, useRouter, usePathname } from 'expo-router';
import { API_BASE_URL } from './lib/api';
import { PersistentChatHistoryProvider } from './context/PersistentChatHistoryContext';

// ✅ 다국어 Whisper 안내 메시지
const whisperMessage = {
  en: {
    title: 'Whisper access restricted',
    message:
      'Your Whisper usage period has expired.\nPlease log in again or renew your subscription.',
  },
  ko: {
    title: 'Whisper 사용 제한',
    message:
      'Whisper 기능 사용 기간이 만료되었습니다.\n재로그인 또는 구독 갱신이 필요합니다.',
  },
  zh: {
    title: 'Whisper 使用受限',
    message:
      '您的 Whisper 使用期限已过。\n请重新登录或续订。',
  },
  ja: {
    title: 'Whisper の使用制限',
    message:
      'Whisper の使用期間が終了しました。\n再ログインまたは購読の更新を行ってください。',
  },
  vi: {
    title: 'Hạn chế sử dụng Whisper',
    message:
      'Thời gian sử dụng Whisper của bạn đã hết hạn.\nVui lòng đăng nhập lại hoặc gia hạn gói dịch vụ.',
  },
};

export default function App() {
  const router = useRouter();
  const pathname = usePathname();

  // ✅ 하드웨어 뒤로가기 처리
  useEffect(() => {
    const backAction = () => {
      console.log('🔙 Back pressed on:', pathname);

      if (pathname.includes('/ChatScreen') || pathname.includes('/practice')) {
        router.replace('/screens/TopicSelectScreen');
        return true;
      }

      if (pathname.includes('/TopicSelectScreen')) {
        router.replace('/login');
        return true;
      }

      if (pathname.includes('/login') || pathname.includes('LoginScreen')) {
        router.replace('/');
        return true;
      }

      if (pathname === '/' || pathname.includes('index')) {
        BackHandler.exitApp();
        return true;
      }

      if (pathname.includes('/feedback')) {
        router.replace('/ChatScreen');
        return true;
      }

      return false;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => subscription.remove();
  }, [pathname, router]);

  // ✅ 초기 앱 상태 / 토큰 검증
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem('appInstalledAt');
      if (!saved) {
        const now = new Date().toISOString();
        await AsyncStorage.setItem('appInstalledAt', now);
        console.log('📆 설치일 저장됨:', now);
      } else {
        console.log('📆 기존 설치일:', saved);
      }

      const authToken = await AsyncStorage.getItem('authToken');
      const currentUser = await AsyncStorage.getItem('currentUser');

      if (!authToken || !currentUser) {
        await AsyncStorage.multiRemove([
          'premiumActive',
          'authToken',
          'currentUser',
        ]);
        router.replace('/screens/LoginScreen');
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/verify-token`, {
          headers: { Authorization: `Bearer ${authToken}` },
        });

        if (!response.ok) {
          await AsyncStorage.multiRemove([
            'authToken',
            'currentUser',
            'premiumActive',
          ]);
          router.replace('/screens/LoginScreen');
          return;
        }
      } catch (error) {
        console.warn('토큰 검증 실패:', error);
        await AsyncStorage.multiRemove([
          'authToken',
          'currentUser',
          'premiumActive',
        ]);
        router.replace('/screens/LoginScreen');
        return;
      }

      // ✅ Whisper 사용 제한 안내
      const canUse = await AsyncStorage.getItem('canUseWhisper');
      if (canUse === 'false') {
        const lang =
          (await AsyncStorage.getItem('language')) || 'en';
        const msg =
          whisperMessage[lang as keyof typeof whisperMessage] ||
          whisperMessage.en;
        Alert.alert(msg.title, msg.message);
      }

      // ✅ 구독 상태 확인 → 프리미엄이면 토픽 화면으로 이동
      const premiumActive = await AsyncStorage.getItem('premiumActive');
      if (premiumActive === 'true' && currentUser) {
        router.replace('/screens/TopicSelectScreen');
      }
    })();
  }, [router]);

  return (
    <PersistentChatHistoryProvider>
      <Slot /> {/* expo-router가 라우팅을 처리 */}
    </PersistentChatHistoryProvider>
  );
}
