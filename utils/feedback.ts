import { LanguageCode } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchGptResponse } from '../services/fetchGptResponse';
import { useLanguage } from '../hooks/useLanguage';

const PROMPT_TEMPLATES: Record<LanguageCode, string> = {
  en: `You are an English tutor AI. Please analyze the following user conversation and return a list of feedback in JSON array format.

Each item must include:
- "type": "pronunciation" or "grammar"
- "user": the user's original sentence
- "correction": the corrected sentence
- "tip": a short helpful tip (for grammar: explain the rule, for pronunciation: provide phonetic guidance)

Rules:
1. For pronunciation: focus on commonly mispronounced words and provide IPA transcription
2. For grammar: focus on tense errors, article mistakes, subject-verb agreement
3. Prioritize significant errors over minor ones
4. Exclude feedback for very short responses (less than 3 words)
5. Return only unique errors (don't repeat same corrections)

DO NOT explain. DO NOT include any introduction. ONLY return a valid JSON array.

Conversation:
{inputText}`,

  ko: `당신은 영어 튜터 AI입니다. 다음 사용자 대화를 분석하고 JSON 배열 형식으로 피드백 목록을 반환하세요.

각 항목은 다음을 포함해야 합니다:
- "type": "pronunciation" 또는 "grammar"
- "user": 사용자의 원래 문장
- "correction": 수정된 문장
- "tip": 짧은 도움말 (문법: 규칙 설명, 발음: 발음 기호 제공)

규칙:
1. 발음: 흔히 틀리는 발음에 집중하고 IPA 기호 제공
2. 문법: 시제 오류, 관사 실수, 주어-동사 일치에 집중
3. 사소한 오류보다 중요한 오류 우선
4. 매우 짧은 응답(3단어 미만)은 피드백 제외
5. 동일한 수정 사항 반복하지 않음

설명하지 마세요. 서론을 포함하지 마세요. 유효한 JSON 배열만 반환하세요.

대화 내용:
{inputText}`,

  ja: `あなたは英語のチューターAIです。次のユーザー会話を分析し、JSON配列形式でフィードバックのリストを返してください。

各項目には以下を含めてください:
- "type": "pronunciation" または "grammar"
- "user": ユーザーの元の文
- "correction": 修正された文
- "tip": 短い助言 (文法: ルール説明, 発音: 発音記号提供)

ルール:
1. 発音: よく間違える発音に焦点を当て、IPA記号を提供
2. 文法: 時制の誤り、冠詞の間違い、主語と動詞の一致に焦点
3. 軽微な誤りより重要な誤りを優先
4. 非常に短い応答(3語未満)はフィードバック除外
5. 同じ修正を繰り返さない

説明しないでください。導入部を含めないでください。有効なJSON配列のみを返してください。

会話:
{inputText}`,

  zh: `你是一个英语导师AI。请分析以下用户对话并以JSON数组格式返回反馈列表。

每个项目必须包含:
- "type": "pronunciation" 或 "grammar"
- "user": 用户的原始句子
- "correction": 修正后的句子
- "tip": 简短提示 (语法: 解释规则, 发音: 提供音标)

规则:
1. 发音: 关注常见发音错误并提供国际音标
2. 语法: 关注时态错误、冠词错误、主谓一致
3. 优先处理重大错误而非小错误
4. 排除对非常简短回复(少于3个词)的反馈
5. 只返回唯一错误(不要重复相同的修正)

不要解释。不要包含任何介绍。只返回有效的JSON数组。

对话:
{inputText}`,

  vi: `Bạn là một trợ lý AI dạy tiếng Anh. Hãy phân tích cuộc hội thoại sau của người dùng và trả về phản hồi dưới dạng mảng JSON.

Mỗi mục phải bao gồm:
- "type": "pronunciation" hoặc "grammar"
- "user": câu gốc của người học
- "correction": câu đã chỉnh sửa
- "tip": mẹo ngắn (ngữ pháp: giải thích quy tắc, phát âm: hướng dẫn phát âm)

Quy tắc:
1. Với phát âm: tập trung vào từ dễ phát âm sai, cung cấp ký hiệu IPA
2. Với ngữ pháp: tập trung vào thì, mạo từ, sự hòa hợp chủ ngữ-động từ
3. Ưu tiên lỗi lớn hơn lỗi nhỏ
4. Bỏ qua phản hồi cho câu rất ngắn (dưới 3 từ)
5. Không lặp lại lỗi giống nhau

KHÔNG giải thích. KHÔNG có phần giới thiệu. CHỈ trả về một mảng JSON hợp lệ.

Hội thoại:
{inputText}`
};

