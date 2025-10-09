import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,
  Image, ActivityIndicator, BackHandler, Keyboard,  Modal, Dimensions, Linking
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';
import * as SecureStore from 'expo-secure-store';
import uuid from 'react-native-uuid';
import { Video } from "expo-av";

// 서버 응답 타입 예시
interface LoginSuccessDto {
  token: string;
  user: any;
  isPremiumActive: boolean;
  isPremiumExpired: boolean;
  isTrialActive: boolean;
  isTrialExpired: boolean;
  isNewAccount: boolean;
  deviceHasAnyAccount: boolean;
  deviceHasPremiumAccount: boolean;
  accountActiveOnOtherDevice?: boolean;
  accountDeviceCount?: number;
}

type PurchaseReason =
  | 'trial_expired'
  | 'trial_device_conflict'
  | 'premium_expired'
  | 'nonpremium_existing'
  | 'nonpremium_new'
  | 'premium_required'
  | 'device_conflict'
  | 'device_limit';

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
  const [manualVisible, setManualVisible] = useState(false);
  const [manualType, setManualType] = useState<"pdf" | "video" | null>(null);

  // ✅ 마운트 시 로그인 상태 복원
  useEffect(() => {
    const init = async () => {
      try {
        const [savedId, currentUserStr, authToken] = await Promise.all([
          AsyncStorage.getItem('rememberedUserId'),
          AsyncStorage.getItem('currentUser'),
          AsyncStorage.getItem('authToken'),
        ]);

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
      // ✅ 로그인 화면 진입 시 무조건 로그아웃
      handleLogout();

      const onBackPress = () => {
        // 👉 Login → 언어선택 화면(index)으로
        router.replace('/language');
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      // ✅ 프리미엄 상태 동기화
      const syncPremium = async () => {
        try {
          const authToken = await AsyncStorage.getItem('authToken');
          if (!authToken) return;

          const res = await axios.get(`${API_BASE_URL}/api/purchase/status`, {
            headers: { Authorization: `Bearer ${authToken}` },
          });

          if (res.data?.active) {
            await AsyncStorage.setItem('premiumActive', 'true');
            setIsLoggedIn(true);
          } else {
            await AsyncStorage.removeItem('premiumActive');
          }
        } catch (err) {
          console.warn("❌ premiumActive 동기화 실패:", err);
        }
      };

      syncPremium();

      return () => subscription.remove();
    }, [])
  );

  // ✅ 다국어 텍스트 모음
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
    deviceLimitExceeded: {
      ko: '이 계정은 10대 이상의 기기에 연결되어 있습니다. 프리미엄을 구매해야 계속 사용할 수 있습니다.',
      en: 'This account is connected to more than 10 devices. Please purchase premium to continue.',
      zh: '该账户已连接超过10台设备。请购买高级服务以继续使用。',
      ja: 'このアカウントは10台以上のデバイスに接続されています。プレミアムを購入してください。',
      vi: 'Tài khoản này đã được kết nối với hơn 10 thiết bị. Vui lòng mua Premium để tiếp tục.',
    },
    videoManual: {
      ko: "🎬 PDF 매뉴얼",
      en: "🎬 PDF Manual",
      zh: "🎬 PDF手册",
      ja: "🎬 PDFマニュアル",
      vi: "🎬 Hướng dẫn PDF",
    },
    close: {
      ko: "닫기",
      zh: "关闭",
      ja: "閉じる",
      vi: "Đóng",
      en: "Close",
    }
  };

  const getLocalized = (obj: Record<string, string>): string => {
    if (obj[language]) return obj[language];
    if (language.startsWith('zh') && obj['zh']) return obj['zh'];
    return obj['en'];
  };

  const goPurchase = (reason: PurchaseReason, redirectTo?: string) => {
    router.push({
      pathname: '/purchase',
      params: { reason, ...(redirectTo ? { redirectTo } : {}) },
    });
  };

  // ✅ 로그인 처리
  const handleLogin = async () => {
    if (!userId.trim()) {
      Alert.alert(getLocalized(localizedText.invalidUserIdTitle), getLocalized(localizedText.invalidUserId));
      return;
    }

    const deviceId = await getDeviceId();
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/login`, {
        username: userId.trim(),
        deviceId,
        platform: 'app',
      });

      console.log("📡 Login 요청 URL:", `${API_BASE_URL}/api/login`);
      console.log("📡 Login response:", response.data);

      const { token, user, reason } = response.data;
      console.log("📡 Login token:", token);

      const uid = user.userId || user.id;
      setUserId(uid);

      if (!token) {
        Alert.alert("에러", "서버 응답에 토큰이 없습니다.");
        return;
      }
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

      if (response?.data?.isPremiumActive) {
        await AsyncStorage.setItem('premiumActive', 'true');
      } else {
        await AsyncStorage.removeItem('premiumActive');
      }

      setIsLoggedIn(true);

      // ✅ 로그인 성공 후 정책 처리
      await handleLoginSuccess(response.data);

    } catch (error: any) {
      Keyboard.dismiss();
      const status = error?.response?.status;
      const data = error?.response?.data || {};
      let msg: string = typeof data?.message === 'string' ? data.message : '';

      if (status === 401 && msg && (msg.includes('세션') || msg.includes('Session'))) {
        Alert.alert(getLocalized(localizedText.sessionConflict));
        await handleLogout();
        router.replace('/login');
        return;
      }

      if (!msg) msg = t.tryAgain;
      Alert.alert(t.loginFailed, msg);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ 로그인 성공 직후: 정책 분기
  const handleLoginSuccess = async (data: any) => {
    const s = {
      isAdmin:            !!data?.user?.is_admin,
      isPremiumActive:    !!data?.isPremiumActive,
      isPremiumExpired:   !!data?.isPremiumExpired,
      isTrialActive:      !!data?.isTrialActive,
      isTrialExpired:     !!data?.isTrialExpired,
      isNewAccount:       !!data?.isNewAccount,
      deviceHasAnyAccount: !!data?.deviceHasAnyAccount,
      accountDeviceCount:  data?.accountDeviceCount || 0,
      reason:              data?.reason || null,
    };

    console.log("🧭 login decision inputs:", s);

    const gotoTopic = (note?: string) => {
      if (note) console.log("➡️ Topic 진입:", note);
      router.replace("/screens/TopicSelectScreen");
    };

    // ✅ 0. 관리자 무조건 진입
    if (s.isAdmin) return gotoTopic("admin → unrestricted access");

    // ✅ 1. 백엔드 reason 기반 분기
    switch (s.reason) {
      case "device_limit":
        return goPurchase("device_limit");

      case "premium_expired":
        return goPurchase("premium_expired");

      case "trial_expired":
        return goPurchase("trial_expired");

      case "nonpremium_existing":
        return goPurchase("nonpremium_existing");

      case "nonpremium_new":
        Alert.alert(
          "체험 시작",
          "체험을 시작합니다. 앞으로 3일간 무료로 체험하실 수 있습니다.",
          [{ text: "확인", onPress: () => gotoTopic("newAccount or webNoTrial → trial started") }]
        );
        return;

      case "device_conflict":
        return goPurchase("device_conflict");
    }

    // ✅ 2. 기본 플로우 (reason이 null인 경우)
    if (!s.deviceHasAnyAccount) {
      if (s.isPremiumActive) return gotoTopic("premiumActive / empty");
      if (s.isTrialActive)   return gotoTopic("trialActive / empty");
    } else {
      if (s.isPremiumActive) return gotoTopic("premiumActive / occupied → rebind");
      if (s.isTrialActive)   return gotoTopic("trialActive / occupied → rebind");
    }

    // fallback
    return goPurchase("premium_required");
  };

  const handleLogout = async () => {
    try {
      await Promise.all([
        AsyncStorage.removeItem('authToken'),
        AsyncStorage.removeItem('premiumActive'),
        AsyncStorage.removeItem('canUseWhisper'),
        AsyncStorage.removeItem('currentUser'),
      ]);

      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const goToLanguage = () => router.push('/language');

  // ✅ 매뉴얼 (Video: 서버 URL 사용)
const manuals: Record<string, { uri: string }> = {
  ko: { uri: "https://samspeakgo.com/assets/manual_ko.pdf" },
  en: { uri: "https://samspeakgo.com/assets/manual_en.pdf" },
  zh: { uri: "https://samspeakgo.com/assets/manual_zh.pdf" },
  ja: { uri: "https://samspeakgo.com/assets/manual_ja.pdf" },
  vi: { uri: "https://samspeakgo.com/assets/manual_vi.pdf" },
};

const openPdfManual = () => {
  const manual = manuals[language];
  if (manual) {
    Linking.openURL(manual.uri);
  } else {
    Alert.alert("Error", "Manual not available in this language");
  }
};

  const openVideoManual = () => {
    setManualType("video");
    setManualVisible(true);
  };

  const getCloseText = () => {
    switch (language) {
      case "ko":
        return "닫기";
      case "zh":
        return "关闭";
      case "ja":
        return "閉じる";
      case "vi":
        return "Đóng";
      default:
        return "Close";
    }
  };

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

      {/* pdf 버튼 */}
      <TouchableOpacity
        style={styles.manualButton}
        onPress={openPdfManual}
      >
        <Text style={styles.manualButtonText}>
           {getLocalized(localizedText.videoManual).replace("Video", "PDF")}
        </Text>
      </TouchableOpacity>


      {/* 동영상 모달 */}
      <Modal
        visible={manualVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setManualVisible(false)}
      >
        <View style={styles.modalContainer}>
          {manualType === "video" && (
            <Video
              source={manuals[language]} 
              style={styles.video}
              useNativeControls
              resizeMode="contain"
              shouldPlay
            />
          )}

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setManualVisible(false)}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {getCloseText()}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* 고객센터 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.dashboard.support}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:bruste68@gmail.com")}
        >
          <Text style={styles.link}>{t.dashboard.emailSupport}</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>{t.dashboard.voice}</Text>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'center', backgroundColor: '#fff' },
  logoContainer: { justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#3e3e3e', marginBottom: 60, textAlign: 'center' },
  phrase: { fontSize: 23, fontWeight: 'bold', color: '#3e3e3e', marginBottom: 5, textAlign: 'center' },
  causion: { fontSize: 16, fontWeight: 'bold', color: '#3e3e3e', marginBottom: 35, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15, backgroundColor: '#fff', color: '#000' },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkbox: { width: 24, height: 24, borderRadius: 4, borderWidth: 1, borderColor: '#ccc', marginRight: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  checkboxLabel: { fontSize: 16, color: '#333' },
  loginButton: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, marginBottom: 15 },
  loginButtonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  footerButton: { backgroundColor: '#ddd', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, alignSelf: 'flex-end', marginTop: 50 },
  footerButtonContent: { flexDirection: 'row', alignItems: 'center' },
  footerText: { color: '#333', fontSize: 14, fontWeight: 'bold' },
  manualButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 60,
    alignSelf: "center",
  },
  manualButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  video: { width: width * 0.9, height: height * 0.7 },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  section: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 3,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 10, color: "#111" },
  link: { color: "#007AFF", fontSize: 15, marginBottom: 8 },
});
