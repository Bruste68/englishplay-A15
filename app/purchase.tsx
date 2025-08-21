// purchase.tsx
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, ScrollView, StyleSheet, Platform, Switch } from 'react-native';
import * as RNIap from 'react-native-iap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';

const productIds = ['premium_3m', 'premium_6m', 'premium_12m'] as const;
type ProductMode = 'inapp' | 'subs';

export default function PurchaseScreen() {
  const [products, setProducts] = useState<RNIap.Product[]>([]);
  const [productMode, setProductMode] = useState<ProductMode | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [iapAvailable, setIapAvailable] = useState<boolean | null>(null);
  const [useMock, setUseMock] = useState(__DEV__); // ← 개발 중엔 Mock, 배포 시 false
  const router = useRouter();
  const { t, language } = useLanguage();

  const purchaseUpdateSub = useRef<RNIap.PurchaseUpdatedListener>();
  const purchaseErrorSub = useRef<RNIap.PurchaseErrorListener>();
  const inFlight = useRef<string | null>(null);

  // 🌐 다국어 텍스트
  const localizedText = {
    premiumMembership: { ko: '프리미엄 멤버십', en: 'Premium Membership' },
    success: { ko: '완료', en: 'Success' },
    purchaseSuccess: { ko: '프리미엄 이용이 활성화되었습니다!', en: 'Premium access activated successfully!' },
    error: { ko: '오류', en: 'Error' },
    noProductsAvailable: { ko: '구매 가능한 상품이 없습니다.', en: 'No products available.' },
    loading: { ko: '불러오는 중...', en: 'Loading...' },
    buyNow: { ko: '지금 구매', en: 'Buy Now' },
    quarterlyDescription: { ko: '3개월 프리미엄 이용', en: '3 month premium access' },
    semiannualDescription: { ko: '6개월 프리미엄 이용', en: '6 months premium access' },
    annualDescription: { ko: '1년 프리미엄 이용', en: '1 year premium access' },
  } as const;
  const TT = Object.fromEntries(
    Object.entries(localizedText).map(([k, v]) => [k, (t as any)[k] || v.en])
  );

  // ─────────────────────────────
  // ✅ 실제 결제 처리
  const verifyAndFinish = async (purchase: RNIap.Purchase) => {
    const tokenStr = purchase.purchaseToken ?? purchase.transactionReceipt ?? '';
    if (!tokenStr) return;
    if (inFlight.current === tokenStr) return; // 중복 방지
    inFlight.current = tokenStr;

    try {
      const authToken = await AsyncStorage.getItem('authToken');
      console.log('[IAP] 서버 검증 요청:', purchase.productId, tokenStr);

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
      console.log('[IAP] 서버 응답:', json);

      if (res.ok && json?.success) {
        await RNIap.finishTransaction({ purchase, isConsumable: false });
        await AsyncStorage.setItem('currentUser', JSON.stringify(json.user));
        await AsyncStorage.setItem('preferredLang', language || 'en');

        Alert.alert(TT.success, TT.purchaseSuccess);
        router.replace('/screens/TopicSelectScreen');
      } else {
        Alert.alert(TT.error, json?.message || '구매 검증 실패');
      }
    } catch (e: any) {
      console.warn('[IAP] verify/finish error:', e);
      Alert.alert(TT.error, '결제 처리 실패');
    } finally {
      inFlight.current = null;
      setIsLoading(false);
    }
  };

  // ─────────────────────────────
  // 상품 로딩
  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const connected = await RNIap.initConnection();
      setIapAvailable(connected);
      if (!connected) throw new Error('E_IAP_NOT_AVAILABLE');
      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();

      // 구독 우선
      let subs: RNIap.Subscription[] = [];
      try { subs = await RNIap.getSubscriptions(productIds as any); } catch {}
      if (subs?.length) {
        setProductMode('subs');
        setProducts(subs as any);
      } else {
        let items: RNIap.Product[] = [];
        try { items = await RNIap.getProducts(productIds as any); } catch {}
        setProductMode('inapp');
        setProducts(items);
      }

      // 구매 이벤트 리스너
      purchaseUpdateSub.current = RNIap.purchaseUpdatedListener(async (purchase) => {
        console.log('[IAP] purchaseUpdatedListener:', purchase);
        await verifyAndFinish(purchase);
      });
      purchaseErrorSub.current = RNIap.purchaseErrorListener((e) => {
        console.warn('[IAP] purchaseErrorListener:', e);
        Alert.alert(TT.error, e?.message || '결제 실패');
      });
    } catch (e: any) {
      console.warn('[IAP] init error:', e);
      Alert.alert(TT.error, 'IAP 초기화 실패');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
    return () => {
      try { purchaseUpdateSub.current?.remove(); } catch {}
      try { purchaseErrorSub.current?.remove(); } catch {}
      RNIap.endConnection();
    };
  }, []);

  // ─────────────────────────────
  // 구매 요청
  const handlePurchase = async (productId: string) => {
    console.log('[IAP] handlePurchase:', productId, 'mock=', useMock);

    setIsLoading(true); // ✅ 로딩 시작
    try {
      if (productMode === 'subs') {
        await RNIap.requestSubscription({
          productId,
          andDangerouslyFinishTransactionAutomatically: false,
        });
      } else {
        await RNIap.requestPurchase({
          productId,
          andDangerouslyFinishTransactionAutomatically: false,
        });
      }
    } catch (err: any) {
      console.warn('[IAP] request error:', err);
      Alert.alert(TT.error, err?.message || '결제 실패');
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 {TT.premiumMembership}</Text>
      {isLoading ? (
        <Text>{TT.loading}</Text>
      ) : products.length === 0 ? (
        <Text>{TT.noProductsAvailable}</Text>
      ) : (
        products.map((p: any) => (
          <View key={p.productId} style={styles.productCard}>
            <Text style={styles.productTitle}>{p.title}</Text>
            <Text style={styles.productPrice}>{p.localizedPrice}</Text>
            <Text style={styles.productDescription}>
              {getProductDescription(p.productId, TT)}
            </Text>
            <Button title={TT.buyNow} onPress={() => handlePurchase(p.productId)} />
          </View>
        ))
      )}
    </ScrollView>
  );
}

function getProductDescription(productId: string, TT: any) {
  switch (productId) {
    case 'premium_3m': return TT.quarterlyDescription;
    case 'premium_6m': return TT.semiannualDescription;
    case 'premium_12m': return TT.annualDescription;
    default: return '';
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  productCard: { backgroundColor: '#F8F9FA', padding: 16, borderRadius: 8, marginBottom: 16 },
  productTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  productPrice: { fontSize: 16, color: '#007AFF', marginBottom: 8 },
  productDescription: { fontSize: 14, color: '#666', marginBottom: 12 },
});
