import { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Slot, useRouter, usePathname } from 'expo-router';
import { API_BASE_URL } from './lib/api'; // ✅ 추가

// 다국어 안내 메시지
const whisperMessage = {
  en: {
    title: 'Whisper access restricted',
    message: 'Your Whisper usage period has expired.\nPlease log in again or renew your subscription.',
  },
  ko: {
    title: 'Whisper 사용 제한',
    message: 'Whisper 기능 사용 기간이 만료되었습니다.\n재로그인 또는 구독 갱신이 필요합니다.',
  },
  zh: {
    title: 'Whisper 使用受限',
    message: '您的 Whisper 使用期限已过。\n请重新登录或续订。',
  },
  ja: {
    title: 'Whisper の使用制限',
    message: 'Whisper の使用期間が終了しました。\n再ログインまたは購読の更新を行ってください。',
  },
  vi: {
    title: 'Hạn chế sử dụng Whisper',
    message: 'Thời gian sử dụng Whisper của bạn đã hết hạn.\nVui lòng đăng nhập lại hoặc gia hạn gói dịch vụ.',
  },
};

export default function App() {
  const router = useRouter();
  const pathname = usePathname(); // ✅ 현재 경로 추적

  useEffect(() => {
    const backAction = () => {
      console.log("🔙 Back pressed on:", pathname);

      if (pathname.includes("/ChatScreen") || pathname.includes("/practice")) {
        // ✅ 연습모드 → 토픽 화면
        practiceRef.current?.resetAllStates().finally(() => {
          router.replace("/TopicSelectScreen");
        });
        return true;
      }

      if (pathname.includes("/TopicSelectScreen")) {
        // ✅ 토픽 화면 → 로그인
        router.replace("/login");
        return true;
      }

      if (pathname.includes("/login") || pathname.includes("LoginScreen")) {
        // ✅ 로그인 화면 → 언어 선택(index)
        router.replace("/");
        return true;
      }

      if (pathname === "/" || pathname.includes("index")) {
        // ✅ 언어 선택 → 앱 종료
        BackHandler.exitApp();
        return true;
      }

      if (pathname.includes("/feedback")) {
        // ✅ 피드백 → 연습 화면
        router.replace("/ChatScreen");
        return true;
      }

      return false; // 기본 동작
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => subscription.remove();
  }, [pathname, router]);

  useEffect(() => {
    (async () => {
      // ✅ 설치일 저장 (최초 1회)
      const saved = await AsyncStorage.getItem('appInstalledAt');
      if (!saved) {
        const now = new Date().toISOString();
        await AsyncStorage.setItem('appInstalledAt', now);
        console.log('📆 설치일 저장됨:', now);
      } else {
        console.log('📆 기존 설치일:', saved);
      }

      // ✅ 토큰 유효성 검사
      const authToken = await AsyncStorage.getItem('authToken');
      const currentUser = await AsyncStorage.getItem('currentUser');
      
      if (!authToken || !currentUser) {
        await AsyncStorage.removeItem('premiumActive');
        router.replace('/screens/LoginScreen');
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/verify-token`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });

        if (!response.ok) {
          await AsyncStorage.removeItem('authToken');
          await AsyncStorage.removeItem('currentUser');
          await AsyncStorage.removeItem('premiumActive');
          router.replace('/screens/LoginScreen');
          return;
        }
      } catch (error) {
        console.warn('토큰 검증 실패:', error);
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('currentUser');
        await AsyncStorage.removeItem('premiumActive');
        router.replace('/screens/LoginScreen');
        return;
      }

      // ✅ Whisper 권한 체크 후 안내
      const canUse = await AsyncStorage.getItem('canUseWhisper');
      if (canUse === 'false') {
        const lang = (await AsyncStorage.getItem('language')) || 'en';
        const msg = whisperMessage[lang as keyof typeof whisperMessage] || whisperMessage['en'];
        Alert.alert(msg.title, msg.message);
      }

      // ✅ 구독 상태 확인
      const premiumActive = await AsyncStorage.getItem('premiumActive');
      if (premiumActive === 'true' && currentUser) {
        router.replace('/screens/TopicSelectScreen');
      }
    })();
  }, [router]);

  return <Slot />;
}
