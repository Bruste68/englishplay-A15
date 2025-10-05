// utils/logout.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Router } from 'expo-router';

export async function logout(router: Router) {
  try {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('currentUser');
    await AsyncStorage.removeItem('premiumActive');
    await AsyncStorage.removeItem('canUseWhisper');
    await AsyncStorage.removeItem('rememberedUserId');

    router.replace('/screens/LoginScreen');
  } catch (e) {
    console.warn('로그아웃 실패:', e);
  }
}
