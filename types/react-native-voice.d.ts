// types/react-native-voice.d.ts

declare module '@react-native-voice/voice' {
  interface SpeechEvent {
    value?: string[];
    error?: any;
  }

  interface VoiceModule {
    onSpeechStart: (e: SpeechEvent) => void;
    onSpeechEnd: (e: SpeechEvent) => void;
    onSpeechResults: (e: SpeechEvent) => void;
    onSpeechError: (e: SpeechEvent) => void;
    start: () => Promise<void>;
    stop: () => Promise<void>;
    cancel: () => Promise<void>;
    destroy: () => Promise<void>;
    removeAllListeners: () => void;
  }

  const Voice: VoiceModule;
  export default Voice;
}

declare module 'react-native-dotenv' {
  export const FLASK_HOST: string;
  export const FLASK_PORT: string;
  export const FLASK_DEBUG: string;
  export const KAKAO_ADMIN_KEY: string;
  export const PINGPP_SECRET_KEY: string;
  export const PINGPP_APP_ID: string;
  // 필요에 따라 더 추가 가능
}
