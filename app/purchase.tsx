import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, ScrollView, StyleSheet, Platform } from 'react-native';
import * as RNIap from 'react-native-iap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';

// ✅ 구독 상품 ID (Google Play Console 기준)
const subsIds = ['sub_premium_3m', 'sub_premium_6m', 'sub_premium_12m'];

// 🌐 다국어 번역 테이블 (기존 유지)
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
    desc: {
      sub_premium_3m: "Đăng ký cao cấp 3 tháng",
      sub_premium_6m: "Đăng ký cao cấp 6 tháng",
      sub_premium_12m: "Đăng ký cao cấp 12 tháng"
    }
  }
};

export default function PurchaseScreen() {
  const [products, setProducts] = useState<RNIap.Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);

  const router = useRouter();
  const { language } = useLanguage(); 
  const t = translations[language] || translations.en;

  const purchaseUpdateSub = useRef<RNIap.PurchaseUpdatedListener>();
  const purchaseErrorSub = useRef<RNIap.PurchaseErrorListener>();
  const inFlight = useRef<string | null>(null);

  // ✅ 결제 완료 → 서버 검증
  const verifyAndFinish = async (purchase: RNIap.Purchase) => {
    const tokenStr = purchase.purchaseToken ?? purchase.transactionReceipt ?? '';
    if (!tokenStr) return;
    if (inFlight.current === tokenStr) return;
    inFlight.current = tokenStr;

    try {
      const authToken = await AsyncStorage.getItem('authToken');
      console.log('[IAP] verify request:', purchase.productId);

      const res = await fetch(`${API_BASE_URL}/api/verify-receipt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
          productId: purchase.productId,
          transactionId: purchase.transactionId ?? null,
          receipt: tokenStr,
          platform: Platform.OS,
        }),
      });

      const json = await res.json();
      console.log('[IAP] server response:', json);

      if (res.ok && json?.success) {
        await RNIap.finishTransaction({ purchase, isConsumable: false });
        await AsyncStorage.setItem('currentUser', JSON.stringify(json.user));
        await AsyncStorage.setItem('preferredLang', language || 'en');

        Alert.alert(t.success, t.purchaseSuccess);
        router.replace('/screens/TopicSelectScreen');
      } else {
        Alert.alert(t.error, json?.message || t.verifyFail);
        try { await RNIap.finishTransaction({ purchase, isConsumable: false }); } catch {}
      }
    } catch (e: any) {
      console.warn('[IAP] verify/finish error:', e);
      Alert.alert(t.error, t.purchaseFail);
      try { await RNIap.finishTransaction({ purchase, isConsumable: false }); } catch {}
    } finally {
      inFlight.current = null;
      setLoadingPurchase(false);
    }
  };

  // ✅ 상품 로딩 (구독 전용)
  const loadProducts = async () => {
    setLoadingProducts(true);
    try {
      const connected = await RNIap.initConnection();
      console.log('[IAP] initConnection:', connected);
      if (!connected) throw new Error("IAP init failed");

      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();

      // ⚡ 구독 상품 가져오기
      const items = await RNIap.getSubscriptions({ skus: subsIds });
      console.log('[IAP] getSubscriptions returned:', items.length, items);
      setProducts(items);

      purchaseUpdateSub.current = RNIap.purchaseUpdatedListener(async (purchase) => {
        console.log('[IAP] purchaseUpdatedListener:', purchase);
        await verifyAndFinish(purchase);
      });
      purchaseErrorSub.current = RNIap.purchaseErrorListener((e) => {
        console.warn('[IAP] purchaseErrorListener:', e);
        if (e.code === 'E_USER_CANCELLED') {
          Alert.alert(t.error, t.purchaseCanceled);
        } else {
          Alert.alert(t.error, e?.message || t.purchaseFail);
        }
        setLoadingPurchase(false);
      });
    } catch (e: any) {
      console.warn('[IAP] init error:', e);
      Alert.alert(t.error, "IAP init failed: " + e.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadProducts();
    }, 1500);

    return () => {
      clearTimeout(timer);
      try { purchaseUpdateSub.current?.remove(); } catch {}
      try { purchaseErrorSub.current?.remove(); } catch {}
      RNIap.endConnection();
    };
  }, []);

  // ✅ 구독 요청
  const handlePurchase = async (productId: string) => {
    console.log('[IAP] handleSubscription:', productId);
    setLoadingPurchase(true);
    try {
      await RNIap.requestSubscription({
        sku: productId,
        andDangerouslyFinishTransactionAutomatically: false,
      });
    } catch (err: any) {
      console.warn('[IAP] request error:', err);
      Alert.alert(t.error, err?.message || t.purchaseFail);
      setLoadingPurchase(false);
    }
  };

  const renderProduct = (p: RNIap.Product) => (
    <View key={p.productId} style={styles.productCard}>
      <Text style={styles.productTitle}>{t.desc[p.productId]}</Text>
      <Text style={styles.productPrice}>{p.localizedPrice}</Text>
      <Button title={t.buyNow} onPress={() => handlePurchase(p.productId)} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 {t.premiumMembership}</Text>
      {loadingProducts ? (
        <Text>{t.loading}</Text>
      ) : (
        <>
          {products.map(renderProduct)}
          {products.length === 0 && (
            <Text>{t.noProductsAvailable}</Text>
          )}
          {loadingPurchase && <Text>{t.loading}</Text>}
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
});
