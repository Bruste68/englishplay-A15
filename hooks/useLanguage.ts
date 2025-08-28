import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

export type LanguageCode = 'en' | 'ko' | 'ja' | 'zh' | 'vi';

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    email: 'Email',
    password: 'Password',
    signup: 'Sign Up',
    forgot: 'Forgot Password?',
    or: 'Or login with',
    selectLanguage: 'Select Language',
    noticeTitle: 'Notice',
    notice1: 'Speak loudly near the microphone.',
    notice2: 'AI response may be delayed in case of traffic surge.',
    notice3: 'You need to repurchase after one year.',
    notice4: 'Free talk mode may change later.',
    wrongPassword: 'Incorrect password.',
    emailNotFound: 'Email is not registered.',
    emptyFields: 'Please enter both email and password.',
    alertTitle: 'Notice',
    trialExpiredMessage: 'Your 3-day trial has ended.\nPlease purchase to continue.',
    trialExpiredTitle: '⏰ Trial Expired',
    purchaseNow: 'Purchase Now',
    cancelPurchase: 'Cancel',
    appName: 'SamSpeak',
    enterId: 'Enter your ID',
    login: 'Login',
    returnToLanguageSelection: 'Return to language selection',
    error: 'Error',
    loginFailed: 'Login Failed',
    tryAgain: 'Please try again.',
    rememberId: 'Remember ID',
  },
  ko: {
    email: '이메일',
    password: '비밀번호',
    signup: '회원가입',
    forgot: '비밀번호 찾기',
    or: '또는 SNS로 로그인',
    selectLanguage: '언어 선택',
    noticeTitle: '공지사항',
    notice1: '마이크 근처에서 크게 말해주세요.',
    notice2: '사용자가 많을 경우 AI 응답이 지연될 수 있습니다.',
    notice3: '1년 후 재구매가 필요합니다.',
    notice4: '자유 대화 모드는 추후 결정될 수 있습니다.',
    wrongPassword: '비밀번호가 올바르지 않습니다.',
    emailNotFound: '가입되지 않은 이메일입니다.',
    emptyFields: '이메일과 비밀번호를 모두 입력해주세요.',
    alertTitle: '알림',
    trialExpiredMessage: '3일 체험판이 만료되었습니다.\n정식 버전을 구매해주세요.',
    trialExpiredTitle: '⏰ 체험 종료',
    purchaseNow: '지금 구매하기',
    cancelPurchase: '구매취소',
    appName: 'SamSpeak',
    enterId: '아이디를 입력하세요',
    login: '로그인',
    returnToLanguageSelection: '언어 선택 화면으로 돌아가기',
    error: '오류',
    loginFailed: '로그인 실패',
    tryAgain: '다시 시도해주세요.',
    rememberId: '아이디 기억하기',
  },
  ja: {
    email: 'メールアドレス',
    password: 'パスワード',
    login: 'ログイン',
    signup: '新規登録',
    forgot: 'パスワードを忘れた場合',
    or: 'またはSNSでログイン',
    selectLanguage: '言語を選択',
    noticeTitle: 'お知らせ',
    notice1: 'マイクの近くで大きな声で話してください。',
    notice2: '利用者が多いと応答が遅れることがあります。',
    notice3: '1年後に再購入が必要です。',
    notice4: 'フリートークモードは今後変更される可能性があります。',
    wrongPassword: 'パスワードが正しくありません。',
    emailNotFound: '登録されていないメールアドレスです。',
    emptyFields: 'メールアドレスとパスワードを入力してください。',
    alertTitle: 'お知らせ',
    trialExpiredMessage: '3日間の体験版が終了しました。\n正規版をご購入ください。',
    trialExpiredTitle: '⏰ 体験終了',
    purchaseNow: '今すぐ購入',
    cancelPurchase: '購入をキャンセル',
    rememberId: 'ID記憶',
  },
  zh: {
    email: '电子邮箱',
    password: '密码',
    login: '登录',
    signup: '注册',
    forgot: '忘记密码？',
    or: '或使用社交账号登录',
    selectLanguage: '选择语言',
    noticeTitle: '公告',
    notice1: '请在麦克风附近大声说话。',
    notice2: '用户量大时，AI 可能响应缓慢。',
    notice3: '一年后需要重新购买。',
    notice4: '自由对话模式可能会有变动。',
    wrongPassword: '密码不正确。',
    emailNotFound: '该邮箱尚未注册。',
    emptyFields: '请输入邮箱和密码。',
    alertTitle: '提示',
    trialExpiredMessage: '3天试用期已结束。\n请购买正式版以继续使用。',
    trialExpiredTitle: '⏰ 试用已结束',
    purchaseNow: '立即购买',
    cancelPurchase: '取消购买',
    rememberId: '记住用户名',
  },
  vi: {
    email: 'Email',
    password: 'Mật khẩu',
    login: 'Đăng nhập',
    signup: 'Đăng ký',
    forgot: 'Quên mật khẩu?',
    or: 'Hoặc đăng nhập bằng',
    selectLanguage: 'Chọn ngôn ngữ',
    noticeTitle: 'Lưu ý',
    notice1: 'Hãy nói to gần micro.',
    notice2: 'Phản hồi AI có thể chậm nếu lượng truy cập cao.',
    notice3: 'Cần mua lại sau 1 năm.',
    notice4: 'Chế độ nói tự do có thể thay đổi trong tương lai.',
    wrongPassword: 'Mật khẩu không đúng.',
    emailNotFound: 'Email chưa được đăng ký.',
    emptyFields: 'Vui lòng nhập email và mật khẩu.',
    alertTitle: 'Thông báo',
    trialExpiredMessage: 'Thời gian dùng thử 3 ngày đã kết thúc.\nVui lòng mua để tiếp tục sử dụng.',
    trialExpiredTitle: '⏰ Đã hết thời gian dùng thử',
    purchaseNow: 'Mua ngay',
    cancelPurchase: 'Hủy',
    rememberId: 'Ghi nhớ ID',
  },
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const stored = await AsyncStorage.getItem('appLanguage');
        if (stored && ['en', 'ko', 'ja', 'zh', 'vi'].includes(stored)) {
          setLanguage(stored as LanguageCode);
        } else {
          // ✅ 안전한 locale 처리
          let deviceLang: string = 'en';
          try {
            const locales = Localization.getLocales?.();
            if (Array.isArray(locales) && locales.length > 0) {
              // ✅ null 방지: 기본값 'en'
              deviceLang = locales[0].languageCode ?? 'en';
            }
          } catch (e) {
            console.warn('Localization not available:', e);
          }

          // ✅ zh-Hans, zh-Hant → zh 로 통합
          const defaultLang: LanguageCode =
            ['ko', 'ja', 'vi'].includes(deviceLang)
              ? (deviceLang as LanguageCode)
              : deviceLang.startsWith('zh')
              ? 'zh'
              : 'en';

          setLanguage(defaultLang);
          await AsyncStorage.setItem('appLanguage', defaultLang);
        }
      } catch (error) {
        console.error('Failed to load language', error);
      } finally {
        setIsReady(true);
      }
    };

    loadLanguage();
  }, []);

  const setAppLanguage = async (lang: LanguageCode) => {
    try {
      await AsyncStorage.setItem('appLanguage', lang);
      setLanguage(lang);
    } catch (error) {
      console.error('Failed to save language', error);
    }
  };

  // ✅ fallback 보강
  const t = translations[language] || translations.en;

  return { language, setLanguage: setAppLanguage, isReady, t };
};