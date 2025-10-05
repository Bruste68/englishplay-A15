import { ThemedText } from '@components/ThemedText';

export type LanguageCode = 'en' | 'ko' | 'ja' | 'zh' | 'vi';

export interface DialogState {
  step: number;
  isUserTurn: boolean;
  isActive: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  loadingSummary: boolean;
}

export type Message = {
  id: string;
  role: 'user' | 'ai' | 'system';
  text: string;
  timestamp: number;
  [key: string]: any;
  userMessage?: boolean;
  scene?: number;
  step?: number;
  metadata?: {
    isTemplate?: boolean;
    audioFile?: string;
    confidence?: number;
  };
  userMessage?: boolean; // ✅ 반드시 추가!
};

export interface FeedbackItem {
  type: 'pronunciation' | 'grammar';
  user: string;
  correction: string;
  tip: string;
  ipa?: string;
  role: 'user' | 'ai';
  text: string;
  translations?: Record<LanguageCode, string>;
  metadata?: {
    audioFile?: string;
    [key: string]: any;
  };
}

export type LevelType = 'beginner' | 'intermediate' | 'advanced';
type MessageMetadata = NonNullable<Message['metadata']>;

export type TopicType =
  | 'travel'
  | 'shopping'
  | 'business'
  | 'daily'
  | 'meeting'
  | 'presentation'
  | 'restaurant';

export interface PracticeScene {
  description: Readonly<Record<LanguageCode, string>>;
  dialogues: ReadonlyArray<{
    role: 'user' | 'ai';
    text: string;
    translations: Readonly<Record<LanguageCode, string>>;
  }>;
}



