// useProgress.ts
import { useEffect } from "react";
import { AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL } from "../lib/api";

// ✅ 안전한 URL 조인
function joinUrl(base: string, path: string) {
  const b = base.replace(/\/+$/, "");
  const p = path.replace(/^\/+/, "");
  return `${b}/${p}`;
}

/**
 * ✅ startProgress
 * - 호출 형태 둘 다 지원:
 *   1) startProgress({ topic, scene, level })
 *   2) startProgress(topic, scene, level)
 * - 시작 시각을 기록해서 flushProgress에서 분 단위를 계산
 */
export async function startProgress(
  arg1:
    | { topic: string; scene?: string | null; level: string }
    | string,
  arg2?: string | null,
  arg3?: string
) {
  try {
    let topic: string;
    let scene: string | null | undefined;
    let level: string;

    if (typeof arg1 === "string") {
      // 포지셔널: (topic, scene, level)
      topic = arg1;
      scene = arg2 ?? null;
      level = arg3 ?? "beginner";
    } else {
      // 객체형: ({ topic, scene, level })
      topic = arg1.topic;
      scene = arg1.scene ?? null;
      level = arg1.level;
    }

    // 일관성: 0-패딩 제거
    const normalizedScene =
      typeof scene === "string" ? scene.replace(/_0(\d)$/, "_$1") : scene;

    const payload = {
      topic,
      scene: normalizedScene,
      level,
      startTime: Date.now(),
    };

    await AsyncStorage.setItem("progressStart", JSON.stringify(payload));
    console.log("▶️ startProgress:", JSON.stringify(payload));
  } catch (e) {
    console.error("❌ startProgress error", (e as any)?.message || e);
  }
}

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

export async function flushProgress() {
  try {
    const startJson = await AsyncStorage.getItem("progressStart");
    if (!startJson) return;

    const { topic, scene, level, startTime } = JSON.parse(startJson);
    const minutes = Math.max(1, Math.round((Date.now() - startTime) / 60000));

    const token = await AsyncStorage.getItem("authToken");

    // ✅ 0-패딩 제거: 서버 FK와 동일하게 보냄
    const formattedScene = scene;

    if (!token) {
      console.log("❌ flushProgress: 토큰 없음");
      return;
    }

    // ✅ /api 중복 제거
    const url = joinUrl(API_BASE_URL, "/api/progress/add");

    console.log("📡 flushProgress 요청 URL:", url);
    console.log("📡 flushProgress 토큰:", token);
    console.log("📡 flushProgress payload:", {
      topic,
      scene: formattedScene,
      level,
      minutes,
    });

    const res = await axios.post(
      url,
      { topic, scene: formattedScene, level, minutes },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log("✅ flushProgress response:", res.data);
  } catch (err: any) {
    console.error(
      "❌ flushProgress error",
      err?.message,
      err?.response?.data || err
    );
  } finally {
    // 한 세션 1회 기록이 목적이면 유지, 다회 누적이 필요하면 제거
    await AsyncStorage.removeItem("progressStart");
  }
}
