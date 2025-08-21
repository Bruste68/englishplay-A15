import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { Alert, Platform } from 'react-native';
import { useEffect } from 'react';

WebBrowser.maybeCompleteAuthSession();

const googleDiscovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
};

const SUPPORTED_PROVIDERS = ['google', 'facebook', 'naver', 'yahoo', 'kakao', 'line'];

export const useSocialLogin = () => {
  const router = useRouter();

  // ✅ Android용 스킴 기반 리디렉션 URI
  const redirectUri = makeRedirectUri({
     native: 'com.googleusercontent.apps.925681825495-v900v134g50u5dpd3rqvts8is3m9ifkl:/oauth2redirect',
  });

  console.log('🧪 Final redirectUri:', redirectUri);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID!,
      scopes: ['profile', 'email'],
      usePKCE: true,
      redirectUri,
      extraParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
    googleDiscovery
  );

  useEffect(() => {
    if (!response) {
      console.log('🟡 [OAuth] 아직 응답 없음 (response is null)');
    } else if (response.type === 'success') {
      console.log('🟢 [OAuth] 성공 응답:', response.params);
    } else if (response.type === 'error') {
      console.error('🔴 [OAuth] 오류 발생:', response.error);
    } else {
      console.log('⚪ [OAuth] 기타 응답 타입:', response);
    }

    if (response?.type === 'success' && response.params?.code) {
      (async () => {
        try {
          const res = await fetch(`${process.env.API_BASE_URL}/api/oauth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              code: response.params.code,
              client: 'web',
              redirectUri,
            }),
          });

          const { token, user } = await res.json();
          await AsyncStorage.setItem('authToken', token);
          await AsyncStorage.setItem('currentUser', JSON.stringify(user));
          router.replace(user.trialExpired ? '/purchase' : '/whisper-download');
        } catch (err) {
          console.error('❌ Google OAuth 실패:', err);
          Alert.alert('로그인 실패', '인증 중 문제가 발생했습니다.');
        }
      })();
    }
  }, [response]);

  const loginWithSNS = async (providerId: string) => {
    console.log('🔘 loginWithSNS 시작됨:', providerId);
    try {
      if (!SUPPORTED_PROVIDERS.includes(providerId)) {
        throw new Error(`지원하지 않는 공급자: ${providerId}`);
      }

      if (providerId === 'google') {
        await promptAsync();
      } else {
        const authUrl = `${process.env.API_BASE_URL}/oauth/${providerId}?client=app`;
        const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri!);
        console.log('🧩 promptAsync 결과:', result);

        if (result.type === 'success') {
          const parsed = Linking.parse(result.url);
          const token = parsed.queryParams?.access_token;

          if (!token || typeof token !== 'string') throw new Error('토큰이 없습니다');
          await AsyncStorage.setItem('authToken', token);

          await AsyncStorage.setItem('authToken', token);
          const res = await fetch(`${process.env.API_BASE_URL}/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!res.ok) throw new Error('사용자 정보 요청 실패');
          const user = await res.json();

          await AsyncStorage.setItem('currentUser', JSON.stringify(user));
          router.replace(user.trialExpired ? '/purchase' : '/whisper-download');
        }
      }
    } catch (err) {
      console.error('❌ SNS 로그인 실패:', err);
      const errorMessage = err instanceof Error ? err.message : 'SNS 로그인 중 문제가 발생했습니다.';
      Alert.alert('로그인 실패', errorMessage);
    }
  };

  return { loginWithSNS };
};
