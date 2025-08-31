import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, ScrollView, StyleSheet, Platform, ActivityIndicator, Linking } from 'react-native';
import * as RNIap from 'react-native-iap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';

// ✅ 구독 상품 ID (Google Play Console 기준)
const productIds = ['sub_premium_3m', 'sub_premium_6m', 'sub_premium_12m'];

// 🌐 다국어 번역 테이블
const translations: any = {
  ko: {
    premiumMembership: "프리미엄 구독",
    buyNow: "구독하기",
    loading: "불러오는 중...",
    success: "성공",
    purchaseSuccess: "프리미엄 구독이 활성화되었습니다!",
    error: "오류",
    verifyFail: "구독 검증에 실패했습니다.",
    purchaseFail: "구독에 실패했습니다.",
    purchaseCanceled: "구독이 취소되었습니다.",
    noProductsAvailable: "구독 가능한 상품이 없습니다.",
    manageSubscription: "구독 관리하기",
    alreadySubscribed: "이미 프리미엄 구독 중입니다",
    alreadySubscribedDesc: "이미 해당 상품을 구독 중입니다. 구글 플레이 스토어에서 구독을 관리해주세요.",
    expire7days: "프리미엄 구독이 7일 후 만료됩니다. 갱신을 잊지 마세요!",
    expire3days: "⚠️ 프리미엄 구독이 3일 후 만료됩니다. 지금 갱신하세요!",
    desc: {
      sub_premium_3m: "3개월 프리미엄 구독",
      sub_premium_6m: "6개월 프리미엄 구독",
      sub_premium_12m: "12개월 프리미엄 구독"
    }
  },
  en: {
    premiumMembership: "Premium Subscription",
    buyNow: "Subscribe Now",
    loading: "Loading...",
    success: "Success",
    purchaseSuccess: "Premium subscription activated successfully!",
    error: "Error",
    verifyFail: "Subscription verification failed.",
    purchaseFail: "Subscription failed.",
    purchaseCanceled: "Subscription canceled.",
    noProductsAvailable: "No subscriptions available.",
    manageSubscription: "Manage Subscription",
    alreadySubscribed: "Already subscribed to premium",
    alreadySubscribedDesc: "You are already subscribed to this product. Please manage your subscription in Google Play Store.",
    expire7days: "Your premium subscription will expire in 7 days. Don't forget to renew!",
    expire3days: "⚠️ Your premium subscription will expire in 3 days. Renew now!",
    desc: {
      sub_premium_3m: "3 months premium subscription",
      sub_premium_6m: "6 months premium subscription",
      sub_premium_12m: "12 months premium subscription"
    }
  },
  ja: {
    premiumMembership: "プレミアム購読",
    buyNow: "購読する",
    loading: "読み込み中...",
    success: "成功",
    purchaseSuccess: "プレミアム購読が有効になりました！",
    error: "エラー",
    verifyFail: "購読の確認に失敗しました。",
    purchaseFail: "購読に失敗しました。",
    purchaseCanceled: "購読がキャンセルされました。",
    noProductsAvailable: "利用可能な購読がありません。",
    manageSubscription: "購読を管理",
    alreadySubscribed: "すでにプレミアム購読中です",
    alreadySubscribedDesc: "すでにこの商品を購読中です。Google Play ストアで購読を管理してください。",
    expire7days: "プレミアム購読は7日後に終了します。更新をお忘れなく！",
    expire3days: "⚠️ プレミアム購読は3日後に終了します。今すぐ更新してください！",
    desc: {
      sub_premium_3m: "3か月のプレミアム購読",
      sub_premium_6m: "6か月のプレミアム購読",
      sub_premium_12m: "12か月のプレミアム購読"
    }
  },
  zh: {
    premiumMembership: "高级订阅",
    buyNow: "立即订阅",
    loading: "加载中...",
    success: "成功",
    purchaseSuccess: "高级订阅已成功激活！",
    error: "错误",
    verifyFail: "订阅验证失败。",
    purchaseFail: "订阅失败。",
    purchaseCanceled: "订阅已取消。",
    noProductsAvailable: "没有可用的订阅。",
    manageSubscription: "管理订阅",
    alreadySubscribed: "已订阅高级版",
    alreadySubscribedDesc: "您已订阅此产品。请在Google Play商店中管理您的订阅。",
    expire7days: "您的高级订阅将在7天后到期，请记得续订！",
    expire3days: "⚠️ 您的高级订阅将在3天后到期，请立即续订！",
    desc: {
      sub_premium_3m: "3个月高级订阅",
      sub_premium_6m: "6个月高级订阅",
      sub_premium_12m: "12个月高级订阅"
    }
  },
  vi: {
    premiumMembership: "Đăng ký Cao cấp",
    buyNow: "Đăng ký ngay",
    loading: "Đang tải...",
    success: "Thành công",
    purchaseSuccess: "Đăng ký cao cấp đã được kích hoạt!",
    error: "Lỗi",
    verifyFail: "Xác minh đăng ký thất bại.",
    purchaseFail: "Đăng ký thất bại.",
    purchaseCanceled: "Đăng ký đã bị hủy.",
    noProductsAvailable: "Không có gói đăng ký nào khả dụng.",
    manageSubscription: "Quản lý đăng ký",
    alreadySubscribed: "Đã đăng ký gói cao cấp",
    alreadySubscribedDesc: "Bạn đã đăng ký sản phẩm này. Vui lòng quản lý đăng ký trong Google Play Store.",
    expire7days: "Gói cao cấp của bạn sẽ hết hạn sau 7 ngày. Đừng quên gia hạn!",
    expire3days: "⚠️ Gói cao cấp sẽ hết hạn sau 3 ngày. Hãy gia hạn ngay!",
    desc: {
      sub_premium_3m: "Đăng ký cao cấp 3 tháng",
      sub_premium_6m: "Đăng ký cao cấp 6 tháng",
      sub_premium_12m: "Đăng ký cao cấp 12 tháng"
    }
  }
};

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, ScrollView, StyleSheet, Platform, ActivityIndicator, Linking } from 'react-native';
import * as RNIap from 'react-native-iap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';

