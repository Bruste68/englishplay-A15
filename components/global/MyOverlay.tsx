import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { useOverlay } from "../../context/OverlayContext";
import { useRouter } from "expo-router";
import MyDashboard from "../my/MyDashboard";
import * as Localization from "expo-localization";

const H = Math.round(Dimensions.get("window").height * 0.85);

// ✅ 기기 언어별 번역 리소스
const translations = {
  en: { myInfo: "My Info", viewAll: "View All", close: "Close" },
  ko: { myInfo: "내 정보", viewAll: "전체보기", close: "닫기" },
  ja: { myInfo: "マイ情報", viewAll: "すべて表示", close: "閉じる" },
  zh: { myInfo: "我的信息", viewAll: "查看全部", close: "关闭" },
  vi: { myInfo: "Thông tin", viewAll: "Xem tất cả", close: "Đóng" },
};

// ✅ 기기 언어 감지 함수
function getDeviceLang() {
  try {
    const locales = Localization.getLocales();
    if (Array.isArray(locales) && locales.length > 0) {
      const code = (locales[0].languageCode || "en").toLowerCase();
      if (code.startsWith("ko")) return "ko";
      if (code.startsWith("ja")) return "ja";
      if (code.startsWith("zh")) return "zh";
      if (code.startsWith("vi")) return "vi";
      return "en";
    }
  } catch (e) {
    console.warn("Localization error:", e);
  }
  return "en";
}

export default function MyOverlay() {
  const { myVisible, closeMy } = useOverlay();
  const router = useRouter();
  const slide = useRef(new Animated.Value(H)).current;

  // ✅ 기기 언어 상태
  const [lang, setLang] = useState(getDeviceLang());
  const t = translations[lang] || translations.en;

  useEffect(() => {
    // 기기 언어 변경 시 반영
    setLang(getDeviceLang());
  }, []);

  useEffect(() => {
    Animated.timing(slide, {
      toValue: myVisible ? 0 : H,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [myVisible]);

  return (
    <Modal visible={myVisible} transparent animationType="none" onRequestClose={closeMy}>
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={closeMy} />
      <Animated.View style={[styles.sheet, { transform: [{ translateY: slide }] }]}>

        {/* 대시보드 (요약모드) */}
        <MyDashboard compact />
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.25)" },
  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: H,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 8,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 16, fontWeight: "700", color: "#111" },
  link: { color: "#007AFF", fontWeight: "600" },
});
