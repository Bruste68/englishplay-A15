export function checkPronunciation(userText: string, expectedText: string): string[] {
  const normalize = (s: string) =>
    s.toLowerCase().replace(/[^a-z\s]/g, '').trim().split(/\s+/);

  const userWords = normalize(userText);
  const expectedWords = normalize(expectedText);

  // 누락되거나 다른 단어로 바뀐 경우 감지
  return expectedWords.filter(word => !userWords.includes(word));
}
