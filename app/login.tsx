import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,
  Image, ActivityIndicator, BackHandler, Keyboard
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';
import * as SecureStore from 'expo-secure-store';
import uuid from 'react-native-uuid';

async function getDeviceId(): Promise<string> {
  try {
    let id = await SecureStore.getItemAsync('device-id');
    if (!id) {
      id = uuid.v4() as string;
      await SecureStore.setItemAsync('device-id', id);
    }
    return id;
  } catch {
    return 'unknown-' + Math.random().toString(36).substring(2, 10);
  }
}

export default function LoginScreen() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ 마운트 시 아이디/로그인 상태 복원
  useEffect(() => {
    const init = async () => {
      try {
        const [savedId, currentUserStr, authToken] = await Promise.all([
          AsyncStorage.getItem('rememberedUserId'),
          AsyncStorage.getItem('currentUser'),
          AsyncStorage.getItem('authToken'),
        ]);

        console.log("🔎 [LoginScreen.init]");
        console.log(" savedId:", savedId);
        console.log(" currentUserStr:", currentUserStr);
        console.log(" authToken:", authToken);

        setIsLoggedIn(!!authToken);

        if (savedId) {
          setUserId(savedId);
          setRememberMe(true);
          return;
        }

        if (currentUserStr) {
          try {
            const currentUser = JSON.parse(currentUserStr);
            if (currentUser?.userId) {
              setUserId(currentUser.userId);
              return;
            }
          } catch (err) {
            console.warn("currentUser 파싱 실패:", err);
          }
        }
      } catch (error) {
        console.error('Init error:', error);
      }
    };
    init();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => subscription.remove();
    }, [])
  );

  const localizedText = {
    trialExpiredTitle: {
      ko: '체험 또는 이용권 만료',
      en: 'Trial or subscription expired',
      zh: '试用或订阅已过期',
      ja: '体験または利用期間が終了しました',
      vi: 'Hết hạn dùng thử hoặc gói dịch vụ',
    },
    premiumExpiredMessage: {
      ko: '사용 기간이 만료되었습니다. 프리미엄 결제를 통해 계속 이용할 수 있습니다.',
      en: 'Your access has expired. Please purchase premium to continue.',
      zh: '使用期限已过，请购买高级服务以继续使用。',
      ja: '利用期間が終了しました。引き続き利用するにはプレミアムをご購入ください。',
      vi: 'Thời gian sử dụng đã hết. Vui lòng mua gói Premium để tiếp tục.',
    },
    purchaseNow: { ko: '지금 구매', en: 'Purchase Now', zh: '立即购买', ja: '今すぐ購入', vi: 'Mua ngay' },
    cancelPurchase: { ko: '취소', en: 'Cancel', zh: '取消', ja: 'キャンセル', vi: 'Hủy' },
    deviceAlreadyRegistered: {
      ko: '이 디바이스는 이미 다른 계정에 등록되어 있습니다.',
      en: 'This device is already registered to another account.',
      zh: '该设备已注册到其他帐户。',
      ja: 'このデバイスはすでに別のアカウントに登録されています。',
      vi: 'Thiết bị này đã được đăng ký cho tài khoản khác.',
    },
    premiumRequired: {
      ko: '프리미엄 이용권이 필요합니다.',
      en: 'Premium subscription is required.',
      zh: '需要高级订阅。',
      ja: 'プレミアムの購読が必要です。',
      vi: 'Cần có gói Premium.',
    },
    goToPurchase: {
      ko: '프리미엄 구매하기',
      en: 'Go to Purchase',
      zh: '前往购买',
      ja: '購入画面へ',
      vi: 'Mua gói Premium',
    },
    invalidUserId: {
      ko: '아이디는 영문과 숫자만 입력 가능합니다.',
      en: 'User ID must contain only letters and numbers.',
      zh: '用户ID只能包含字母和数字。',
      ja: 'ユーザーIDは英数字のみ入力できます。',
      vi: 'ID chỉ được phép chứa chữ cái và số.',
    },
    invalidUserIdTitle: {
      ko: '아이디 입력 오류',
      en: 'Invalid User ID',
      zh: '用户ID无效',
      ja: '無効なユーザーID',
      vi: 'ID không hợp lệ',
    },
    sessionConflict: {
      ko: '다른 기기에서 로그인되어 세션이 만료되었습니다.',
      en: 'Logged in on another device. Session expired.',
      zh: '已在其他设备登录，当前会话已过期。',
      ja: '別のデバイスでログインされ、セッションが終了しました。',
      vi: 'Đã đăng nhập trên thiết bị khác. Phiên này đã hết hạn.',
    },
  };

  const getLocalized = (obj: Record<string, string>): string => {
    if (obj[language]) return obj[language];
    if (language.startsWith('zh') && obj['zh']) return obj['zh'];
    return obj['en'];
  };

  /** ✅ 구매화면으로 이동 */
  const goPurchase = (
    reason: 'trial_expired' | 'device_conflict' | 'premium_required',
    redirectTo?: string,
  ) => {
    router.push({
      pathname: '/purchase',
      params: { reason, ...(redirectTo ? { redirectTo } : {}) },
    });
  };

  /** ✅ 로그인 처리 */
  const handleLogin = async () => {
    if (!userId.trim()) {
      Alert.alert(t.error, t.enterId);
      return;
    }

    const deviceId = await getDeviceId();
    console.log("📱 디바이스 ID:", deviceId);
    setIsLoading(true);

    try {
      console.log("🌍 로그인 요청 시작:", API_BASE_URL + "/login");
      const response = await axios.post(`${API_BASE_URL}/api/login`, {
        username: userId.trim(),
        deviceId,
      });

      console.log("✅ 로그인 응답 전체:", response.data);
      const { token, user, premiumRequired, reason } = response.data;

      const uid = user.userId || user.id;
      setUserId(uid);

      if (!token) {
        Alert.alert("에러", "서버 응답에 토큰이 없습니다.");
        return;
      }

      // ✅ 토큰/유저정보 저장
      await Promise.all([
        AsyncStorage.setItem('authToken', token),
        AsyncStorage.setItem('currentUser', JSON.stringify(user)),
        AsyncStorage.setItem('language', language),
        AsyncStorage.setItem('preferredLang', user.language || language),
      ]);

      if (rememberMe) {
        await AsyncStorage.setItem('rememberedUserId', uid);
      } else {
        await AsyncStorage.removeItem('rememberedUserId');
      }

      // ✅ premiumActive 동기화 추가
      if (user.isPremium) {
        await AsyncStorage.setItem('premiumActive', 'true');
      } else {
        await AsyncStorage.removeItem('premiumActive');
      }

      const trialExpired = user.trialExpired ?? false;
      const isPremium = user.isPremium ?? false;
      const isAdmin = user.isAdmin ?? false;

      setIsLoggedIn(true);

      if (premiumRequired) {
        if (reason === 'trial_expired') {
          Alert.alert(
            getLocalized(localizedText.trialExpiredTitle),
            getLocalized(localizedText.premiumExpiredMessage),
            [
              { text: getLocalized(localizedText.cancelPurchase), style: 'cancel' },
              { text: getLocalized(localizedText.purchaseNow), onPress: () => goPurchase('trial_expired') },
            ]
          );
          return;
        }
        if (reason === 'device_conflict') {
          Alert.alert(
            getLocalized(localizedText.deviceAlreadyRegistered),
            getLocalized(localizedText.premiumRequired),
            [
              { text: getLocalized(localizedText.goToPurchase), onPress: () => goPurchase('device_conflict') },
              { text: getLocalized(localizedText.cancelPurchase), style: 'cancel' },
            ]
          );
          return;
        }
      }

      if (isAdmin || isPremium) {
        router.replace('/screens/TopicSelectScreen');
        return;
      }

      if (!trialExpired) {
        router.replace('/screens/TopicSelectScreen');
        return;
      }

      Alert.alert(
        getLocalized(localizedText.trialExpiredTitle),
        getLocalized(localizedText.premiumExpiredMessage),
        [
          { text: getLocalized(localizedText.cancelPurchase), style: 'cancel' },
          { text: getLocalized(localizedText.purchaseNow), onPress: () => goPurchase('trial_expired') },
        ]
      );
    } catch (error: any) {
      Keyboard.dismiss();
      const status = error?.response?.status;
      const data = error?.response?.data || {};
      const code: string = data?.code || '';
      const msg: string | undefined = data?.message;

      if (status === 401 && msg && (msg.includes('세션') || msg.includes('Session'))) {
        Alert.alert(getLocalized(localizedText.sessionConflict));
        await handleLogout();
        router.replace('/login');
        return;
      }

      if (status === 403 && (code === 'DEVICE_CONFLICT' || code === 'TRIAL_EXPIRED' || code === 'PREMIUM_REQUIRED')) {
        if (code === 'DEVICE_CONFLICT') {
          Alert.alert(
            getLocalized(localizedText.deviceAlreadyRegistered),
            `${getLocalized(localizedText.premiumRequired)}\n\n(${t.enterId}: ${data?.existingUserId ?? ''})`,
            [
              { text: getLocalized(localizedText.goToPurchase), onPress: () => goPurchase('device_conflict', data?.redirectTo || undefined) },
              { text: getLocalized(localizedText.cancelPurchase), style: 'cancel' },
            ]
          );
          return;
        }

        Alert.alert(
          getLocalized(localizedText.trialExpiredTitle),
          msg || getLocalized(localizedText.premiumExpiredMessage),
          [
            { text: getLocalized(localizedText.cancelPurchase), style: 'cancel' },
            { text: getLocalized(localizedText.purchaseNow), onPress: () => goPurchase(code === 'TRIAL_EXPIRED' ? 'trial_expired' : 'premium_required', data?.redirectTo || undefined) },
          ]
        );
        return;
      }

      let finalMessage = typeof msg === 'string' ? msg : t.tryAgain;
      try {
        const parsed = JSON.parse(msg as any);
        if (parsed?.message) finalMessage = parsed.message;
      } catch {}
      Alert.alert(t.loginFailed, finalMessage);
    } finally {
      setIsLoading(false);
    }
  };

  /** ✅ 로그아웃 처리 */
  const handleLogout = async () => {
    try {
      await Promise.all([
        AsyncStorage.removeItem('authToken'),
        AsyncStorage.removeItem('premiumActive'),
        AsyncStorage.removeItem('canUseWhisper'),
        AsyncStorage.removeItem('currentUser'),
      ]);

      if (rememberMe && userId) {
        await AsyncStorage.setItem('rememberedUserId', userId);
      } else {
        await AsyncStorage.removeItem('rememberedUserId');
      }

      setUserId('');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const goToLanguage = () => router.push('/language');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}> SamSpeak </Text>

      <TextInput
        style={styles.input}
        placeholder={t.enterId}
        placeholderTextColor="#999"
        value={userId}
        onChangeText={(text) => {
          const filtered = text.replace(/[^a-zA-Z0-9]/g, '');
          if (text !== filtered) {
            Alert.alert(
              getLocalized(localizedText.invalidUserIdTitle),
              getLocalized(localizedText.invalidUserId)
            );
          }
          setUserId(filtered);
        }}
        autoCapitalize="none"
        keyboardAppearance="light"
        editable={!isLoggedIn}
      />

      {isLoggedIn ? (
        <TouchableOpacity style={[styles.loginButton, { backgroundColor: 'red' }]} onPress={handleLogout}>
          <Text style={styles.loginButtonText}>{t.logout || '로그아웃'}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="white" /> : <Text style={styles.loginButtonText}>{t.login}</Text>}
        </TouchableOpacity>
      )}

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkbox}>
          {rememberMe && <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>✔</Text>}
        </TouchableOpacity>
        <Text onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxLabel}>
          {t.rememberId || '아이디 기억하기'}
        </Text>
      </View>

      <Text style={styles.causion}>Visit http://samspeakgo.com for instructions</Text>
      <Text style={styles.phrase}> Just do it! </Text>
      <Text style={styles.phrase}> You can make it! </Text>

      <TouchableOpacity style={styles.footerButton} onPress={goToLanguage}>
        <View style={styles.footerButtonContent}>
          <Text style={styles.footerText}>← {t.backToLanguage || 'Back'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'center', backgroundColor: '#fff' },
  logoContainer: { justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#3e3e3e', marginBottom: 80, textAlign: 'center' },
  phrase: { fontSize: 23, fontWeight: 'bold', color: '#3e3e3e', marginBottom: 5, textAlign: 'center' },
  causion: { fontSize: 16, fontWeight: 'bold', color: '#3e3e3e', marginBottom: 35, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 30, backgroundColor: '#fff', color: '#000' },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 60 },
  checkbox: { width: 24, height: 24, borderRadius: 4, borderWidth: 1, borderColor: '#ccc', marginRight: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  checkboxLabel: { fontSize: 16, color: '#333' },
  loginButton: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, marginBottom: 20 },
  loginButtonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  footerButton: { backgroundColor: '#ddd', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, alignSelf: 'flex-end', marginTop: 40 },
  footerButtonContent: { flexDirection: 'row', alignItems: 'center' },
  footerText: { color: '#333', fontSize: 14, fontWeight: 'bold' },
});
