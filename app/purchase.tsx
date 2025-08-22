import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Alert, ScrollView, StyleSheet, Platform } from 'react-native';
import * as RNIap from 'react-native-iap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';

const inappIds = ['premium_3m', 'premium_6m'] as const;
const subsIds = ['premium_12m'] as const;

export default function PurchaseScreen() {
  const [products, setProducts] = useState<RNIap.Product[]>([]);
  const [subscriptions, setSubscriptions] = useState<RNIap.Subscription[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [iapAvailable, setIapAvailable] = useState<boolean | null>(null);

  const router = useRouter();
  const { t, language } = useLanguage();

  const purchaseUpdateSub = useRef<RNIap.PurchaseUpdatedListener>();
  const purchaseErrorSub = useRef<RNIap.PurchaseErrorListener>();
  const inFlight = useRef<string | null>(null);

  const TT = {
    premiumMembership: t?.premiumMembership || 'Premium Membership',
    success: t?.success || 'Success',
    purchaseSuccess: t?.purchaseSuccess || 'Premium access activated successfully!',
    error: t?.error || 'Error',
    noProductsAvailable: t?.noProductsAvailable || 'No products available. Please check:',
    loading: t?.loading || 'Loading...',
    buyNow: t?.buyNow || 'Buy Now',
    quarterlyDescription: t?.quarterlyDescription || '3 months premium access',
    semiannualDescription: t?.semiannualDescription || '6 months premium access',
    annualDescription: t?.annualDescription || '1 year premium access',
    iapInitFail: t?.iapInitFail || 'Failed to initialize In-App Purchase',
    verifyFail: t?.verifyFail || 'Purchase verification failed',
    purchaseFail: t?.purchaseFail || 'Purchase failed',
    purchaseCanceled: t?.purchaseCanceled || 'Purchase canceled',
  };

  // ✅ 결제 완료 → 서버 검증
  const verifyAndFinish = async (purchase: RNIap.Purchase) => {
    const tokenStr = purchase.purchaseToken ?? purchase.transactionReceipt ?? '';
    if (!tokenStr) return;

    if (inFlight.current === tokenStr) return; // 중복 방지
    inFlight.current = tokenStr;

    try {
      const authToken = await AsyncStorage.getItem('authToken');
      console.log('[IAP] 서버 검증 요청:', purchase.productId);

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
        Alert.alert(TT.error, json?.message || TT.verifyFail);
        // 실패한 경우에도 transaction 정리 필요
        try { await RNIap.finishTransaction({ purchase, isConsumable: false }); } catch {}
      }
    } catch (e: any) {
      console.warn('[IAP] verify/finish error:', e);
      Alert.alert(TT.error, TT.purchaseFail);
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
      setIapAvailable(connected);
      console.log('[IAP] initConnection:', connected);

      if (!connected) throw new Error(TT.iapInitFail);

      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();

      const items = await RNIap.getProducts(inappIds);
      const subs = await RNIap.getSubscriptions(subsIds);
      console.log('[IAP] getProducts:', items, 'getSubscriptions:', subs);

      setProducts(items);
      setSubscriptions(subs);

      if (items.length + subs.length === 0) {
        Alert.alert(
          TT.error,
          `${TT.noProductsAvailable}\n\n- Play 스토어 내부 테스트 트랙에서 설치했는지?\n- 테스트 계정 로그인 여부 확인\n- AndroidManifest에 BILLING 권한 추가 여부 확인`
        );
      }

      purchaseUpdateSub.current = RNIap.purchaseUpdatedListener(async (purchase) => {
        console.log('[IAP] purchaseUpdatedListener:', purchase);
        await verifyAndFinish(purchase);
      });
      purchaseErrorSub.current = RNIap.purchaseErrorListener((e) => {
        console.warn('[IAP] purchaseErrorListener:', e);
        Alert.alert(TT.error, e?.message || TT.purchaseFail);
        setLoadingPurchase(false);
      });
    } catch (e: any) {
      console.warn('[IAP] init error:', e);
      Alert.alert(TT.error, TT.iapInitFail + ': ' + e.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadProducts();
    }, 1500); // 앱 실행 1.5초 후 상품 로딩 시도

    loadProducts();
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
        productId,
        andDangerouslyFinishTransactionAutomatically: false,
      });
    } catch (err: any) {
      console.warn('[IAP] request error:', err);
      Alert.alert(TT.error, err?.message || TT.purchaseFail);
      setLoadingPurchase(false);
    }
  };

  const renderProduct = (p: RNIap.Product | RNIap.Subscription) => (
    <View key={p.productId} style={styles.productCard}>
      <Text style={styles.productTitle}>{p.title}</Text>
      <Text style={styles.productPrice}>{p.localizedPrice}</Text>
      <Text style={styles.productDescription}>
        {getProductDescription(p.productId, TT)}
      </Text>
      <Button title={TT.buyNow} onPress={() => handlePurchase(p.productId)} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 {TT.premiumMembership}</Text>
      {loadingProducts ? (
        <Text>{TT.loading}</Text>
      ) : (
        <>
          {products.map(renderProduct)}
          {subscriptions.map(renderProduct)}
          {products.length + subscriptions.length === 0 && (
            <Text>{TT.noProductsAvailable}</Text>
          )}
          {loadingPurchase && <Text>{TT.loading}</Text>}
        </>
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
