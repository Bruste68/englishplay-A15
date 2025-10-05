import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../lib/env'; // ✅ 이 줄만 변경

export interface User {
  id: number;
  email: string;
  name?: string;
  trialExpired?: boolean;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          const response = await axios.get(`${BASE_URL}/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.warn('🛑 인증 실패:', error);
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('currentUser');
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('currentUser');
    setUser(null);
  };

  return {
    user,
    loading,
    isLoggedIn: !!user,
    logout,
  };
}
