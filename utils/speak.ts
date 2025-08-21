
import * as Speech from 'expo-speech';

export function speak(text: string, options = {}) {
  if (!text) return;

  Speech.speak(text, {
    language: 'en',
    rate: 0.85,
    ...options,
  });
}
