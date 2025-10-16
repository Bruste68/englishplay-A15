import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { Alert } from 'react-native';
import { allDialogs } from '../constants/templateDialogs';
import { playBell } from '../utils/playBell';
import type { TopicType, LevelType } from '../types';
import { useVoice } from '../hooks/useVoice';

interface PracticeDialogHook {
  topicKey: TopicType;
  currentLevel: LevelType;
  transcript: string;
  clearTranscript: () => void;
  addMessage: (topic: string, role: 'user' | 'ai', text: string, meta?: any) => void;
  setLocalMessages: React.Dispatch<React.SetStateAction<any[]>>;
  startAutoRecording: (duration?: number) => Promise<void>;
  isRecording: boolean;
  userResponseDelay?: number;
  step?: number;
  isUserTurn?: boolean;
  isActive?: boolean;
  isSpeaking?: boolean;
  loadingSummary?: boolean;
  isPaused?: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  onPracticeEnd?: () => void; // ✅ 명확히 props에 포함
  audioUri?: string | null;
}

interface DialogState {
  step: number;
  isUserTurn: boolean;
  isActive: boolean;
  isSpeaking: boolean;
  loadingSummary: boolean;
  isPaused: boolean;
}

export function usePracticeDialog(props: PracticeDialogHook) {
  const {
    topicKey,
    currentLevel,
    transcript,
    clearTranscript,
    addMessage,
    setLocalMessages,
    startAutoRecording,
    isRecording,
    userResponseDelay = 5,
    onPracticeEnd, // ✅ 여기서 안전하게 분리해서 사용
    audioUri,  // props에서 audioUri 추출
  } = props;

  const [sceneIndex, setSceneIndex] = useState(0);
  const { stopRecording: voiceStopRecording, abortWhisper }  = useVoice(); // 모드전환추가

  const [dialogState, setDialogState] = useState<DialogState>({
    step: 0,
    isUserTurn: false,
    isActive: false,
    isSpeaking: false,
    loadingSummary: false,
    isPaused: false,
  });


  const [isRoleReversed, setIsRoleReversed] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [isMemorizationMode, setIsMemorizationMode] = useState(false);
  const isProcessingRef = useRef(false);
  const lastProcessedStep = useRef(0);
  const dialogStateRef = useRef(dialogState);
  const roleToggleCount = useRef(0);
  const waitForUserAckRef = useRef(false);
  const autoTriggerRef = useRef<NodeJS.Timeout | null>(null);
  const modeTransitioningRef = useRef(false);
  const abortDuringBackRef = useRef(false);

  const scenes = useMemo(() => {
    console.log(`📚 [DIALOG] Loading scenes for ${topicKey} - ${currentLevel}`);
    const rawScenes = allDialogs?.[topicKey as TopicType]?.[currentLevel as LevelType] ?? [];
    return rawScenes.map((scene, index) => ({
      code: `${topicKey}_${currentLevel}_${index + 1}`, // ✅ DB scenes.code와 동일한 규칙
      ...scene,
    }));
  }, [topicKey, currentLevel]);

  // ✅ 모드 전환 감지 시 방어
  const handleModeChangeWhileActive = useCallback(() => {
    if (dialogState.isActive) {
      console.log("⚠️ [MODE] Mode change detected during active dialog → pause");
      voiceStopRecording();
      abortWhisper();
      clearTimeout(autoTriggerRef.current ?? undefined);

      setDialogState(prev => ({ ...prev, isActive: false, isPaused: true }));
      waitForUserAckRef.current = true;

      // ✅ 간단한 콘솔 알림 (UI Alert 제거)
      console.log('ℹ️ [MODE] Active dialog ignored during mode switch (Alert removed)');
    }
  }, [dialogState.isActive]);

  // ✅ 역할 변경 시 완전 초기화
  const handleRoleReverse = useCallback(async () => {
    console.log("🔄 [ROLE] Reversing role – clearing active states");
    try {
      // 🔹 녹음 종료 후 Whisper 중단 순서로
      await voiceStopRecording();
      await new Promise(res => setTimeout(res, 150));
      abortWhisper();

      if (autoTriggerRef.current) clearTimeout(autoTriggerRef.current);

      const { Audio } = await import('expo-av');
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
      });
      setDialogState({
        step: 0,
        isUserTurn: false,
        isActive: false,
        isPaused: false,
        loadingSummary: false,
        isSpeaking: false,
      });
      setIsRoleReversed(r => !r);
      addMessage(topicKey, 'ai', '역할이 전환되었습니다. 이어서 진행하세요.', { isSystem: true });
      console.log('✅ [ROLE] Safe reverse complete');
    } catch (e) {
      console.error('❌ [ROLE REVERSE ERROR]', e);
    }
  }, []);

  /** Alert 직후 대화 일시정지 */
  const pauseForUserAck = async () => {
    waitForUserAckRef.current = true;
    try {
      await voiceStopRecording?.();
      if (Speech && typeof Speech.stop === 'function') {
        await Speech.stop();
      }
    } catch {}
    setDialogState(prev => ({ ...prev, isPaused: true, isSpeaking: false }));
    console.log('⏸️ [WAIT-ACK] Paused until user confirms');
  };

  /** Alert OK 후 대화 재개 */
  const resumeAfterUserAck = async () => {
    if (!waitForUserAckRef.current) {
      console.log('⚠️ [WAIT-ACK] Already resumed, skipping');
      return;
    }
    const wasUserTurn = dialogStateRef.current.isUserTurn;
    waitForUserAckRef.current = false;
    setDialogState(prev => ({ ...prev, isPaused: false }));

    console.log('▶️ [WAIT-ACK] Resuming after user confirmation');
    if (wasUserTurn) {
      try {
        await playBell('beep');
      } catch {}
      await startAutoRecording(userResponseDelay * 1000);
    } else {
      processDialogWithState();
    }
  };

  const playBellSound = async () => {
     try {
       const { sound } = await Audio.Sound.createAsync(
         require('../assets/sounds/bbi.mp3') // ← 사운드 파일 위치
       );
       await sound.playAsync();
     } catch (error) {
       console.warn('❗벨소리 재생 실패:', error);
     }
  };

  const togglePracticeMode = () => {
    const newMode = !practiceMode;
    console.log(`🔄 [MODE] Practice mode ${newMode ? 'enabled' : 'disabled'}`);
    setPracticeMode(newMode);

    const initialState = {
      step: 0,
      isUserTurn: isRoleReversed,
      isActive: newMode,
      isSpeaking: false,
      isPaused: !newMode, // ✅ 시작할 때만 false로, 일시중지 시 true 유지
      loadingSummary: false,
    };
    setDialogState(initialState);
    if (newMode) {
      if (isRoleReversed) {
        console.log('🎤 [START] 사용자부터 시작 - 자동 녹음');
        setTimeout(() => {
          startAutoRecording(userResponseDelay * 1000);
        }, 1000);
      } else {
        console.log('🤖 [START] AI부터 시작 - 대사 실행');
        setTimeout(() => {
          processDialogWithState();
        }, 400);
      }
    }
  };

  const toggleRole = async () => {
     try {
       if (isProcessingRef.current) {
         console.log('⏸️ [ROLE] Role toggle skipped - already processing');
         return;
       }
       isProcessingRef.current = true;

       const isModeActive = practiceMode || isMemorizationMode;

       // ✅ 두 번째 역할 변경 시 초기 상태로 리셋
       if (roleToggleCount.current >= 1) {
         console.log('🔁 두 번째 역할 변경 감지: 완전 초기화');

         const resetState = {
           step: 0,
           isUserTurn: false, // AI부터 시작
           isActive: true,
           isSpeaking: false,
           loadingSummary: false,
           isPaused: false,
         };

         setIsRoleReversed(false); // 역할 되돌림
         setDialogState(resetState);
         roleToggleCount.current = 0; // 카운터 초기화

         addMessage(topicKey, 'ai', '역할이 초기화되어 AI부터 다시 시작합니다', {
           isSystem: true,
         });

         setTimeout(() => processDialogWithState(), 500);
         return;
       }

       const newRoleReversed = !isRoleReversed;
       console.log(`🔄 [ROLE] Role reversed: ${newRoleReversed}`);

       // 모든 음성 활동 정지
       await voiceStopRecording();
       await Speech.stop();

       // 상태 초기화
       const initialState = {
         step: 0,
         isUserTurn: newRoleReversed, // 새 역할에 따라 첫 차례 설정
         isActive: true,
         isSpeaking: false,
         loadingSummary: false,
         isPaused: false,
       };

       setIsRoleReversed(newRoleReversed);
       setDialogState(initialState);

       // 안내 메시지 추가
       addMessage(topicKey, 'ai', `이제 당신이 ${newRoleReversed ? 'AI' : 'User'} 역할을 하게 됩니다`, {
          isSystem: true,
       });

       console.log('✅ 시스템 메시지 추가됨');

       roleToggleCount.current += 1; // ✅ 첫 변경 시 카운터 증가

       // 새 역할에 따른 처리
       if (newRoleReversed) {
         // AI 역할: 사용자 입력 기다림
         setTimeout(async () => {
           await startAutoRecording(userResponseDelay * 1000);
         }, 1000);
       } else {
         // User 역할: AI가 먼저 말함
         setTimeout(() => {
           processDialogWithState();
         }, 500);
       }
     } catch (err) {
       console.error('🔴 [ROLE ERROR] Role toggle failed:', err);
       // 에러 복구
       setDialogState({
         step: 0,
         isUserTurn: false,
         isActive: false,
         isSpeaking: false,
         loadingSummary: false,
         isPaused: false,
       });
     } finally {
       isProcessingRef.current = false;
     }
  };

  const processDialogWithState = async () => {
    const state = dialogStateRef.current; // ✅ 항상 최신 상태
    console.log(`🤖 [DIALOG] Current role: ${isRoleReversed ? 'AI' : 'User'}, Step: ${dialogState.step}`);

    if (waitForUserAckRef.current) {
      console.log('⏸️ [WAIT-ACK] User confirmation required → skip AI flow');
      return;
    }

    // 🔸 NEW: practiceMode 가드 추가 (모드 전환/초기화 중 자동 트리거 방지)
    if (!practiceMode || !state.isActive || state.isPaused) {
      console.log('⏸️ [SKIP] inactive or paused (practiceMode/state)');
      return;
    }

    if (isProcessingRef.current) {
      console.log('🚫 [SKIP] Already processing');
      return;
    }

    isProcessingRef.current = true;

    try {
      const scene = scenes[sceneIndex];
      if (!scene?.dialogues) {
        console.warn('❌ [ERROR] No scene loaded');
        return;
      }
      console.log(`📜 [SCENE] Dialogues length: ${scene.dialogues.length}`);

      if (!scene?.dialogues || dialogState.step >= scene.dialogues.length) {
         console.log('✅ [DIALOG END] Scene ended → Ending session');
         // 대화 종료 처리
         setDialogState({
           step: 0,
           isUserTurn: false,
           isActive: false,
           isSpeaking: false,
           loadingSummary: false,
           isPaused: false,
         });
         if (typeof onPracticeEnd === 'function') {
           console.log('📩 [END] Calling onPracticeEnd() from AI');
           await onPracticeEnd();
         }
         return;
      }

      const currentLine = scene.dialogues[dialogState.step];
      const actualRole = isRoleReversed ? 
         (currentLine.role === 'user' ? 'ai' : 'user') : 
         currentLine.role;

      if (actualRole === 'ai') {
        console.log(`🗣️ [AI] Speaking: "${currentLine.text}"`);
        setDialogState(prev => ({ ...prev, isSpeaking: true }));

        await new Promise(resolve => {
          Speech.speak(currentLine.text, {
            language: 'en',
            onDone: () => {
              if (abortDuringBackRef.current) {
                console.log('🚫 [AI] Speech stopped via back button — skipping');
                abortDuringBackRef.current = false;
                resolve(undefined);
                return;
              }
              isProcessingRef.current = false;
              resolve(undefined);
            },
            onStopped: () => {
              if (abortDuringBackRef.current) {
                console.log('🚫 [AI] Speech forcibly stopped — skipping');
                abortDuringBackRef.current = false;
                resolve(undefined);
                return;
              }
              isProcessingRef.current = false;
              resolve(undefined);
            },
          });
        });

        // 다음 단계로 이동
        const newStep = dialogState.step + 1;
        const sceneEnded = newStep >= scene.dialogues.length;
        console.log(`📊 [STEP] newStep: ${newStep} / scene length: ${scene.dialogues.length}`);
        if (newStep >= scene.dialogues.length) {
           console.log('🏁 [AI] Finished last line. Calling onPracticeEnd()');
           setDialogState({
             step: 0,
             isUserTurn: false,
             isActive: false,
             isSpeaking: false,
             loadingSummary: false,
             isPaused: false,
           });

           if (typeof onPracticeEnd === 'function') {
             console.log('📩 [END] Calling onPracticeEnd() from AI → second block');
             await onPracticeEnd(); // ✅ 이게 없어서 문제 발생
           }
           return;
        }
        const nextLine = scene.dialogues[newStep];
        const nextIsUserTurn = isRoleReversed ? 
           (nextLine.role === 'ai') : 
           (nextLine.role === 'user');
    
        console.log(`🧭 [NEXT] isUserTurn: ${nextIsUserTurn} → ${nextLine?.text}`);
        setDialogState({
           step: newStep,
           isUserTurn: nextIsUserTurn,
           isActive: true,
           isSpeaking: false,
           loadingSummary: false,
           isPaused: dialogState.isPaused,
          // isPaused: false,
        });

        if (nextIsUserTurn) {
          console.log('🔔 [NEXT] User turn');
          if (!waitForUserAckRef.current) {     // ⬅️ 추가
            await playBell('beep');
            await startAutoRecording(userResponseDelay * 1000);
          } else {
            console.log('⏸️ [WAIT-ACK] Not starting auto recording until OK');
          }
        } else {
           console.log('🔄 [RECURSE] Triggering next AI line');
           processDialogWithState();

           // 🔥 릴리즈 꼬임 방지: 안전 재시도
           setTimeout(() => {
             const state = dialogStateRef.current;
             if (
               state.isActive &&
               !state.isSpeaking &&
               !state.isPaused &&
               !waitForUserAckRef.current   // ⬅️ 여기 추가
             ) {
               console.log("🔁 [SAFE RETRY] Retrying auto trigger");
               processDialogWithState();
             }
           }, 150);
        }
      }
    } catch (err) {
       console.error('🔴 [DIALOG ERROR] Process error:', err);

    } finally {
      if (isProcessingRef.current) isProcessingRef.current = false;
    }
  };

  const handlePausePractice = async () => {
     if (dialogState.step === 0 && dialogState.isUserTurn) {
       console.log('⏸️ [PAUSE BLOCKED] Cannot pause during first user turn');
       return;
     }
     try {
       voiceStopRecording(); // 녹음 중지
       if (Speech && typeof Speech.stop === 'function') {
         await Speech.stop(); // TTS 중지
       }

       setDialogState(prev => ({
         ...prev,
         isActive: false,
         isSpeaking: false,
         isPaused: true,
       }));

       console.log('⏸️ [PAUSE] Practice paused');
     } catch (error) {
       console.error('Error in handlePausePractice:', error);
     }
  };

  const handleResumePractice = () => {
     if (!dialogState.isPaused) return;

     const currentScene = scenes[sceneIndex];
     const currentStep = dialogState.step;
     const previousStep = Math.max(currentStep - 1, 0);
     const line = currentScene?.dialogues?.[previousStep];

     if (!line) {
       console.warn('❗ [RESUME] Cannot find previous line');
       return;
     }

     const actualRole = isRoleReversed
       ? line.role === 'user' ? 'ai' : 'user'
       : line.role;

     const restoredState = {
       step: previousStep,
       isUserTurn: actualRole === 'user',
       isActive: true,
       isPaused: false,
       isSpeaking: false,
       loadingSummary: false,
     };

     setDialogState(restoredState);

     setTimeout(() => {
       if (actualRole === 'ai') {
         console.log('🤖 [RESUME] Restarting AI turn at step:', previousStep);
         processDialogWithState();
       } else {
         console.log('🎤 [RESUME] Restarting user turn at step:', previousStep);
         startAutoRecording();
       }
     }, 100);
  };

  const handleUserResponse = () => {
     if ((!transcript || transcript.trim() === "") && dialogState.isUserTurn) {
       console.warn("⚠️ [USER] Empty transcript detected → Fallback to '...'");
     }

     const textToUse = transcript && transcript.trim() !== "" ? transcript : "...";
     const currentStep = dialogState.step;

     const newUserMessage = {
       role: 'user',
       text: textToUse,
       timestamp: new Date().toISOString(),
       step: currentStep,
       metadata: { audioFile: audioUri || '', scene: sceneIndex, step: currentStep }
     };

     setLocalMessages(prev => [...prev, newUserMessage]);
     addMessage(
       topicKey, 
       'user', 
       transcript, 
       { 
         scene: sceneIndex, 
         step: currentStep,
         audioFile: audioUri || '' ,
         isFinal: true, 
       }
     );

     clearTranscript();

     const newStep = dialogState.step + 1;
     const scene = scenes[sceneIndex];

     if (!scene || newStep >= scene.dialogues.length) {
       console.log('🏁 [USER] 마지막 응답 후 연습 종료');

       // 피드백 콜백 호출 방식 개선
       setTimeout(async () => {
         if (typeof onPracticeEnd === 'function') {
           await onPracticeEnd();
         }
       }, 500);

       setDialogState({
         step: 0,
         isActive: false,
         isUserTurn: false,
         isSpeaking: false,
         loadingSummary: false,
         isPaused: false,
       });
       setPracticeMode(false);
       return;
     }

     const nextLine = scene.dialogues[newStep];
     const nextIsUserTurn = nextLine.role === 'user';

     setDialogState({
       step: newStep,
       isUserTurn: nextIsUserTurn,
       isActive: true,
       isSpeaking: false,
       loadingSummary: false,
       isPaused: dialogState.isPaused,
     });

     lastProcessedStep.current = newStep;

     // ✅ 다음 차례가 AI면 바로 실행
     if (!nextIsUserTurn) {
       console.log('▶️ [NEXT AI] 사용자 응답 후 → AI 대사 트리거');
       setTimeout(() => {
         processDialogWithState();
       }, 300);
     }
  };

  const resetPractice = () => {
    console.log('♻️ [RESET] 연습 세션 완전 초기화 실행');

    // 1. 메시지 초기화
    clearTranscript();
    setLocalMessages([]);

    // 2. 상태 초기화
    setDialogState({
      step: 0,
      isUserTurn: false,
      isActive: false,
      isSpeaking: false,
      isPaused: false,
      loadingSummary: false,
    });

    setPracticeMode(false);
    setIsMemorizationMode(false);
    setIsRoleReversed(false);
    setSceneIndex(0);
    roleToggleCount.current = 0;
    lastProcessedStep.current = 0;
    dialogStateRef.current = {
      step: 0,
      isUserTurn: false,
      isActive: false,
      isSpeaking: false,
      isPaused: false,
      loadingSummary: false,
    };

    // 시스템 메시지 추가 (선택)
    addMessage(topicKey, 'ai', '🔁 연습이 초기화되었습니다. 새롭게 시작합니다.', {
      isSystem: true,
    });
  };


  useEffect(() => {
     dialogStateRef.current = dialogState;
  }, [dialogState]);

  useEffect(() => {
     const isPaused = dialogStateRef.current.isPaused;

     if (
       transcript &&
       (practiceMode || isMemorizationMode) &&
       dialogState.isUserTurn &&
       !dialogStateRef.current.isPaused &&
       !waitForUserAckRef.current  
     ) {
       handleUserResponse();
     }
  }, [transcript]);

  useEffect(() => {
     if (
       (practiceMode || isMemorizationMode) &&
       dialogState.isActive &&
       !dialogState.isSpeaking &&
       !dialogState.isPaused &&  // ✅ 반드시 Resume 눌렀을 때만 실행
       !waitForUserAckRef.current && 
       scenes.length > 0
     ) {
       processDialogWithState();
     }
  }, [practiceMode, isMemorizationMode, dialogState.step, dialogState.isActive, dialogState.isPaused]);

  useEffect(() => {
    console.log(`🔄 [RESET] topic 또는 level 변경 감지됨 → 상태 초기화`);

    setDialogState({
      step: 0,
      isUserTurn: false,
      isActive: false,
      isSpeaking: false,
      loadingSummary: false,
      isPaused: false,
    });

    setPracticeMode(false);
    setIsMemorizationMode(false);
    setIsRoleReversed(false);
    setSceneIndex(0);
    roleToggleCount.current = 0;
    lastProcessedStep.current = 0;
    dialogStateRef.current = {
      step: 0,
      isUserTurn: false,
      isActive: false,
      isSpeaking: false,
      loadingSummary: false,
      isPaused: false,
    };

    // ❗ 외부에서 전달받은 메시지 버퍼도 초기화 필요
    setLocalMessages([]);

    // ❗ 시스템 메시지로 안내
    addMessage(topicKey, 'ai', '새로운 레벨 또는 주제로 대화가 초기화되었습니다.', {
      isSystem: true,
    });

  }, [topicKey, currentLevel]);

  return {
    dialogState,
    processDialogWithState,
    togglePracticeMode,
    practiceMode,
    scenes,
    sceneIndex,
    setSceneIndex,
    toggleRole,
    isRoleReversed,
    isMemorizationMode,
    setIsMemorizationMode,
    setDialogState,
    handlePausePractice,
    handleResumePractice,
    pauseForUserAck,
    resumeAfterUserAck,
    handleModeChangeWhileActive,
    handleRoleReverse,
    modeTransitioningRef,
  };
}