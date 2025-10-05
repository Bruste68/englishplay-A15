import Constants from 'expo-constants';

// 📦 app.config.js → extra 객체에서 가져옴
const extra = Constants.expoConfig?.extra || {};
const env = process.env;

// ✅ 필수 환경 변수 유효성 검사 함수
function requireEnv(name: string, value?: string): string {
  if (!value || value.trim() === '') {
    throw new Error(`❌ 필수 환경변수 누락: ${name} (.env 또는 app.config.js 확인 필요)`);
  }
  return value;
}

// ✅ 백엔드 API 주소 (필수)
export const API_BASE_URL: string = requireEnv(
  'EXPO_PUBLIC_BACKEND_URL',
  env.EXPO_PUBLIC_BACKEND_URL ?? extra.API_BASE_URL
);

// ✅ Whisper API 주소 (필수)
export const WHISPER_URL: string = requireEnv(
  'EXPO_PUBLIC_WHISPER_URL',
  env.EXPO_PUBLIC_WHISPER_URL ?? extra.EXPO_PUBLIC_WHISPER_URL
);

// ✅ 호환용 alias
export const BASE_URL = API_BASE_URL;

// ✅ 선택 항목들 (없어도 오류 발생 안함)
export const ENV: string = env.ENV ?? extra.ENV ?? 'production';
export const BUILD_ENV: string = env.BUILD_ENV ?? extra.BUILD_ENV ?? 'release';

export const GOOGLE_CLIENT_ID: string =
  env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID ?? extra.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID ?? '';

export const GOOGLE_REDIRECT_URI: string =
  env.GOOGLE_APP_REDIRECT_URI ?? extra.GOOGLE_APP_REDIRECT_URI ?? '';
