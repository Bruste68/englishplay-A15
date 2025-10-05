import * as Device from 'expo-device';

export type WhisperModelType = 'tiny.en'; // 제한

/**
 * 현재는 속도 테스트를 위해 무조건 tiny.en을 사용
 */
export function getRecommendedWhisperModel(): WhisperModelType {
  const totalMemory = Device.totalMemory ?? 0;
  const totalGB = totalMemory / (1024 ** 3);
  console.log(`📱 디바이스 메모리: ${totalGB.toFixed(2)}GB`);

  return 'tiny.en'; // 지금은 속도 최우선
}

