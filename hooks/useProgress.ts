// useProgress.ts
import { useEffect } from "react";
import { AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL } from "../lib/api";

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

// ✅ 학습 시작 시 호출
export async function startProgress(topic: string, scene: string, level: string) {
  console.log("▶️ startProgress:", { topic, scene, level });
  await AsyncStorage.setItem(
    "progressStart",
    JSON.stringify({ topic, scene, level, startTime: Date.now() })
  );
}

// ✅ 앱 종료/백그라운드 시 저장
export async function flushProgress() {
  const saved = await AsyncStorage.getItem("progressStart");
  if (!saved) {
    console.log("ℹ️ flushProgress: 저장된 progress 없음");
    return;
  }
  const { topic, scene, level, startTime } = JSON.parse(saved);
  const minutes = Math.max(1, Math.round((Date.now() - startTime) / 60000));

  const token = await AsyncStorage.getItem("authToken");
  if (!token) {
    console.log("❌ flushProgress: 토큰 없음");
    return;
  }

  try {
    const url = `${API_BASE_URL}/api/progress/add`;
    console.log("📡 flushProgress 요청 URL:", url);
    console.log("📡 flushProgress 토큰:", token);
    console.log("📡 flushProgress payload:", { topic, scene, level, minutes });

    const res = await axios.post(url, { topic, scene, level, minutes }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("✅ flushProgress response:", res.data);
  } catch (err: any) {
    console.error("❌ flushProgress error", err?.message, err?.response?.data || err);
  } finally {
    await AsyncStorage.removeItem("progressStart");
  }
}
