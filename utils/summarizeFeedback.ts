import type {
  Message,
  FeedbackItem,
  DialogState,
  LanguageCode,
  PracticeScene,
  TopicType,
  LevelType
} from '../types';

export function generateFeedbackSummary(items: FeedbackItem[]) {
  const summary: {
    grammar: { [key: string]: number };
    pronunciation: { [word: string]: number };
  } = {
    grammar: {},
    pronunciation: {},
  };

  items.forEach(item => {
    if (item.type === 'grammar') {
      let key = '기타 문법 오류';

      if (item.tip?.includes('시제')) key = '시제 오류';
      else if (item.tip?.includes('관사')) key = '관사 오류';
      else if (item.tip?.includes('어순')) key = '어순 오류';
      else if (item.tip?.includes('전치사')) key = '전치사 오류';
      else if (item.tip) key = item.tip.split('.')[0];

      summary.grammar[key] = (summary.grammar[key] || 0) + 1;

    } else if (item.type === 'pronunciation') {
      const word = item.correction?.split(' ')[0]?.toLowerCase();
      if (word) {
        summary.pronunciation[word] = (summary.pronunciation[word] || 0) + 1;
      }
    }
  });

  return summary;
}

/**
 * 여러 세션에 걸쳐 2회 이상 등장한 오류를 추출
 */
export function summarizeFeedback(feedbackItems: { items: FeedbackItem[] }[]): string[] {
  const repeatedMap: Record<string, number> = {};

  for (const item of feedbackItems) {
    for (const f of item.items) {
      let key = '';
      if (f.type === 'pronunciation') {
        const word = f.correction?.split(' ')[0];
        if (word) key = `🔊 ${word}`;
      } else if (f.type === 'grammar') {
        key = `📘 ${f.tip?.split('.')[0] || f.correction}`;
      }

      if (key) {
        repeatedMap[key] = (repeatedMap[key] || 0) + 1;
      }
    }
  }

  const repeated = Object.entries(repeatedMap)
    .filter(([_, count]) => count > 1)
    .map(([key]) => key);

  return repeated;
}