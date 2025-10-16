// src/types.ts

/** 학습 레벨 타입 */
export type LevelType = "beginner" | "intermediate" | "advanced";

/** 학습 토픽 타입 */
export type TopicType =
  | "business"
  | "daily"
  | "presentation"
  | "meeting"
  | "shopping"
  | "restaurant"
  | "travel";

/** 다국어 텍스트 (영어 포함) */
export type LangKey = "en" | "ko" | "zh" | "ja" | "vi";
export type I18nText = Partial<Record<LangKey, string | string[]>>;
export type LanguageCode = LangKey;


/** 연습 대화 상태 */
export interface DialogState {
  step: number;
  isUserTurn: boolean;
  isActive: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  loadingSummary: boolean;
}

/** 연습 씬 */
export interface PracticeDialogue {
  role: "user" | "ai";
  text: string;
  translations?: I18nText; // ✅ en 포함 허용
}

export interface PracticeScene {
  code?: string; // ✅ 일부 파일엔 없으므로 optional
  title?: string;
  description?: string | I18nText; // ✅ 객체형 description 허용
  topic?: TopicType;
  level?: LevelType;
  dialogues: PracticeDialogue[];
}

/** 하나의 대화 메시지 */
export interface Message {
  id?: string; 
  role: "user" | "ai" | "system";
  text: string;
  step?: number;
  scene?: string;
  timestamp?: number;
  metadata?: {
    audioFile?: string;
    [key: string]: any;
  };
  isTemplate?: boolean;
  audioFile?: string;
  confidence?: number;
  extra?: {
    step?: number;
    scene?: string;
    timestamp?: number;
  };
}

/** 피드백 아이템 */
export interface FeedbackItem {
  type: "pronunciation" | "grammar" | "fluency";
  user: string;
  correction?: string;
  tip?: string;
  role: "user" | "ai";
  text: string;
  metadata?: {
    audioFile?: string;
    [key: string]: any;
  };
}

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'interjection'
  | 'phrase'
  | 'idiom';

export interface WordForms {
  // verbs
  base?: string;
  past?: string;
  pastParticiple?: string;
  presentParticiple?: string;
  thirdPerson?: string;
  // adjectives
  comparative?: string;
  superlative?: string;
  // nouns
  plural?: string;
  // etc.
  variants?: string[];
  [k: string]: string | string[] | undefined;
}

export interface WordMeaningBlock {
  /** 품사 */
  pos?: PartOfSpeech;

  /** 다국어 뜻 */
  meaning?: I18nText | string; // 🔹 기존 구조 + 새 구조 모두 대응

  /** 예문 (다국어 지원) */
  example?: I18nText | string;

  /** 발음 기호 */
  ipa?: string;

  /** 번역 (단순 텍스트형 다국어 매핑) */
  translations?: {
    ko?: string;
    zh?: string;
    ja?: string;
    vi?: string;
    [k: string]: string | undefined;
  };

  /** 명사의 복수형 (과거 데이터 호환용) */
  plural?: string;

  /** 동사/형용사/명사 굴절형 정보 */
  forms?: WordForms;
}

export type TopicWordbook = Record<LevelType, readonly WordGroup[]>;

