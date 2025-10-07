import { useEffect, useState, useRef } from 'react';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';
import axios from 'axios';
import { WHISPER_URL } from '../lib/env';
import type { Message } from '../types';

console.log(' 위스퍼 주소0:', process.env.EXPO_PUBLIC_WHISPER_URL);

const WHISPER_API_URL = WHISPER_URL;

// ✅ 서버 기반 Whisper 전사 함수 정의
async function transcribeAudio(uri: string, lang = 'en'): Promise<string> {
  try {

    console.log('🎯 Whisper 전송 URL:', `${WHISPER_API_URL}/transcribe`);
    console.log('🎧 Whisper 전송 파일 URI:', uri);

    const formData = new FormData();
    formData.append('file', {
      uri,
      type: 'audio/mp4',
      name: 'recording.m4a',
    } as any);
    formData.append('language', lang);

    const response = await axios.post(`${WHISPER_API_URL}/transcribe`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 5000, // ✅ 5초 안에 응답 없으면 에러
    });
    console.log('✅ Whisper 응답 결과:', response.data);
    console.log('🎯 Whisper 요청 주소:', `${WHISPER_API_URL}/transcribe`);

    return response.data?.text || '';
  } catch (err) {
    console.error('❌ [WHISPER API ERROR]', err);
    return "__NETWORK_ERROR__"; // ✅ 명시적 에러 플래그 반환
  }
}

let globalRecordingInstance: Audio.Recording | null = null;
export const isAutoRecordingInProgress = { current: false };

export function useVoice() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const dialogActiveRef = useRef(true); // 기본값 true
  const isStoppingRef = { current: false };

  // 외부에서 이 함수로 대화 상태 갱신
  const setDialogActive = (active: boolean) => {
    dialogActiveRef.current = active;
  };

  const silenceTimer = useRef<number | null>(null);
  const silenceCounter = useRef(0);
  const isAutoRecordingInProgress = useRef(false);
  const silenceThreshold = 4500;
  const vadIntervalRef = useRef<number | null>(null);
  const isProcessing = useRef(false);
  const [localMessages, setLocalMessages] = useState<Message[]>([]);

  const addMessage = (text: string, role: 'user' | 'ai', step?: number, meta?: any) => {
    const newMessage = {
      text,
      role,
      step,
      timestamp: Date.now(),
      ...(meta || {}),
    };
    setLocalMessages((prev) => [...prev, newMessage]);
  };

  const cleanupRecording = async (): Promise<void> => {
    if (!globalRecordingInstance) return;
    try {
      const rec = globalRecordingInstance;
      globalRecordingInstance = null;

      const status = await rec.getStatusAsync().catch(() => null);
      if (status?.isRecording) {
        await rec.stopAndUnloadAsync().catch(() => {});
      } else {
        await rec.stopAndUnloadAsync().catch(() => {});
      }
    } catch (err) {
      console.warn('[RECORDING CLEANUP WARN]', err);
    } finally {
      globalRecordingInstance = null;
    }
  };

  const _startRecording = async (): Promise<boolean> => {
    if (isProcessing.current) return false;
    isProcessing.current = true;

    try {
      await cleanupRecording();

      const { status, canAskAgain } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        if (!canAskAgain) {
          setError('🎤 마이크 권한이 필요합니다. 앱 설정에서 마이크 권한을 허용해주세요.');
        } else {
          // 팝업은 뜰 수 있지만, 거부된 상태
          setError('마이크 권한이 거부되었습니다.');
        }
        throw new Error('Permission denied');
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      globalRecordingInstance = recording;
      setIsRecording(true);
      startVADLoop();

      return true;
    } catch (err) {
      console.error('[START RECORDING ERROR]', err);
      return false;
    } finally {
      isProcessing.current = false;
    }
  };

  const stopRecording = async (): Promise<void> => {
    if (isStoppingRef.current) {
      console.log('⏸️ [SKIP] stopRecording already running');
      return;
    }
    isStoppingRef.current = true;

    const rec = globalRecordingInstance;
    if (!rec) {
      console.log('ℹ️ [STOP] No active recording');
      isStoppingRef.current = false;
      return;
    }
    globalRecordingInstance = null;

    try {
      stopVADLoop();

      // URI 먼저 확보
      let uri: string | null = null;
      try {
        uri = rec.getURI?.() ?? null;
      } catch {}

      // 안전한 unload
      await rec.stopAndUnloadAsync().catch((e) => {
        console.log('[STOP WARN]', e);
      });

      setIsRecording(false);
      setAudioUri(uri);

      if (uri) {
        console.log('🔈 [STOP] URI:', uri);
        try {
          const text = await transcribeAudio(uri, 'en');
          if (!dialogActiveRef.current) {
            console.log('⛔ 대화 종료 후 Whisper 응답 무시');
            return;
          }
          if (!text || text.trim() === "") {
            setTranscript("__NO_SPEECH__");
          } else {
            setTranscript(text.trim());
          }
        } catch (e) {
          console.log('[WHISPER WARN]', e);
        }
      }
    } catch (err) {
      console.error('[STOP RECORDING ERROR]', err);
    } finally {
      isStoppingRef.current = false;
    }
  };

  // ✅ useVoice.ts에 추가할 것
  const stopAllRecordingLogic = () => {
    stopVADLoop();
    if (silenceTimer.current) {
      clearTimeout(silenceTimer.current as unknown as number);
      silenceTimer.current = null;
    }
    isAutoRecordingInProgress.current = false;
    dialogActiveRef.current = false;
  };

  const startAutoRecording = async (duration: number = 14000): Promise<void> => {
    if (isAutoRecordingInProgress.current) return;
    isAutoRecordingInProgress.current = true;

    try {
      const success = await _startRecording();
      if (!success) {
        isAutoRecordingInProgress.current = false;
        return;
      }

      if (duration) {
        setTimeout(async () => {
          await stopRecording();
          isAutoRecordingInProgress.current = false;
        }, duration);
      }
    } catch (err) {
      isAutoRecordingInProgress.current = false;
      console.error('[AUTO RECORDING ERROR]', err);
    }
  };

  const abortWhisper = () => {
    console.log('🚫 [WHISPER] 서버 기반이므로 abort 불필요');
  };

  const clearTranscript = () => {
    setTranscript('');
    setError(null);
  };

  const startVADLoop = () => {
    if (!globalRecordingInstance) return;

    vadIntervalRef.current = setInterval(async () => {
      const status = await globalRecordingInstance?.getStatusAsync();
      const volume = status?.metering;

      if (volume != null && volume < -55) {
        silenceCounter.current += 1;
        if (silenceCounter.current >= 20) { 
          stopRecording();
          silenceCounter.current = 0;
        }
      } else {
        silenceCounter.current = 0;
      }
    }, 200) as unknown as number;
  };

  const stopVADLoop = () => {
    if (vadIntervalRef.current) {
      clearInterval(vadIntervalRef.current as unknown as number);
      vadIntervalRef.current = null;
    }
    if (silenceTimer.current) {
      clearTimeout(silenceTimer.current as unknown as number);
      silenceTimer.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopVADLoop();
      cleanupRecording();
    };
  }, []);

  return {
    isRecording,
    transcript,
    audioUri,
    error,
    startAutoRecording,
    stopRecording,
    clearTranscript,
    addMessage,
    setLocalMessages, 
    startRecording: _startRecording,
    abortWhisper,
    setDialogActive,
    stopAllRecordingLogic,
  };
}
