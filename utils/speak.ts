import * as Speech from 'expo-speech';

// 기존 함수 (유지)
export function speak(text: string, options = {}) {
  if (!text) return;

  Speech.speak(text, {
    language: 'en',
    rate: 0.85,
    ...options,
  });
}

export async function speakText(text: string, language: string = 'en', options = {}) {
  if (!text) return;

  try {
    await Speech.stop(); // ✅ async 중단
    await new Promise(res => setTimeout(res, 150)); // 살짝 딜레이
    await Speech.speak(text, {
      language,
      rate: 0.9,
      pitch: 1.0,
      ...options,
    });
  } catch (e) {
    console.warn('Speech error:', e);
  }
}
