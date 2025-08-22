import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, ScrollView, StyleSheet, Platform } from 'react-native';
import * as RNIap from 'react-native-iap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';

const inappIds = ['premium_3m', 'premium_6m', 'premium_12m'] as const;
const subsIds: string[] = [];

// 🌐 다국어 번역 테이블
const translations: any = {
  ko: {
    premiumMembership: "프리미엄 이용권",
    buyNow: "구매하기",
    loading: "불러오는 중...",
    success: "성공",
    purchaseSuccess: "프리미엄 이용이 활성화되었습니다!",
    error: "오류",
    verifyFail: "구매 검증에 실패했습니다.",
    purchaseFail: "구매에 실패했습니다.",
    purchaseCanceled: "구매가 취소되었습니다.",
    noProductsAvailable: "구매 가능한 상품이 없습니다.",
    desc: {
      premium_3m: "3개월 프리미엄 이용권",
      premium_6m: "6개월 프리미엄 이용권",
      premium_12m: "12개월 프리미엄 이용권"
    }
  },
  en: {
    premiumMembership: "Premium Membership",
    buyNow: "Buy Now",
    loading: "Loading...",
    success: "Success",
    purchaseSuccess: "Premium access activated successfully!",
    error: "Error",
    verifyFail: "Purchase verification failed.",
    purchaseFail: "Purchase failed.",
    purchaseCanceled: "Purchase canceled.",
    noProductsAvailable: "No products available.",
    desc: {
      premium_3m: "3 months premium access",
      premium_6m: "6 months premium access",
      premium_12m: "12 months premium access"
    }
  },
  ja: {
    premiumMembership: "プレミアム利用権",
    buyNow: "購入する",
    loading: "読み込み中...",
    success: "成功",
    purchaseSuccess: "プレミアムアクセスが有効になりました！",
    error: "エラー",
    verifyFail: "購入の確認に失敗しました。",
    purchaseFail: "購入に失敗しました。",
    purchaseCanceled: "購入がキャンセルされました。",
    noProductsAvailable: "購入可能な商品がありません。",
    desc: {
      premium_3m: "3か月間のプレミアムアクセス",
      premium_6m: "6か月間のプレミアムアクセス",
      premium_12m: "12か月間のプレミアムアクセス"
    }
  },
  zh: {
    premiumMembership: "高级会员",
    buyNow: "立即购买",
    loading: "加载中...",
    success: "成功",
    purchaseSuccess: "高级会员已成功激活！",
    error: "错误",
    verifyFail: "购买验证失败。",
    purchaseFail: "购买失败。",
    purchaseCanceled: "购买已取消。",
    noProductsAvailable: "没有可购买的商品。",
    desc: {
      premium_3m: "3个月高级访问权限",
      premium_6m: "6个月高级访问权限",
      premium_12m: "12个月高级访问权限"
    }
  },
  vi: {
    premiumMembership: "Quyền thành viên cao cấp",
    buyNow: "Mua ngay",
    loading: "Đang tải...",
    success: "Thành công",
    purchaseSuccess: "Truy cập cao cấp đã được kích hoạt!",
    error: "Lỗi",
    verifyFail: "Xác minh giao dịch mua thất bại.",
    purchaseFail: "Mua hàng thất bại.",
    purchaseCanceled: "Giao dịch mua đã bị hủy.",
    noProductsAvailable: "Không có sản phẩm nào để mua.",
    desc: {
      premium_3m: "Truy cập cao cấp 3 tháng",
      premium_6m: "Truy cập cao cấp 6 tháng",
      premium_12m: "Truy cập cao cấp 12 tháng"
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

  // ✅ 상품 로딩
  const loadProducts = async () => {
    setLoadingProducts(true);
    try {
      const connected = await RNIap.initConnection();
      console.log('[IAP] initConnection:', connected);
      if (!connected) throw new Error("IAP init failed");

      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();

      const items = await RNIap.getProducts({ skus: inappIds as string[] });
      console.log('[IAP] getProducts returned:', items.length, items);
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

  // ✅ 구매 요청
  const handlePurchase = async (productId: string) => {
    console.log('[IAP] handlePurchase:', productId);
    setLoadingPurchase(true);
    try {
      await RNIap.requestPurchase({
        skus: [productId],
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