// ✅ 구독 상품 ID (Google Play Console 기준)
const productIds = ['sub_premium_3m', 'sub_premium_6m', 'sub_premium_12m'];

export default function PurchaseScreen() {
  const [products, setProducts] = useState<RNIap.Subscription[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [currentSubscription, setCurrentSubscription] = useState<string | null>(null);

  const router = useRouter();
  const { language, t } = useLanguage();

  const purchaseUpdateSub = useRef<ReturnType<typeof RNIap.purchaseUpdatedListener> | null>(null);
  const purchaseErrorSub = useRef<ReturnType<typeof RNIap.purchaseErrorListener> | null>(null);
  const inFlight = useRef<string | null>(null);

  /** ✅ 현재 구독 상태 확인 */
  const checkCurrentSubscription = async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      if (!authToken) return;

      const res = await fetch(`${API_BASE_URL}/api/purchase/status`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      if (!res.ok) return;

      const data = await res.json();
      setCurrentSubscription(data.active ? 'active' : null);

      if (data.active) {
        await AsyncStorage.setItem('premiumActive', 'true');
      } else {
        await AsyncStorage.removeItem('premiumActive');
      }
    } catch (err) {
      console.warn("❌ checkCurrentSubscription error:", err);
    }
  };

  /** ✅ 서버 검증 + 필요시 finishTransaction */
  const verifyAndFinish = async (purchase: RNIap.Purchase) => {
    const tokenStr = purchase.purchaseToken ?? purchase.transactionReceipt ?? '';
    if (!tokenStr) return;
    if (inFlight.current === tokenStr) return;
    inFlight.current = tokenStr;

    try {
      const authToken = await AsyncStorage.getItem('authToken');
      if (!authToken) return;

      const res = await fetch(`${API_BASE_URL}/api/purchase/verify-receipt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
        body: JSON.stringify({
          productId: purchase.productId,
          transactionId: purchase.transactionId ?? null,
          receipt: purchase.purchaseToken,
          platform: Platform.OS,
        }),
      });

      const json = await res.json();
      console.log("🔎 [verifyAndFinish] server response:", json);

      if (res.ok && json?.success) {
        // ✅ 아직 acknowledge되지 않았다면 finishTransaction
        if (Platform.OS === 'android' && !purchase.isAcknowledgedAndroid) {
          await RNIap.finishTransaction({ purchase, isConsumable: false });
        }

        // ✅ 토큰/유저정보 동기화
        if (json.token) {
          await AsyncStorage.setItem('authToken', json.token);
        }
        if (json.user) {
          await AsyncStorage.setItem('currentUser', JSON.stringify({
            ...json.user,
            isPremium: true,
            trialExpired: false,
          }));
        }
        await AsyncStorage.setItem('premiumActive', 'true');

        setCurrentSubscription('active');
        Alert.alert(t.success, t.purchaseSuccess);

        setTimeout(() => router.replace('/screens/TopicSelectScreen'), 800);
      } else {
        Alert.alert(t.error, json?.message || t.verifyFail);
      }
    } catch (e: any) {
      console.warn("❌ verifyAndFinish error:", e);
      Alert.alert(t.error, t.purchaseFail);
    } finally {
      inFlight.current = null;
      setLoadingPurchase(false);
    }
  };

  /** ✅ 상품 로딩 */
  const loadProducts = async () => {
    setLoadingProducts(true);
    try {
      const connected = await RNIap.initConnection();
      if (!connected) throw new Error("IAP init failed");

      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();

      const items = await RNIap.getSubscriptions({ skus: productIds });
      const order = ['sub_premium_3m', 'sub_premium_6m', 'sub_premium_12m'];
      items.sort((a, b) => order.indexOf(a.productId) - order.indexOf(b.productId));
      setProducts(items);

      // ✅ 이전 구매 복원 (finishTransaction은 안 함)
      const availablePurchases = await RNIap.getAvailablePurchases();
      for (const p of availablePurchases) {
        if (p.productId && productIds.includes(p.productId)) {
          await verifyAndFinish(p); // 서버 동기화만
        }
      }

      // ✅ 리스너
      purchaseUpdateSub.current = RNIap.purchaseUpdatedListener(async (purchase) => {
        console.log("📥 purchaseUpdatedListener:", purchase);
        await verifyAndFinish(purchase);
      });

      purchaseErrorSub.current = RNIap.purchaseErrorListener((e) => {
        console.warn("❌ purchaseErrorListener:", e);
        if (e.code === 'E_USER_CANCELLED') {
          Alert.alert(t.error, t.purchaseCanceled);
        } else if (e.code === 'E_ALREADY_OWNED') {
          Alert.alert(t.error, t.alreadySubscribedDesc, [
            { text: 'OK', onPress: () => Linking.openURL('https://play.google.com/store/account/subscriptions') }
          ]);
        } else {
          Alert.alert(t.error, e?.debugMessage || e?.message || t.purchaseFail);
        }
        setLoadingPurchase(false);
      });

      await checkCurrentSubscription();
    } catch (e: any) {
      Alert.alert(t.error, "IAP init failed: " + e.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    loadProducts();
    return () => {
      try { purchaseUpdateSub.current?.remove(); } catch {}
      try { purchaseErrorSub.current?.remove(); } catch {}
      RNIap.endConnection();
    };
  }, [language]);

  /** ✅ 구독 요청 */
  const handlePurchase = async (productId: string) => {
    if (currentSubscription === 'active') {
      Alert.alert(t.alreadySubscribed, t.alreadySubscribedDesc, [
        { text: 'OK', onPress: () => Linking.openURL('https://play.google.com/store/account/subscriptions') }
      ]);
      return;
    }

    setLoadingPurchase(true);
    try {
      const product = products.find(p => p.productId === productId) as RNIap.SubscriptionAndroid;
      const offer = product.subscriptionOfferDetails?.[0];
      const offerToken = offer?.offerToken;
      if (!offerToken) throw new Error("No offerToken (구글 콘솔 설정 확인)");

      await RNIap.requestSubscription({
        sku: productId,
        subscriptionOffers: [{ sku: productId, offerToken }],
        andDangerouslyFinishTransactionAutomatically: false,
      } as any);
    } catch (err: any) {
      if (err.code === 'E_ALREADY_OWNED') {
        Alert.alert(t.alreadySubscribed, t.alreadySubscribedDesc, [
          { text: 'OK', onPress: () => Linking.openURL('https://play.google.com/store/account/subscriptions') }
        ]);
      } else {
        Alert.alert(t.error, err?.message || t.purchaseFail);
      }
      setLoadingPurchase(false);
    }
  };

  const renderProduct = (p: RNIap.Subscription) => (
    <View key={p.productId} style={styles.productCard}>
      <Text style={styles.productTitle}>{t.desc[p.productId]}</Text>
      <Text style={styles.productPrice}>{(p as any).localizedPrice}</Text>
      <Button
        title={t.buyNow}
        onPress={() => handlePurchase(p.productId)}
        disabled={currentSubscription === 'active' || loadingPurchase}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 {t.premiumMembership}</Text>

      {currentSubscription === 'active' && (
        <View style={styles.activeSubscription}>
          <Text style={styles.activeText}>✅ {t.alreadySubscribed}</Text>
          <Button title={t.manageSubscription} onPress={() => Linking.openURL('https://play.google.com/store/account/subscriptions')} />
        </View>
      )}

      {loadingProducts ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text>{t.loading}</Text>
        </View>
      ) : (
        <>
          {products.map(renderProduct)}
          {products.length === 0 && <Text>{t.noProductsAvailable}</Text>}
          {loadingPurchase && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007AFF" />
              <Text>{t.loading}</Text>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  productCard: { backgroundColor: '#F8F9FA', padding: 16, borderRadius: 8, marginBottom: 16 },
  productTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  productPrice: { fontSize: 16, color: '#007AFF', marginBottom: 8 },
  loadingContainer: { alignItems: 'center', justifyContent: 'center', padding: 20 },
  activeSubscription: { backgroundColor: '#E8F5E8', padding: 16, borderRadius: 8, marginBottom: 20, alignItems: 'center' },
  activeText: { fontSize: 16, color: '#2E7D32', marginBottom: 10 }
});
