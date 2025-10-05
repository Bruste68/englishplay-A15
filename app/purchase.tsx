import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  StyleSheet,
  Platform,
  ActivityIndicator,
  Linking,
  TouchableOpacity
} from 'react-native';
import * as RNIap from 'react-native-iap';
import { PurchaseState } from "react-native-iap";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../lib/api';
import { useLanguage } from '../hooks/useLanguage';
import axios from 'axios';

// ✅ 구독 상품 ID
const productIds = ['sub_premium_3m', 'sub_premium_6m', 'sub_premium_12m'];

function safeText(val: any, fallback: string = ''): string {
  if (typeof val === 'string') return val;
  return fallback;
}

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
    alreadySubscribedConflict: "기존 구독 감지",
    alreadySubscribedConflictDesc: "이 디바이스는 다른 계정에서 이미 구독한 내역이 있습니다.\n\n해당 구독을 이 계정으로 이전하시겠습니까?\n기존 계정은 다시 로그인 후 사용하세요.",
    confirm: "확인",
    cancel: "취소",
    switchAccount: "이 계정으로 전환",
    transferFail: "전환 실패",
    noPurchasesFound: "사용 가능한 구매 항목이 없습니다.",
    fetchError: "구매 정보를 불러오지 못했습니다.",
    desc: {
      sub_premium_3m: "3개월 프리미엄 구독",
      sub_premium_6m: "6개월 프리미엄 구독",
      sub_premium_12m: "12개월 프리미엄 구독"
    },
    purchaseReasonMessages: {
      trial_expired: "체험 기간이 만료되었습니다. 프리미엄 결제가 필요합니다.",
      premium_expired: "프리미엄 이용권이 만료되었습니다. 갱신 후 이용해주세요.",
      nonpremium_existing: "기존 계정은 프리미엄이 없습니다. 프리미엄 결제가 필요합니다.",
      device_conflict: "이 디바이스는 다른 계정에서 사용 중입니다. 프리미엄 결제가 필요합니다.",
      device_limit: "이 계정은 10대 이상의 기기에서 사용 중입니다. 프리미엄 결제가 필요합니다.",
    },
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
    alreadySubscribedConflict: "Previous Subscription Found",
    alreadySubscribedConflictDesc: "This device has a subscription linked to another account.\n\nDo you want to transfer the subscription to this account?\nYou can log in again to use the previous account.",
    confirm: "OK",
    cancel: "Cancel",
    switchAccount: "Switch to this account",
    transferFail: "Transfer failed",
    noPurchasesFound: "No available purchases found.",
    fetchError: "Failed to fetch purchase info.",
    desc: {
      sub_premium_3m: "3 months premium subscription",
      sub_premium_6m: "6 months premium subscription",
      sub_premium_12m: "12 months premium subscription"
    },
    purchaseReasonMessages: {
      trial_expired: "Your trial has expired. Premium purchase is required.",
      premium_expired: "Your premium subscription has expired. Please renew.",
      nonpremium_existing: "This account does not have premium. Purchase is required.",
      device_conflict: "This device is already linked to another account. Premium is required.",
      device_limit: "This account is connected to more than 10 devices. Premium is required.",
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
    alreadySubscribedConflict: "既存の購読が見つかりました",
    alreadySubscribedConflictDesc: "このデバイスは他のアカウントですでに購読されています。\n\nこのアカウントに購読を移行しますか？\n元のアカウントを使用するには再ログインしてください。",
    confirm: "確認",
    cancel: "キャンセル",
    switchAccount: "このアカウントに切り替える",
    transferFail: "切り替えに失敗しました",
    noPurchasesFound: "利用可能な購入履歴がありません。",
    fetchError: "購入情報の取得に失敗しました。",
    desc: {
      sub_premium_3m: "3か月のプレミアム購読",
      sub_premium_6m: "6か月のプレミアム購読",
      sub_premium_12m: "12か月のプレミアム購読"
    },
    purchaseReasonMessages: {
      trial_expired: "体験期間が終了しました。プレミアム購読が必要です。",
      premium_expired: "プレミアム購読が終了しました。更新してください。",
      nonpremium_existing: "このアカウントにはプレミアムがありません。購入が必要です。",
      device_conflict: "このデバイスは他のアカウントに紐づけられています。プレミアム購読が必要です。",
      device_limit: "このアカウントは10台以上のデバイスに接続されています。プレミアム購読が必要です。",
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
    alreadySubscribedConflict: "检测到先前订阅",
    alreadySubscribedConflictDesc: "该设备已在其他账户中订阅。\n\n是否将此订阅转移到当前账户？\n如需继续使用原账户，请重新登录。",
    confirm: "确认",
    cancel: "取消",
    switchAccount: "切换到此账号",
    transferFail: "切换失败",
    noPurchasesFound: "没有可用的购买记录。",
    fetchError: "无法获取购买信息。",
    desc: {
      sub_premium_3m: "3个月高级订阅",
      sub_premium_6m: "6个月高级订阅",
      sub_premium_12m: "12个月高级订阅"
    },
    purchaseReasonMessages: {
      trial_expired: "试用期已结束，需要购买高级订阅。",
      premium_expired: "高级订阅已过期，请续订。",
      nonpremium_existing: "此账户没有高级订阅，需要购买。",
      device_conflict: "该设备已绑定到其他账户，需要高级订阅。",
      device_limit: "此账户已连接超过10台设备，需要高级订阅。",
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
    alreadySubscribedConflict: "Đã phát hiện đăng ký trước đó",
    alreadySubscribedConflictDesc: "Thiết bị này đã được đăng ký bởi tài khoản khác.\n\nBạn có muốn chuyển đăng ký sang tài khoản này không?\nĐăng nhập lại để sử dụng tài khoản cũ.",
    confirm: "Xác nhận",
    cancel: "Hủy",
    switchAccount: "Chuyển sang tài khoản này",
    transferFail: "Chuyển đổi thất bại",
    noPurchasesFound: "Không tìm thấy giao dịch mua hợp lệ.",
    fetchError: "Không thể lấy thông tin giao dịch mua.",
    desc: {
      sub_premium_3m: "Đăng ký cao cấp 3 tháng",
      sub_premium_6m: "Đăng ký cao cấp 6 tháng",
      sub_premium_12m: "Đăng ký cao cấp 12 tháng"
    },
    purchaseReasonMessages: {
      trial_expired: "Thời gian dùng thử đã hết. Cần mua gói Premium.",
      premium_expired: "Gói Premium đã hết hạn. Vui lòng gia hạn.",
      nonpremium_existing: "Tài khoản này không có Premium. Cần mua gói Premium.",
      device_conflict: "Thiết bị này đã được liên kết với tài khoản khác. Cần gói Premium.",
      device_limit: "Tài khoản này đã được kết nối hơn 10 thiết bị. Cần gói Premium.",
    },
  },
  refreshSubscription: {
    ko: "🔄 구독 상태 갱신하기",
    en: "🔄 Refresh Subscription",
    ja: "🔄 購読を更新する",
    zh: "🔄 刷新订阅状态",
    vi: "🔄 Làm mới trạng thái gói đăng ký"
  }
};

// ✅ 안전한 파라미터 받기
let useParams: any;
try {
  const { useLocalSearchParams } = require("expo-router");
  useParams = useLocalSearchParams;
} catch {
  try {
    const { useSearchParams } = require("expo-router");
    useParams = useSearchParams;
  } catch {
    useParams = () => ({});
  }
}

export default function PurchaseScreen() {
  const [products, setProducts] = useState<RNIap.Subscription[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [currentSubscription, setCurrentSubscription] = useState<string | null>(
    null
  );
  const [refreshingStatus, setRefreshingStatus] = useState(false);

  const router = useRouter();
  const params = useParams();
  const rawReason = (params as any)?.reason;
  const reason = Array.isArray(rawReason) ? rawReason[0] : rawReason ?? null;

  const { t, language } = useLanguage();

  const getReasonMessage = (key: string) => {
    const msgs = translations[language]?.purchaseReasonMessages;
    return msgs?.[key] || translations["en"].purchaseReasonMessages[key];
  };

  const purchaseUpdateSub = useRef<
    ReturnType<typeof RNIap.purchaseUpdatedListener> | null
  >(null);
  const purchaseErrorSub = useRef<
    ReturnType<typeof RNIap.purchaseErrorListener> | null
  >(null);
  const inFlight = useRef<string | null>(null);
  const hasShownReasonAlert = useRef(false);

  /** ✅ 서버 검증 */
  const verifyAndFinish = async (purchase: RNIap.Purchase, fromRestore = false) => {
    const tokenStr =
      purchase.purchaseToken ?? purchase.transactionReceipt ?? "";
    if (!tokenStr) {
      console.warn("⚠️ [verifyAndFinish] token 없음, purchase:", purchase);
      return;
    }
    if (inFlight.current) {
      console.log("⏸️ [verifyAndFinish] 이미 처리 중:", inFlight.current);
      return;
    }
    inFlight.current = tokenStr;

    console.log("🚀 [verifyAndFinish] 시작", {
      productId: purchase.productId,
      transactionId: purchase.transactionId,
      token: tokenStr.slice(0, 10) + "...",
    });

    try {
      const authToken = await AsyncStorage.getItem("authToken");
      if (!authToken) return;

      const res = await fetch(`${API_BASE_URL}/api/purchase/verify-receipt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          productId: purchase.productId,
          transactionId: purchase.transactionId ?? null,
          receipt:
            purchase.transactionReceipt || purchase.purchaseToken || "",
          platform: Platform.OS,
        }),
      });

      const json = await res.json();
      console.log("🔎 [verifyAndFinish] server response:", json);

   //   if (res.ok && json?.success) {
      if (res.ok && (json?.success || json?.status === "ok")) {
        console.log("✅ [verifyAndFinish] 서버 검증 성공");
        if (Platform.OS === "android" && !purchase.isAcknowledgedAndroid) {
          try {
            await RNIap.finishTransaction({ purchase, isConsumable: false });
            console.log("🔑 finishTransaction 완료");
          } catch (ackErr) {
            console.warn("⚠️ [verifyAndFinish] finishTransaction error:", ackErr);
          }
        }

        if (json.token) await AsyncStorage.setItem("authToken", json.token);
          console.log("💾 [verifyAndFinish] authToken 저장 완료");
        if (json.user) {
          await AsyncStorage.setItem(
            "currentUser",
            JSON.stringify({
              ...json.user,
              isPremium: true,
              trialExpired: false,
            })
          );
          console.log("💾 [verifyAndFinish] currentUser 저장 완료");
          if (json.user.premium_expires_at) {
            await AsyncStorage.setItem(
              "premiumExpiresAt",
              String(json.user.premium_expires_at)
            );
          }
        }
        await AsyncStorage.setItem("premiumActive", "true");
        setCurrentSubscription("active");

        Alert.alert(
          safeText(t.success, "Success"),
          safeText(t.purchaseSuccess, "Purchase success"),
          [
            {
              text: safeText(t.confirm, "확인"),
              onPress: async () => {
                // ✅ 저장 완료 후 약간 지연 주고 라우팅
                setTimeout(() => {
                  router.replace("/screens/TopicSelectScreen");
                }, 300);
              },
            },
          ]
        );
      } else {
        if (!fromRestore) {   // ⬅️ 복구 흐름에서는 실패 Alert 띄우지 않음
          Alert.alert(
            safeText(t.error, "Error"),
            safeText(json?.message, t.verifyFail || "Verification failed"),
            [
              {
                text: safeText(t.confirm, "확인"),
                onPress: () => router.replace("/login"),
              },
            ]
          );
        }
      }
    } catch (e: any) {
      console.warn("❌ verifyAndFinish error:", e);
      Alert.alert(
        safeText(t.error, "Error"),
        safeText(t.purchaseFail, "Purchase failed"),
        [
          {
            text: safeText(t.confirm, "확인"),
            onPress: () => router.replace("/login"),
          },
        ]
      );
    } finally {
      inFlight.current = null;
      setLoadingPurchase(false);
      console.log("🏁 [verifyAndFinish] 종료");
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
      const order = ["sub_premium_3m", "sub_premium_6m", "sub_premium_12m"];
      items.sort(
        (a, b) => order.indexOf(a.productId) - order.indexOf(b.productId)
      );
      setProducts(items);

      // 📥 구매 리스너 등록
      purchaseUpdateSub.current = RNIap.purchaseUpdatedListener(
        async (purchase) => {
          try {
            console.log("📥 [purchaseUpdatedListener] 호출됨:", purchase);
            console.log("purchase.raw", purchase);

            if (purchase.dataAndroid) {
              try {
                console.log("purchase.dataAndroid", JSON.parse(purchase.dataAndroid));
              } catch (err) {
                console.warn("⚠️ purchase.dataAndroid JSON parse error:", err);
              }
            }

            if (Platform.OS === "android") {
              const state = purchase.purchaseStateAndroid;
              console.log("📊 state:", state);

              // PURCHASED: 1, PENDING: 2
              if (state === 1 || purchase.transactionReceipt) {
                console.log("🎉 구매 완료 → verifyAndFinish 호출");
                await verifyAndFinish(purchase);
              } else if (state === 2) {
                console.log("⏳ 구매 대기 중");
              } else {
                console.warn("⚠️ 처리 안 된 상태:", state);
              }
            } else {
              if (purchase.transactionReceipt) {
                console.log("🎉 iOS 구매 완료 → verifyAndFinish 호출");
                await verifyAndFinish(purchase);
              }
            }
          } catch (err) {
            console.error("❌ purchaseUpdatedListener error:", err);
          } finally {
            setLoadingProducts(false);
          }
        }
      );

      // 📥 구매 에러 리스너 등록
      purchaseErrorSub.current = RNIap.purchaseErrorListener(async (e) => {
        console.warn("❌ purchaseErrorListener:", e);

        if (e.code === "E_ALREADY_OWNED") {
          console.log("⚠️ 이미 소유 중 → 복구 시도");
          try {
            const availablePurchases = await RNIap.getAvailablePurchases();
            console.log("📦 getAvailablePurchases:", availablePurchases);

            if (availablePurchases.length > 0) {
              const latestPurchase = availablePurchases.sort(
                (a, b) => (b.transactionDate || 0) - (a.transactionDate || 0)
              )[0];
              console.log("🎉 복구된 구매 → verifyAndFinish 호출");
              await verifyAndFinish(latestPurchase, true);
            }
          } catch (restoreErr) {
            console.error("❌ getAvailablePurchases error:", restoreErr);
          }
          return; // ✅ 팝업 띄우지 않고 리턴
        }

        if (e.code === "E_USER_CANCELLED") {
          Alert.alert(
            safeText(t.error, "Error"),
            safeText(t.purchaseCanceled, "Purchase canceled"),
            [
              {
                text: safeText(t.confirm, "확인"),
                onPress: () => router.replace("/login"), // ⬅️ 취소 시 로그인으로
              },
            ]
          );
        } else {
          Alert.alert(
            safeText(t.error, "Error"),
            safeText(
              e?.debugMessage || e?.message,
              t.purchaseFail || "Purchase failed"
            ),
            [
              {
                text: safeText(t.confirm, "확인"),
                onPress: () => router.replace("/login"), // ⬅️ 에러 시 로그인으로
              },
            ]
          );
        }
        setLoadingPurchase(false);
      });
    } catch (err) {
      console.error("❌ loadProducts error:", err);
      Alert.alert("오류", "상품 정보를 불러오는 중 문제가 발생했습니다.");
    } finally {
      setLoadingProducts(false);
    }
  };

  /** ✅ 구매 요청 */
  const handlePurchase = async (productId: string) => {
    if (currentSubscription === "active") {
      Alert.alert(
        safeText(t.alreadySubscribedConflict, "Already subscribed to premium"),
        safeText(t.alreadySubscribedConflictDesc, "This device has a subscription linked to another account.\n\nDo you want to transfer the subscription to this account?\nYou can log in again to use the previous account."),
        [
          {
            text: safeText(t.cancel, "취소"),
            style: "cancel",
            onPress: () => router.replace("/login"),
          },
          {
            text: safeText(t.confirm, "확인"),
            onPress: () =>
              Linking.openURL(
                "https://play.google.com/store/account/subscriptions"
              ),
          },
        ]
      );
      return;
    }

    setLoadingPurchase(true);
    try {
      const product = products.find(
        (p) => p.productId === productId
      ) as RNIap.SubscriptionAndroid;
      const offer = product.subscriptionOfferDetails?.[0];
      const offerToken = offer?.offerToken;
      if (!offerToken) {
        Alert.alert(
          safeText(t.error, "Error"),
          safeText(
            t.noProductsAvailable,
            "No available subscription. Please try again later."
          )
        );
        return;
      }

      await RNIap.requestSubscription({
        sku: productId,
        subscriptionOffers: [{ sku: productId, offerToken }],
        andDangerouslyFinishTransactionAutomatically: false,
      } as any);
    } catch (err: any) {
      Alert.alert(
        safeText(t.error, "Error"),
        safeText(err?.message || t.purchaseFail, "Purchase failed")
      );
    } finally {
      setLoadingPurchase(false);
    }
  };

  /** ✅ 구독 상태 새로고침 */
  const refreshPurchaseStatus = async () => {
    setRefreshingStatus(true);
    try {
      const authToken = await AsyncStorage.getItem("authToken");
      if (!authToken) throw new Error("No auth token");

      const res = await axios.get(`${API_BASE_URL}/api/purchase/status`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      const expiresAt = res.data?.premium_expires_at
        ? new Date(res.data.premium_expires_at)
        : null;

      const active = !!(expiresAt && expiresAt.getTime() > Date.now());

      if (active) {
        await AsyncStorage.setItem("premiumActive", "true");
        await AsyncStorage.setItem(
          "premiumExpiresAt",
          expiresAt!.toISOString()
        );
        setCurrentSubscription("active");
      } else {
        await AsyncStorage.removeItem("premiumActive");
        setCurrentSubscription(null);
      }
    } catch (err: any) {
      console.error("❌ refreshPurchaseStatus error:", err);
      Alert.alert("오류", "구독 상태 확인에 실패했습니다.");
    } finally {
      setRefreshingStatus(false);
    }
  };

  // ✅ 최초 진입 시
  useEffect(() => {
    loadProducts().then(() => {
      if (reason && products.length > 0 && !hasShownReasonAlert.current) {
        let message = getReasonMessage(reason);
        if (reason === "nonpremium_new") {
          message = getReasonMessage("nonpremium_existing");
        }

        if (message) {
          hasShownReasonAlert.current = true;
          Alert.alert(safeText(t.error, "구매 안내"), message, [
            {
              text: safeText(t.cancel, "취소"),
              style: "cancel",
              onPress: () => router.replace("/login"),
            },
            {
              text: safeText(t.confirm, "구매하기"),
              onPress: () => handlePurchase(products[0].productId),
            },
          ]);
        }
      }
    });

    return () => {
      try {
        purchaseUpdateSub.current?.remove();
      } catch {}
      try {
        purchaseErrorSub.current?.remove();
      } catch {}
      RNIap.endConnection().catch((err) =>
        console.warn("endConnection error:", err)
      );
    };
  }, []);


  /** ✅ UI 렌더링 */
  const renderProduct = (p: RNIap.Subscription) => {
    const desc =
      (t?.desc && t?.desc?.[p.productId]) || p.title || p.productId;
    const price = (p as any)?.localizedPrice || "";

    return (
      <View key={p.productId} style={styles.productCard}>
        <Text style={styles.productTitle}>{safeText(desc, p.productId)}</Text>
        <Text style={styles.productPrice}>{safeText(price, "")}</Text>
        <TouchableOpacity
          style={[
            styles.buyButton,
            (currentSubscription === "active" || loadingPurchase) &&
              styles.buyButtonDisabled,
          ]}
          onPress={() => handlePurchase(p.productId)}
          disabled={currentSubscription === "active" || loadingPurchase}
        >
          <Text style={styles.buyButtonText}>
            {safeText(t.buyNow, "Buy Now")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        🛒 {safeText(t.premiumMembership, "Premium Membership")}
      </Text>

      {/* 새로고침 버튼 */}
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={refreshPurchaseStatus}
        disabled={refreshingStatus}
      >
        {refreshingStatus ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.refreshButtonText}>
            {safeText(
              translations.refreshSubscription[language],
              "🔄 Refresh Subscription"
            )}
          </Text>
        )}
      </TouchableOpacity>

      {loadingProducts ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text>{safeText(t.loading, "Loading...")}</Text>
        </View>
      ) : (
        <>
          {products.map(renderProduct)}
          {products.length === 0 && (
            <Text style={styles.emptyText}>
              {safeText(t.noProductsAvailable, "No products available")}
            </Text>
          )}
          {loadingPurchase && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007AFF" />
              <Text>{safeText(t.loading, "Loading...")}</Text>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#222' },
  productCard: {
    backgroundColor: '#FAFAFA',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  productTitle: { fontSize: 17, fontWeight: '600', marginBottom: 6, color: '#333' },
  productPrice: { fontSize: 16, fontWeight: 'bold', color: '#007AFF', marginBottom: 12 },
  buyButton: { backgroundColor: '#007AFF', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  buyButtonDisabled: { backgroundColor: '#A0A0A0' },
  buyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  loadingContainer: { alignItems: 'center', justifyContent: 'center', padding: 20 },
  activeSubscription: { backgroundColor: '#E8F5E8', padding: 16, borderRadius: 12, marginBottom: 20, alignItems: 'center' },
  activeText: { fontSize: 15, color: '#2E7D32', marginBottom: 10 },
  manageButton: { backgroundColor: '#2E7D32', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 6 },
  manageButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  emptyText: { textAlign: 'center', fontSize: 15, color: '#666', marginTop: 20 },
  refreshButton: {
    backgroundColor: "#FF9800",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  refreshButtonText: { color: "#fff", fontSize: 15, fontWeight: "bold" },
});