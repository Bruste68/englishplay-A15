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
  const { stopRecording: voiceStopRecording, abortWhisper } = useVoice({
    shouldBlockUI: () =>
           resumeGuardRef.current || waitForUserAckRef.current || whisperAbortedRef.current,
  });

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

  const runIdRef = useRef(0); // 현재 진행중 플로우의 토큰
  const bumpRun = () => { runIdRef.current += 1; };

  // 최상단 state/ref들 근처에 추가
  const resumeGuardRef = useRef(false);      // 복귀 팝업 떠 있을 때 자동 진행 금지
  const whisperAbortedRef = useRef(false);   // 백그라운드 전환 중 Whisper 요청/자동녹음 차단

  // 외부(View)에서 쓸 수 있도록 메서드 노출할 준비
  const setResumeGuard = (on: boolean) => { resumeGuardRef.current = on; };
  const setWhisperAborted = (on: boolean) => { whisperAbortedRef.current = on; };
  const resumePlanRef = useRef<null | { step: number; userTurn: boolean }>(null);

  const scheduleNextTurn = async (nextStep: number, nextIsUserTurn: boolean) => {
    const myRun = runIdRef.current;

    const guardOn = resumeGuardRef.current || waitForUserAckRef.current || whisperAbortedRef.current;
    if (guardOn) {
      // 팝업이 떠 있거나 Whisper 차단 중이면 '계획만 저장'하고 멈춘다
      resumePlanRef.current = { step: nextStep, userTurn: nextIsUserTurn };
      setDialogState(prev => ({ ...prev, isPaused: true, isActive: true }));
      return;
    }

    // 예약 실행 직전에도 토큰이 변했는지 확인 (중간에 BG 등으로 취소되었으면 즉시 무시)
    if (myRun !== runIdRef.current) return;

    setDialogState({
      step: nextStep,
      isUserTurn: nextIsUserTurn,
      isActive: true,
      isSpeaking: false,
      loadingSummary: false,
      isPaused: false,
    });

    if (nextIsUserTurn) {
      await playBell('beep');
      // 실행 직전 다시 토큰 확인
      if (myRun !== runIdRef.current) return;
      if (!waitForUserAckRef.current && !resumeGuardRef.current && !whisperAbortedRef.current) {
        await startAutoRecording(userResponseDelay * 1000);
      }
    } else {
      // AI 연쇄 구간
      if (myRun !== runIdRef.current) return;
      processDialogWithState();
    }
  };

  const scenes = useMemo(() => {
    console.log(`📚 [DIALOG] Loading scenes for ${topicKey} - ${currentLevel}`);
    const rawScenes = allDialogs?.[topicKey as TopicType]?.[currentLevel as LevelType] ?? [];

    return rawScenes.map((scene, index) => ({
      code: `${topicKey}_${currentLevel}_${index + 1}`, // ✅ DB scenes.code와 동일한 규칙
      ...scene,
    }));
  }, [topicKey, currentLevel]);

  useEffect(() => { dialogStateRef.current = dialogState; }, [dialogState]);
  const isPausedRef = useRef(false);
  useEffect(() => { isPausedRef.current = dialogState.isPaused; }, [dialogState.isPaused]);


  // ✅ 모드 전환 감지 시 방어
  const handleModeChangeWhileActive = useCallback(() => {
    if (dialogState.isActive) {
      console.log("⚠️ [MODE] Mode change detected during active dialog → pause");
      voiceStopRecording();
      abortWhisper();
      clearTimeout(autoTriggerRef.current ?? undefined);

      setDialogState(prev => ({ ...prev, isActive: false, isPaused: true }));
      waitForUserAckRef.current = true;

      Alert.alert(
        "연습 중입니다",
        "지금은 연습중입니다. 대화를 마치고 모드 전환해주세요.",
        [
          {
            text: "OK",
            onPress: () => {
              console.log("▶️ [WAIT-ACK] Resuming after user confirmation");
              waitForUserAckRef.current = false;

              // ✅ 완전한 재개 (기존 WAIT 상태 해제 + 프로세스 재시작)
              setDialogState(prev => ({
                ...prev,
                isActive: true,
                isPaused: false,
              }));
              processDialogWithState();
            },
          },
        ],
        { cancelable: false }
      );
    }
  }, [dialogState.isActive]);

  // ✅ 역할 변경 시 완전 초기화
  const handleRoleReverse = useCallback(async () => {
    console.log("🔄 [ROLE] Reversing role – clearing active states");
    try {
      await voiceStopRecording();
      abortWhisper();
      if (autoTriggerRef.current) {
        clearTimeout(autoTriggerRef.current);
      }
    } catch (err) {
      console.warn("⚠️ [ROLE-RESET] cleanup error:", err);
    }

    waitForUserAckRef.current = false;
    setDialogState({
      step: 0,
      isUserTurn: false,
      isActive: false,
      isPaused: false,
      loadingSummary: false,
      isSpeaking: false,
    });
  }, []);

  /** Alert 직후 대화 일시정지 */
  const pauseForUserAck = async () => {
     bumpRun();
    waitForUserAckRef.current = true;

    // ✅ 복귀 중 자동재개 방지 + Whisper 차단
    resumeGuardRef.current = true;
    whisperAbortedRef.current = true;
    console.log("🛑 [PAUSE-FOR-ACK] Guarding pause state to block Whisper retries");

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
    if (resumeGuardRef.current) {
      console.log('⏸️ [RESUME BLOCKED] Guard active – waiting for popup close');
      return;
    }

    // ✅ Whisper 중단 플래그 해제
    resumeGuardRef.current = false;
    whisperAbortedRef.current = false;
    const plan = resumePlanRef.current;
    resumePlanRef.current = null;

    const wasUserTurn = dialogStateRef.current.isUserTurn;
    waitForUserAckRef.current = false;
    setDialogState(prev => ({ ...prev, isPaused: false, isActive: true }));

    console.log('▶️ [WAIT-ACK] Resuming after user confirmation');
    if (plan) {
      await scheduleNextTurn(plan.step, plan.userTurn);
      return;
    }
    // 과거 방식의 fallback (혹시 모를 엣지케이스)
    if (wasUserTurn) {
      try { await playBell('beep'); } catch {}
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
        if (!isMemorizationMode) {
          console.log('🎤 [START] 사용자부터 시작 - 자동 녹음');
          setTimeout(() => {
            startAutoRecording(userResponseDelay * 1000);
          }, 1000);
        } else {
          console.log('⏸️ [MEMO MODE] Manual start required');
        }
      } else {
        console.log('🤖 [START] AI부터 시작 - 대사 실행');
        setTimeout(() => {
          processDialogWithState();
        }, 500);
      }
      setTimeout(() => {
          isProcessingRef.current = false;
          setDialogState(prev => ({ ...prev, isActive: true }));
          console.log('🩵 [ROLE FIX] Force-reactivate dialog after role change');
      }, 800);
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
         if (!practiceMode && !isMemorizationMode) {
           console.log('🎤 [ROLE CHANGE] Triggering first recording');
           setTimeout(() => {
             startAutoRecording(userResponseDelay * 1000);
           }, 1000);
         } else {
           console.log('⏸️ [ROLE CHANGE] Skip auto-record (practice/memo mode active)');
         }
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
    console.log(`🤖 [DIALOG] Current role: ${isRoleReversed ? 'AI' : 'User'}, Step: ${dialogState.step}`);
 
    const st = dialogStateRef.current; 

    if (resumeGuardRef.current) {
      console.log('⏸️ [RESUME-GUARD] Popup open → skip processing');
      return;
    }
    if (whisperAbortedRef.current) {
      console.log('🚫 [WHISPER] Aborted state → skip processing');
      return;
    }

    if (waitForUserAckRef.current) {
      console.log('⏸️ [WAIT-ACK] Need user confirmation → skip processing');
      return;
    }

    if (!dialogState.isActive || dialogState.isPaused) {   // 모드전화 추가
      console.log("⏸️ [SKIP] Dialog is paused or inactive");
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
            onDone: () => resolve(undefined),
            onStopped: () => resolve(undefined),
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
        await scheduleNextTurn(newStep, nextIsUserTurn);
      }
    } catch (err) {
       console.error('🔴 [DIALOG ERROR] Process error:', err);

    } finally {
       isProcessingRef.current = false;
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
       dialogStateRef.current.isPaused = true; // ✅ ref도 즉시 업데이트

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
    if (dialogState.isPaused || isPausedRef.current) {
      console.warn('🚫 [USER RESPONSE] Ignored because practice is paused');
      return;
    }

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
    //   isPaused: false,
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
       !resumeGuardRef.current &&          // ✅ 추가
       !whisperAbortedRef.current &&       // ✅ 추가
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
    pauseForUserAck,
    resumeAfterUserAck,
    setResumeGuard,
    setWhisperAborted,
     __bumpRun: bumpRun,
  };
}