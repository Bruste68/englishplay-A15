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
    desc: {
      sub_premium_3m: "Đăng ký cao cấp 3 tháng",
      sub_premium_6m: "Đăng ký cao cấp 6 tháng",
      sub_premium_12m: "Đăng ký cao cấp 12 tháng"
    }
  }
};

export default function PurchaseScreen() {
  const [products, setProducts] = useState<RNIap.Subscription[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [currentSubscription, setCurrentSubscription] = useState<string | null>(null);

  const router = useRouter();
  const { language } = useLanguage(); 
  const t = translations[language] || translations.en;

  // ✅ 리스너 타입 안전하게 관리
  const purchaseUpdateSub = useRef<ReturnType<typeof RNIap.purchaseUpdatedListener> | null>(null);
  const purchaseErrorSub = useRef<ReturnType<typeof RNIap.purchaseErrorListener> | null>(null);
  const inFlight = useRef<string | null>(null);

  // ✅ 현재 구독 상태 확인
  const checkCurrentSubscription = async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const purchaseToken = await AsyncStorage.getItem('purchaseToken');
      const usedToken = purchaseToken || authToken;

      console.log('🛒 PurchaseScreen 토큰:', authToken ? 'authToken 있음' : purchaseToken ? 'purchaseToken 있음' : '없음');
      if (!usedToken) return;

      const res = await fetch(`${API_BASE_URL}/api/purchase/status`, {
        headers: {
          Authorization: `Bearer ${usedToken}`
        }
      });

      if (res.ok) {
        const data = await res.json();
        if (data.active) {
          setCurrentSubscription('active');
        }
      }
    } catch (error) {
      console.warn('구독 상태 확인 실패:', error);
    }
  };

  // ✅ 결제 완료 → 서버 검증
  const verifyAndFinish = async (purchase: RNIap.Purchase) => {
    const tokenStr = purchase.purchaseToken ?? purchase.transactionReceipt ?? '';
    if (!tokenStr) return;
    if (inFlight.current === tokenStr) return;
    inFlight.current = tokenStr;

    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const purchaseToken = await AsyncStorage.getItem('purchaseToken');
      const usedToken = authToken || purchaseToken;

      console.log('[IAP] verify request:', purchase.productId, 'with token:', usedToken);

      const res = await fetch(`${API_BASE_URL}/api/purchase/verify-receipt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${usedToken}`
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
        
        if (json.user) {
          await AsyncStorage.setItem('currentUser', JSON.stringify(json.user));
        }
        await AsyncStorage.setItem('premiumActive', 'true');
        await AsyncStorage.removeItem('purchaseToken'); // ✅ 구매 완료 후 purchaseToken 제거
        await AsyncStorage.setItem('preferredLang', language || 'en');

        Alert.alert(t.success, t.purchaseSuccess);
        
        setCurrentSubscription('active');
        setTimeout(() => {
          router.replace('/screens/TopicSelectScreen');
        }, 1000);
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
    const debugToken = await AsyncStorage.getItem('authToken');
    if (!debugToken) console.warn("❌ PurchaseScreen 진입 시 토큰 없음");

    setLoadingProducts(true);
    try {
      const connected = await RNIap.initConnection();
      console.log('[IAP] initConnection:', connected);
      if (!connected) throw new Error("IAP init failed");

      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();

      const items: RNIap.Subscription[] = await RNIap.getSubscriptions({ skus: productIds });
      console.log('[IAP] getSubscriptions returned:', items.length);

      const order = ['sub_premium_3m', 'sub_premium_6m', 'sub_premium_12m'];
      items.sort((a, b) => order.indexOf(a.productId) - order.indexOf(b.productId));
      setProducts(items);

      try {
        const availablePurchases = await RNIap.getAvailablePurchases();
        console.log('[IAP] availablePurchases:', availablePurchases.length);
        for (const purchase of availablePurchases) {
          if (purchase.productId && productIds.includes(purchase.productId)) {
            await verifyAndFinish(purchase);
          }
        }
      } catch (error) {
        console.warn('[IAP] available purchases error:', error);
      }

      purchaseUpdateSub.current = RNIap.purchaseUpdatedListener(async (purchase) => {
        console.log('[IAP] purchaseUpdatedListener:', purchase);
        await verifyAndFinish(purchase);
      });
      
      purchaseErrorSub.current = RNIap.purchaseErrorListener((e) => {
        console.warn('[IAP] purchaseErrorListener:', e);
        if (e.code === 'E_USER_CANCELLED') {
          Alert.alert(t.error, t.purchaseCanceled);
        } else if (e.code === 'E_ALREADY_OWNED') {
          Alert.alert(
            t.error, 
            t.alreadySubscribedDesc,
            [
              {
                text: 'OK',
                onPress: () => {
                  if (Platform.OS === 'android') {
                    Linking.openURL('https://play.google.com/store/account/subscriptions');
                  }
                }
              }
            ]
          );
        } else {
          Alert.alert(t.error, e?.debugMessage || e?.message || t.purchaseFail);
        }
        setLoadingPurchase(false);
      });

      await checkCurrentSubscription();

    } catch (e: any) {
      console.warn('[IAP] init error:', e);
      Alert.alert(t.error, "IAP init failed: " + e.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    (async () => {
      const savedAuthToken = await AsyncStorage.getItem('authToken');
      const savedPurchaseToken = await AsyncStorage.getItem('purchaseToken');
      console.log("🛒 PurchaseScreen 진입 시 저장된 authToken:", savedAuthToken);
      console.log("🎫 PurchaseScreen 진입 시 저장된 purchaseToken:", savedPurchaseToken);
    })();

    const timer = setTimeout(() => {
      loadProducts();
    }, 1500);

    return () => {
      clearTimeout(timer);
      try { purchaseUpdateSub.current?.remove(); } catch {}
      try { purchaseErrorSub.current?.remove(); } catch {}
      RNIap.endConnection();
    };
  }, [language]);

  // ✅ 구독 요청
  const handlePurchase = async (productId: string) => {
    console.log('[IAP] handleSubscription start:', productId);

    if (currentSubscription === 'active') {
      Alert.alert(
        t.alreadySubscribed,
        t.alreadySubscribedDesc,
        [
          {
            text: 'OK',
            onPress: () => {
              if (Platform.OS === 'android') {
                Linking.openURL('https://play.google.com/store/account/subscriptions');
              }
            }
          }
        ]
      );
      return;
    }

    setLoadingPurchase(true);
    try {
      const product = products.find(p => p.productId === productId);
      console.log('[IAP] selected product:', JSON.stringify(product, null, 2));

      const androidProduct = product as RNIap.SubscriptionAndroid;
      const offer = androidProduct.subscriptionOfferDetails?.find((o: any) =>
        o.offerId?.includes('basic') || o.offerTags?.includes('subscription')
      );
      const offerToken = offer?.offerToken;

      if (!offerToken) {
        Alert.alert(t.error, t.verifyFail + " (구독 혜택이 콘솔에 설정되지 않았습니다.)");
        setLoadingPurchase(false);
        return;
      }

      await RNIap.requestSubscription({
        sku: productId,
        subscriptionOffers: [
          {
            sku: productId,
            offerToken: offerToken,
          },
        ],
        andDangerouslyFinishTransactionAutomatically: false,
      } as any);
      console.log('[IAP] requestSubscription sent:', productId, offerToken);

    } catch (err: any) {
      console.warn('[IAP] request error:', err);
      if (err.code === 'E_ALREADY_OWNED') {
        Alert.alert(
          t.alreadySubscribed,
          t.alreadySubscribedDesc,
          [
            {
              text: 'OK',
              onPress: () => {
                if (Platform.OS === 'android') {
                  Linking.openURL('https://play.google.com/store/account/subscriptions');
                }
              }
            }
          ]
        );
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
          <Button
            title={t.manageSubscription}
            onPress={() => {
              if (Platform.OS === 'android') {
                Linking.openURL('https://play.google.com/store/account/subscriptions');
              }
            }}
          />
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
          {products.length === 0 && (
            <Text>{t.noProductsAvailable}</Text>
          )}
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
  activeSubscription: { 
    backgroundColor: '#E8F5E8', 
    padding: 16, 
    borderRadius: 8, 
    marginBottom: 20,
    alignItems: 'center'
  },
  activeText: { fontSize: 16, color: '#2E7D32', marginBottom: 10 }
});