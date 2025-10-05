import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../lib/api';

interface FeedbackState {
  hasFeedback: boolean;
  lastFeedbackDate: string | null;
  feedbackCount: number;
  setFeedbackAvailable: (hasFeedback: boolean) => void;
  updateFeedbackStats: () => void;
}

export const useFeedbackStore = create<FeedbackState>((set) => ({
  hasFeedback: false,
  lastFeedbackDate: null,
  feedbackCount: 0,
  setFeedbackAvailable: (hasFeedback) => set({ hasFeedback }),
  updateFeedbackStats: () => set((state) => ({
    hasFeedback: true,
    lastFeedbackDate: new Date().toISOString(),
    feedbackCount: state.feedbackCount + 1
  })),
}));

export async function saveFeedbackItem(newItem: any) {
  try {
    const key = 'feedbackHistory';
    const data = await AsyncStorage.getItem(key);
    const history = data ? JSON.parse(data) : [];

    const updated = [newItem, ...history].slice(0, 50);
    await AsyncStorage.setItem(key, JSON.stringify(updated));
    console.log('✅ 피드백 저장 완료 (총 개수):', updated.length);

    // ✅ 서버에도 저장
    const token = await AsyncStorage.getItem('authToken');
    await axios.post(`${API_BASE_URL}/api/feedback/upload`, { item: newItem }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('🌐 서버에 피드백 업로드 완료');
  } catch (err) {
    console.error('❌ 피드백 저장 실패:', err);
  }
}

export async function getFeedbackList(): Promise<any[]> {
  try {
    const data = await AsyncStorage.getItem('feedbackHistory');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('❌ 피드백 불러오기 실패:', err);
    return [];
  }
}

export async function syncFeedbackFromServer() {
  try {
    const token = await AsyncStorage.getItem('authToken');
    const res = await axios.get(`${API_BASE_URL}/api/feedback/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const list = res.data.items || [];
    const trimmed = list.slice(0, 50);

    await AsyncStorage.setItem('feedbackHistory', JSON.stringify(trimmed));
    console.log('🔄 서버에서 피드백 동기화 완료:', trimmed.length);
  } catch (err) {
    console.error('❌ 서버 피드백 동기화 실패:', err);
  }
}

