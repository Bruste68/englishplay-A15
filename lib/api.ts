import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from './env';

// ✅ 언어 및 에러 타입 정의
type Lang = 'ko' | 'en' | 'ja' | 'zh' | 'vi';
type ErrorType = 'network' | 'server' | 'unauthorized';

// ✅ 에러 메시지 정의
const errorMessages: Record<ErrorType, Record<Lang, string>> = {
  network: { ko: '서버에 연결할 수 없습니다.\n인터넷 상태를 확인해주세요.', en: 'Unable to connect to the server.\nPlease check your internet connection.', ja: 'サーバーに接続できません。\nインターネット接続を確認してください。', zh: '无法连接服务器。\n请检查您的网络连接。', vi: 'Không thể kết nối đến máy chủ.\nVui lòng kiểm tra kết nối mạng.' },
  server: { ko: '서버에 문제가 발생했습니다.\n잠시 후 다시 시도해주세요.', en: 'A server error occurred.\nPlease try again later.', ja: 'サーバーエラーが発生しました。\nしばらくしてからもう一度お試しください。', zh: '服务器发生错误。\n请稍后再试。', vi: 'Đã xảy ra lỗi máy chủ.\nVui lòng thử lại sau.' },
  unauthorized: { ko: '로그인이 만료되었습니다.\n다시 로그인해주세요.', en: 'Login expired.\nPlease sign in again.', ja: 'ログインの有効期限が切れました。\n再度ログインしてください。', zh: '登录已过期。\n请重新登录。', vi: 'Phiên đăng nhập đã hết hạn.\nVui lòng đăng nhập lại.' },
};

// ✅ 언어 키 유효성 검사
function isLangKey(key: string): key is Lang {
  return ['ko', 'en', 'ja', 'zh', 'vi'].includes(key);
}

// ✅ 현재 언어 가져오기
async function getLanguage(): Promise<Lang> {
  const lang = await AsyncStorage.getItem('language');
  return isLangKey(lang || '') ? (lang as Lang) : 'en';
}

// ✅ Axios 인스턴스 생성
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
  timeout: 10000,
});

// ✅ 요청 인터셉터: 토큰/세션 자동 추가
api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    const sessionId = await AsyncStorage.getItem('sessionId');

    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    if (sessionId) config.headers['X-Session-Id'] = sessionId;
  } catch (err) {
    console.warn('⚠️ 요청 인터셉터에서 토큰/세션 읽기 실패:', err);
  }
  return config;
});

// ✅ 응답 인터셉터: 에러 메시지 처리
api.interceptors.response.use(
  res => res,
  async err => {
    const status = err?.response?.status;
    const isNetworkError = !err.response;
    const lang = await getLanguage();

    const getMsg = (type: ErrorType): string =>
      errorMessages[type][lang] || errorMessages[type].en;

    if (isNetworkError) {
      Alert.alert('Network Error', getMsg('network'));
    } else if (status >= 500) {
      Alert.alert('Server Error', getMsg('server'));
    } else if (status === 401) {
      Alert.alert('Unauthorized', getMsg('unauthorized'));
      await AsyncStorage.multiRemove(['authToken', 'sessionId', 'currentUser']);
    }

    console.error(`❌ API 요청 오류 [${status}]:`, err?.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;
export { API_BASE_URL };
