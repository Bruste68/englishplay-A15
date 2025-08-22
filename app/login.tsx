// login.tsx
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

/** ─────────────────────────────────────────────────────────
 *  유틸
 *  ──────────────────────────────────────────────────────── */
const toBool = (v: any): boolean =>
  v === true || v === 'true' || v === 1 || v === '1';

const parseDate = (raw: any): Date | null => {
  if (!raw && raw !== 0) return null;
  if (raw instanceof Date) return isNaN(raw.getTime()) ? null : raw;

  if (typeof raw === 'number' || (typeof raw === 'string' && /^\d+$/.test(raw.trim()))) {
    const n = Number(raw);
    if (Number.isNaN(n)) return null;
    const ms = n < 1e12 ? n * 1000 : n; // sec -> ms
    const d = new Date(ms);
    return isNaN(d.getTime()) ? null : d;
  }

  if (typeof raw === 'string' && ['null', 'undefined'].includes(raw.trim().toLowerCase())) {
    return null;
  }

  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d;
};

export default function LoginScreen() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const init = async () => {
      const savedId = await AsyncStorage.getItem('rememberedUserId');
      if (savedId) {
        setUserId(savedId);
        setRememberMe(true);
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

      return () => subscription.remove();  // ✅ 수정
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
  };
 // const getLocalized = (obj: Record<string, string>): string => obj[language] || obj['en'];
  const getLocalized = (obj: Record<string, string>): string => {
    if (obj[language]) return obj[language];

    // 중국어 계열은 모두 zh 로 매핑 (간체만 지원)
    if (language.startsWith('zh')) {
      if (obj['zh']) return obj['zh'];
    }

    return obj['en']; // 기본 영어 fallback
  };

  /** ✅ 공용: 구매화면으로 강제 이동 */
  const goPurchase = (
    reason: 'trial_expired' | 'device_conflict' | 'premium_required',
    redirectTo?: string
  ) => {
    router.push({
      pathname: '/purchase',
      params: { reason, ...(redirectTo ? { redirectTo } : {}) },
    });
  };

  const handleLogin = async () => {
    if (!userId.trim()) {
      Alert.alert(t.error, t.enterId);
      return;
    }

    const deviceId = await getDeviceId();
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/login`, {
        username: userId.trim(),
        deviceId,
      });

      const { token, user, premiumRequired, redirectTo } = response.data;

      await AsyncStorage.setItem('authToken', token);
      await AsyncStorage.setItem('currentUser', JSON.stringify(user));
      await AsyncStorage.setItem('language', language);
      await AsyncStorage.setItem('preferredLang', user.language || language);

      if (rememberMe) {
        await AsyncStorage.setItem('rememberedUserId', userId.trim());
      } else {
        await AsyncStorage.removeItem('rememberedUserId');
      }

      // ─────────────────────────────────────
      const nowMs = Date.now();
      const TRIAL_DAYS = 3;

      const isAdmin = toBool(user?.isAdmin ?? user?.is_admin);
      const trialStart = parseDate(
        user?.trialStartAt ?? user?.trial_start_at ?? user?.trial_started_at
      );

      let trialExpired = true;
      if (trialStart) {
        const diffDays = Math.max(0, nowMs - trialStart.getTime()) / 86400000;
        trialExpired = diffDays > TRIAL_DAYS;
      }

      const premiumExpiresAt = parseDate(
        user?.premiumExpiresAt ??
        user?.premium_expires_at ??
        user?.premiumUntil ??
        user?.subscriptionExpiresAt
      );

      let isPremium = false;
      if (premiumExpiresAt) {
        const leftMs = premiumExpiresAt.getTime() - nowMs;
        isPremium = leftMs > 60 * 1000; // 60초 스큐 허용
      }
      // ─────────────────────────────────────

      if (isAdmin || isPremium) {
        router.replace('/screens/TopicSelectScreen');
        return;
      }

      if (!trialExpired) {
        router.replace('/screens/TopicSelectScreen');
        return;
      }

      if (premiumRequired) {
        Alert.alert(
          getLocalized(localizedText.trialExpiredTitle),
          getLocalized(localizedText.premiumExpiredMessage),
          [
            { text: getLocalized(localizedText.cancelPurchase), style: 'cancel' },
            { text: getLocalized(localizedText.purchaseNow), onPress: () => goPurchase('premium_required', redirectTo) },
          ]
        );
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
      const status = error?.response?.status;
      const data = error?.response?.data || {};
      const code: string = data?.code || '';
      const msg: string | undefined = data?.message;

      if (status === 403 && (code === 'DEVICE_CONFLICT' || code === 'TRIAL_EXPIRED' || code === 'PREMIUM_REQUIRED')) {
        Keyboard.dismiss();

        if (code === 'DEVICE_CONFLICT') {
          Alert.alert(
            getLocalized(localizedText.deviceAlreadyRegistered),
            `${getLocalized(localizedText.premiumRequired)}\n\nID: ${data?.existingUserId ?? ''}`,
            [
              { text: getLocalized(localizedText.goToPurchase), onPress: () => goPurchase('device_conflict', data?.redirectTo) },
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
            { text: getLocalized(localizedText.purchaseNow), onPress: () => goPurchase(code === 'TRIAL_EXPIRED' ? 'trial_expired' : 'premium_required', data?.redirectTo) },
          ]
        );
        return;
      }

      Keyboard.dismiss();
      const rawMsg = msg;
      let finalMessage = typeof rawMsg === 'string' ? rawMsg : t.tryAgain;
      try {
        const parsed = JSON.parse(rawMsg as any);
        if (parsed?.message) finalMessage = parsed.message;
      } catch {}
      Alert.alert(t.loginFailed, finalMessage);
    } finally {
      setIsLoading(false);
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
        onChangeText={setUserId}
        autoCapitalize="none"
        keyboardAppearance="light"
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color="white" /> : <Text style={styles.loginButtonText}>{t.login}</Text>}
      </TouchableOpacity>

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