const SYSTEM_PROMPTS = {
  en: "You are a strict English teacher who provides precise feedback",
  ko: "당신은 정확한 피드백을 제공하는 엄격한 영어 선생님입니다",
  ja: "あなたは正確なフィードバックを提供する厳しい英語の先生です",
  zh: "你是一位提供精确反馈的严格英语老师",
  vi: "Bạn là một giáo viên nghiêm khắc đưa ra phản hồi chính xác"
};

const DEFAULT_TIPS = {
  grammar: {
    en: "Grammar rule",
    ko: "문법 규칙",
    ja: "文法規則",
    zh: "语法规则",
    vi: "Quy tắc ngữ pháp"
  },
  pronunciation: {
    en: "Pronunciation tip",
    ko: "발음 팁",
    ja: "発音のヒント",
    zh: "发音提示",
    vi: "Mẹo phát âm"
  }
};

function normalizeText(str: string): string {
  return str
    .normalize('NFKD')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function classifyError(stt: string, expected: string): 'pronunciation' | 'grammar' | null {
  const a = normalizeText(stt);
  const b = normalizeText(expected);
  if (a === b) return null;

  const aWords = a.split(' ');
  const bWords = b.split(' ');
  const common = aWords.filter(w => bWords.includes(w)).length;

  if (common >= Math.min(aWords.length, bWords.length) / 2) return 'pronunciation';
  return 'grammar';
}

async function getFeedbackFromGpt({ 
  user, 
  expected, 
  type, 
  language 
}: { 
  user: string; 
  expected: string; 
  type: 'pronunciation' | 'grammar'; 
  language: LanguageCode 
}) {
  const prompt = `User said: "${user}"\nExpected: "${expected}"\nType of error: ${type}\n\nReturn as JSON: { \"correction\": \"...\", \"tip\": \"...\" }`;

  const gptResponse = await fetchGptResponse(prompt, {
    systemPrompt: "You are a strict English teacher.",
    temperature: 0.2,
    language,
  });

  const start = gptResponse.indexOf('{');
  const end = gptResponse.lastIndexOf('}');
  if (start >= 0 && end > start) {
    try {
      return JSON.parse(gptResponse.slice(start, end + 1));
    } catch (e) {
      console.warn('GPT 응답 JSON 파싱 실패:', e);
    }
  }
  return null;
}

export async function generatePracticeFeedback(
  dialogues: Array<{ role: string; text: string }> = [], 
  messages: Array<{ 
    step?: number; 
    role: string; 
    text: string; 
    metadata?: { 
      audioFile?: string;
      scene?: number;
      step?: number;
    } 
  }> = [], 
  language: LanguageCode = 'en'
) {
  const feedbackItems: Array<{
    type: 'pronunciation' | 'grammar';
    user: string;
    correction: string;
    tip: string;
    ipa: string;
    metadata: {
      audioFile?: string;
      scene?: number;
      step?: number;
    };
  }> = [];

  for (let index = 0; index < dialogues.length; index++) {
    const dialog = dialogues[index];
    if (dialog.role !== 'user') continue;

    const userMsg = messages.find(m => m.step === index && m.role === 'user');
    if (!userMsg) continue;

    const expected = dialog.text.trim();
    const stt = userMsg.text.trim();
    const userAudioUri = userMsg.metadata?.audioFile; 

    console.log(`🔊 [FEEDBACK DEBUG] Step ${index} - Audio URI:`, userAudioUri);

    const errorType = classifyError(stt, expected);
    if (!errorType) continue;

    const gptResult = await getFeedbackFromGpt({
      user: stt,
      expected,
      type: errorType,
      language
    });

    if (gptResult) {
      feedbackItems.push({
        type: errorType,
        user: stt,
        correction: gptResult.correction || expected,
        tip: gptResult.tip || DEFAULT_TIPS[errorType][language],
        ipa: getIPA(expected) || '',
        metadata: {
          audioFile: userAudioUri,
          scene: userMsg.metadata?.scene,
          step: userMsg.step
        }
      });
    }
  }
  console.log('✅ [FEEDBACK FINAL] Generated items:', feedbackItems);
  return feedbackItems;
}

export async function generateFreeTalkFeedback(
  messages: Array<{ role: string; text?: string }> = [], 
  language: LanguageCode = 'en'
) {
  try {
    const userMessages = messages
      .filter(m => m.role === 'user' && m.text && m.text.trim().length >= 2)
      .map(m => m.text!.trim());

    if (userMessages.length === 0) return [];

    const inputText = userMessages.join('\n');
    const promptTemplate = PROMPT_TEMPLATES[language] || PROMPT_TEMPLATES.en;
    const prompt = promptTemplate.replace('{inputText}', inputText);

    const gptResponse = await fetchGptResponse(prompt, {
      systemPrompt: SYSTEM_PROMPTS[language] || SYSTEM_PROMPTS.en,
      ignorePreviousDialogs: true,
      temperature: 0.2,
      language
    });

    // parsed 변수 선언 및 타입 지정
    let parsed: Array<{
      user?: string;
      correction?: string;
      type?: 'pronunciation' | 'grammar';
      tip?: string;
    }>;

    try {
      parsed = JSON.parse(gptResponse);
    } catch {
      const start = gptResponse.indexOf('[');
      const end = gptResponse.lastIndexOf(']');
      if (start >= 0 && end > start) {
        parsed = JSON.parse(gptResponse.slice(start, end + 1));
      } else {
        throw new Error('Invalid JSON format from GPT');
      }
    }

    const unique = new Map();

    parsed.forEach(item => {
      const key = item.user?.toLowerCase().trim();
      if (!key || unique.has(key)) return;

      const corrected = item.correction?.trim() || '';
      const isModified = corrected && corrected.toLowerCase() !== key;

      unique.set(key, {
        type: item.type || (isModified ? 'grammar' : 'pronunciation'),
        user: item.user || '',
        correction: isModified ? corrected : '',
        tip: refineTip(item.user || '', corrected, item.tip, item.type),
        ipa: getIPA(corrected) || '',
      });
    });

    return Array.from(unique.values());
  } catch (err) {
    console.error('❗Feedback generation failed:', err);
    return [];
  }
}

function refineTip(user: string, correction: string | undefined, tip: string | undefined, type: 'pronunciation' | 'grammar' | undefined, language: LanguageCode = 'en'): string {
  const userLower = user.toLowerCase();
  const correctionLower = correction?.toLowerCase() ?? '';

  if (type === 'pronunciation') {
    if (userLower.includes('cash') && correctionLower === 'cards') {
      return {
        en: `You might have pronounced 'cards' as 'cash'. Focus on the /d/ and /z/ sounds in 'cards'.`,
        ko: `'cards'를 'cash'로 발음했을 수 있어요. /d/와 /z/ 소리에 주의하세요.`,
        ja: "'cards' を 'cash' と発音した可能性があります。/d/ と /z/ の音に注意してください。",
        zh: "你可能把 'cards' 发音成了 'cash'，请注意 /d/ 和 /z/ 音。",
        vi: "Bạn có thể đã phát âm 'cards' thành 'cash'. Hãy chú ý âm /d/ và /z/."
      }[language] ?? `You might have pronounced 'cards' as 'cash'. Focus on the /d/ and /z/ sounds in 'cards'.`;
    }

    if (userLower.includes('cars') && correctionLower === 'cards') {
      return {
        en: `You might have said 'cars' instead of 'cards'. Try practicing the /d/ and /z/ ending.`,
        ko: `'cars'를 'cards'로 바꿔보세요. /d/와 /z/로 끝나는 발음을 연습해보세요.`,
        ja: "「cars」を「cards」と言ったかもしれません。語尾の/d/と/z/の練習をしましょう。",
        zh: "你可能把 'cars' 说成了 'cards'，请多练习 /d/ 和 /z/ 的结尾音。",
        vi: "Bạn có thể phát âm 'thẻ' là 'tiền mặt'. Tập trung vào âm thanh/d/ và/z/ trong bài 'cards'."
      }[language] ?? `You might have said 'cars' instead of 'cards'. Try practicing the /d/ and /z/ ending.`;
    }

    if (userLower.includes('do') && correctionLower?.includes('use')) {
      return {
        en: `You might have said 'do' instead of 'use'. Try practicing 'use' to get it right.`,
        ko: `'do'를 'use'로 잘못 발음했을 수 있어요. 'use'를 반복 연습해보세요.`,
        ja: "「do」を「use」と言ったかもしれません。「use」を練習しましょう。",
        zh: "你可能把 'do' 发音成了 'use'，请多练习 'use'。",
        vi: "Bạn có thể đã nói 'do' thay vì 'use'. Hãy thử thực hành 'sử dụng' để làm cho đúng."
      }[language] ?? `You might have said 'do' instead of 'use'. Try practicing 'use' to get it right.`;
    }

    if (userLower.includes("it's it's")) {
      return {
        en: `You repeated "it's". Say it just once: "${correction}".`,
        ko: `"it's"를 반복했어요. 한 번만 말해보세요: "${correction}"`,
        ja: "「it's」を繰り返しました。一度だけ言ってください: \"" + correction + "\"",
        zh: "你重复说了“it's”，只需说一次：${correction}。",
        vi: `Anh lặp lại "nó". Nói một lần thôi: "${correction}"`
      }[language] ?? `You repeated "it's". Say it just once: "${correction}".`;
    }
  }

  return tip || DEFAULT_TIPS[type as keyof typeof DEFAULT_TIPS]?.[language] || DEFAULT_TIPS[type as keyof typeof DEFAULT_TIPS]?.en || '';
}

function getIPA(text: string): string {
  const dict: Record<string, string> = {
    'got it': '/ˈɡɑːt ɪt/',
    'good morning': '/ɡʊd ˈmɔːrnɪŋ/',
    'let’s use zoom this time': '/lɛts juːz zuːm ðɪs taɪm/'
  };
  return dict[text.toLowerCase()] || '';
}

export async function getFeedbackByMode({
  mode,
  dialogues = [],
  messages = [],
  language = 'en'
}: {
  mode: string;
  dialogues?: Array<{ role: string; text: string }>;
  messages?: Array<{ step?: number; role: string; text: string }>;
  language?: LanguageCode;
}) {
  if (mode === 'free') {
    return await generateFreeTalkFeedback(messages, language);
  } else {
    return generatePracticeFeedback(dialogues, messages, language);
  }
}

export function generateFeedbackSummary(items: any[] = [], language: LanguageCode = 'en') {
  const summary: {
    grammar: Record<string, number>;
    pronunciation: Record<string, number>;
  } = {
    grammar: {},
    pronunciation: {},
  };

  items.forEach((item: {
    user?: string;
    correction?: string;
    type?: 'pronunciation' | 'grammar';
    tip?: string;
  }) => {
    if (!item || typeof item !== 'object') return;

    const type = item.type || 'pronunciation';
    const tip = item.tip || '';
    const correction = item.correction || '';

    if (type === 'grammar') {
      const key = tip || (language === 'ko' ? '기타 문법 오류' : 'Other grammar issues');
      summary.grammar[key] = (summary.grammar[key] || 0) + 1;
    } else if (type === 'pronunciation') {
      const word = correction.split(' ')[0]?.toLowerCase() || '';
      if (word) summary.pronunciation[word] = (summary.pronunciation[word] || 0) + 1;
    }
  });

  return {
    titles: {
      grammar: language === 'ko' ? '문법 오류' : 'Grammar Errors',
      pronunciation: language === 'ko' ? '발음 문제' : 'Pronunciation Issues'
    },
    data: summary
  };
}

export const saveFeedbackToStorage = async (feedbackData: any) => {
  try {
    const existing = await AsyncStorage.getItem('feedbackHistory');
    const parsed = existing ? JSON.parse(existing) : [];
    
    const isDuplicate = parsed.some((item: any) => 
      Math.abs(new Date(item.createdAt).getTime() - new Date(feedbackData.createdAt).getTime()) < 60000 &&
      item.topic === feedbackData.topic
    );

    if (!isDuplicate) {
      const updated = [...parsed, feedbackData].slice(-100);
      await AsyncStorage.setItem('feedbackHistory', JSON.stringify(updated));
      console.log('✅ Feedback saved successfully');
      return true;
    }
    console.log('⚠️ Duplicate feedback detected, not saving');
    return false;
  } catch (err) {
    console.error('❗ Failed to save feedback:', err);
    return false;
  }
};