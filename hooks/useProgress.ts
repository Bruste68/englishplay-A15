// useProgress.ts
import { useEffect } from "react";
import { AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL } from "../lib/api";

type ProgressStart = {
  topic: string;
  scene: string | null;          // 실제 플레이된 씬 코드 (UI용)
  sceneForServer: string;        // 서버에 보낼 정규화된 씬 코드 (ex. *_1)
  level: string;
  startTime: number;
};

export function useAutoSaveProgress() {
  useEffect(() => {
    const sub = AppState.addEventListener("change", async (nextState) => {
      if (nextState === "background") {
        await flushProgress();
      }
    });
    return () => sub.remove();
  }, []);
}

// ✅ 서버가 허용하는 씬 코드로 정규화: *_1 로 강제
export function normalizeSceneForServer(scene: string | null, topic: string, level: string) {
  const base = `${topic}_${level}_1`;
  if (!scene) return base;

  // travel_intermediate_4 -> travel_intermediate_1
  const m = scene.match(/^(.+?)_(beginner|intermediate|advanced)_(\d+)$/);
  if (m) {
    return `${m[1]}_${m[2]}_1`;
  }
  // 형태가 다르면 안전하게 base 리턴
  return base;
}

// ✅ 학습 시작 시 호출 (UI 씬과 서버용 씬을 함께 저장)
export async function startProgress(topic: string, scene: string | null, level: string) {
  const sceneForServer = normalizeSceneForServer(scene, topic, level);

  const payload: ProgressStart = {
    topic,
    scene,
    sceneForServer,
    level,
    startTime: Date.now(),
  };

  console.log("▶️ startProgress:", { topic, scene: scene || null, level });
  await AsyncStorage.setItem("progressStart", JSON.stringify(payload));
}

// ✅ 앱 종료/백그라운드/세션 종료 시 저장
export async function flushProgress() {
  const saved = await AsyncStorage.getItem("progressStart");
  if (!saved) {
    console.log("ℹ️ flushProgress: 저장된 progress 없음");
    return;
  }

  const { topic, scene, sceneForServer, level, startTime } = JSON.parse(saved) as ProgressStart;
  const minutes = Math.max(1, Math.round((Date.now() - startTime) / 60000));

  const token = await AsyncStorage.getItem("authToken");
  if (!token) {
    console.log("❌ flushProgress: 토큰 없음");
    await AsyncStorage.removeItem("progressStart");
    return;
  }

  const url = `${API_BASE_URL}/api/progress/add`;
  const headers = { Authorization: `Bearer ${token}` };

  // 1차: 서버용 씬(sceneForServer)로 시도
  const primaryPayload = { topic, scene: sceneForServer || scene, level, minutes };

  try {
    console.log("📡 flushProgress 요청 URL:", url);
    console.log("📡 flushProgress 토큰:", token);
    console.log("📡 flushProgress payload:", primaryPayload);

    const res = await axios.post(url, primaryPayload, { headers });
    console.log("✅ flushProgress response:", res.data);
  } catch (err: any) {
    console.error("❌ flushProgress error", err?.message, err?.response?.data || err);

    // 2차: 혹시 sceneForServer가 비정상이라면 마지막 안전장치로 *_1 강제 재시도 (1회)
    if (err?.response?.status === 500) {
      const fallbackScene = normalizeSceneForServer(scene, topic, level);
      if (fallbackScene !== primaryPayload.scene) {
        try {
          console.warn("⚠️ flushProgress 500 → fallback 재시도:", fallbackScene);
          const res2 = await axios.post(url, { topic, scene: fallbackScene, level, minutes }, { headers });
          console.log("✅ flushProgress fallback response:", res2.data);
        } catch (err2: any) {
          console.error("❌ flushProgress fallback 실패", err2?.message, err2?.response?.data || err2);
        }
      }
    }
  } finally {
    // 다음 세션을 위해 항상 초기화
    await AsyncStorage.removeItem("progressStart");
  }
}
