// ✅ WordBookScreen.tsx (code 필드 없는 구조 대응 완성본)
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, BackHandler } from "react-native";
import { useLanguage } from "../../hooks/useLanguage";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import { wordbooks } from "../../constants/wordBook";

// ✅ 품사 다국어 매핑
const partOfSpeechLabels: Record<string, Record<string, string>> = {
  noun: { en: "noun", ko: "명사", ja: "名詞", zh: "名词", vi: "danh từ" },
  verb: { en: "verb", ko: "동사", ja: "動詞", zh: "动词", vi: "động từ" },
  adjective: { en: "adjective", ko: "형용사", ja: "形容詞", zh: "形容词", vi: "tính từ" },
  adverb: { en: "adverb", ko: "부사", ja: "副詞", zh: "副词", vi: "trạng từ" },
  pronoun: { en: "pronoun", ko: "대명사", ja: "代名詞", zh: "代词", vi: "đại từ" },
  conjunction: { en: "conjunction", ko: "접속사", ja: "接続詞", zh: "连词", vi: "liên từ" },
  preposition: { en: "preposition", ko: "전치사", ja: "前置詞", zh: "介词", vi: "giới từ" },
  interjection: { en: "interjection", ko: "감탄사", ja: "感嘆詞", zh: "感叹词", vi: "thán từ" },
  determiner: { en: "determiner", ko: "한정사", ja: "限定詞", zh: "限定词", vi: "từ hạn định" },
  article: { en: "article", ko: "관사", ja: "冠詞", zh: "冠词", vi: "mạo từ" },
  modal: { en: "modal verb", ko: "조동사", ja: "助動詞", zh: "情态动词", vi: "động từ khuyết thiếu" },
};

// ✅ 다국어 헤더 텍스트
const headerLabels: Record<string, string> = {
  ko: "📘 단어장",
  en: "📘 Wordbook",
  zh: "📘 单词本",
  ja: "📘 単語帳",
  vi: "📘 Sổ từ vựng",
};

// ✅ 규칙 다국어
const ruleLabels: Record<string, Record<string, string>> = {
  title: {
    en: "📖 Usage Rules",
    ko: "📖 활용 규칙",
    ja: "📖 活用ルール",
    zh: "📖 活用规则",
    vi: "📖 Quy tắc sử dụng",
  },
  adjective: {
    en: "• Adjective: base - comparative - superlative, adverb",
    ko: "• 형용사: 원형 - 비교급 - 최상급, 부사형",
    ja: "• 形容詞: 原級 - 比較級 - 最上級、副詞形",
    zh: "• 形容词: 原级 - 比较级 - 最高级, 副词",
    vi: "• Tính từ: gốc - so sánh hơn - so sánh nhất, trạng từ",
  },
  verb: {
    en: "• Verb: base - past - past participle - progressive",
    ko: "• 동사: 원형 - 과거형 - 과거분사형 - 진행형",
    ja: "• 動詞: 原形 - 過去形 - 過去分詞 - 進行形",
    zh: "• 动词: 原形 - 过去式 - 过去分词 - 进行式",
    vi: "• Động từ: gốc - quá khứ - quá khứ phân từ - tiếp diễn",
  },
};

// ✅ 단어 카드 컴포넌트
const WordCard: React.FC<{ item: any }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();
  const listSep = (lang: string) => (lang === "ja" ? "、 " : lang === "zh" ? "， " : ", ");

  // meaning 값을 문자열로 정규화
  const formatMeaning = (val: any, lang: string): string => {
    if (!val) return "";
    if (typeof val === "string") return val.trim();

    // 배열: ["의미1","의미2"] 또는 [{ko:"…"}, "…"] 등
    if (Array.isArray(val)) {
      return val
        .map((m) =>
          typeof m === "string"
            ? m
            : (m?.[lang] ?? m?.ko ?? m?.en ?? Object.values(m ?? {})[0] ?? "")
        )
        .filter(Boolean)
        .join(listSep(lang));
    }

    // 객체: { ko:[…], en:[…] } 또는 { ko:"…" }
    if (typeof val === "object") {
      const picked =
        val?.[lang] ?? val?.ko ?? val?.en ?? Object.values(val ?? {})[0];
      return formatMeaning(picked, lang);
    }

    return String(val);
  };

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.card}>
      <Text style={styles.word}>
        {item.word} {item.ipa && <Text style={styles.ipa}>{item.ipa}</Text>}
      </Text>

      {expanded && (
        <View style={styles.details}>
          {Object.entries(item.meanings || {}).map(([pos, data]: any) => {
            const meaningText = formatMeaning(data?.meaning, language);

            return (
              <View key={pos} style={styles.block}>
                 <Text style={styles.label}>
                   {partOfSpeechLabels[pos]?.[language] || pos}:
                 </Text>
                 {meaningText ? <Text>- {meaningText}</Text> : null}

                 {data.example && (
                   <Text style={styles.example}>
                      {data.example.en}
                      {"\n"}👉 {data.example[language] || ""}
                   </Text>
                 )}
              </View>
            );
          })}

        </View>
      )}
      <Text style={styles.hint}>{expanded ? "▲ 접기" : "▼ 펼치기"}</Text>
    </TouchableOpacity>
  );
};

// ✅ 메인 WordBookScreen
export default function WordBookScreen() {
  const router = useRouter();
  const { topicKey, level, sceneCode } = useLocalSearchParams<{
    topicKey: string;
    level: string;
    sceneCode: string;
  }>();

  const { language } = useLanguage();
  const topicKeySafe = topicKey?.toLowerCase() || "";
  const topicWordbook = wordbooks[topicKeySafe];

  if (!topicWordbook) {
    console.warn("[WordBook] No wordbook for topic:", topicKey);
    return null;
  }

  const levelData = topicWordbook?.[level];
  let currentScene: any = null;

  // ✅ code 없이 index 기반 자동 매칭
  if (Array.isArray(levelData)) {
    // sceneCode 예: "business_beginner_3"
    const match = sceneCode?.match(/_(\d+)$/);
    const index = match ? parseInt(match[1], 10) - 1 : 0;
    currentScene = levelData[index] || levelData[0];
  }

  const words = currentScene?.words || [];
  const sceneTitle =
    typeof currentScene?.description === "object"
      ? currentScene.description[language] ||
        currentScene.description.ko ||
        currentScene.description.en
      : currentScene?.description || sceneCode;

  // ✅ 하드웨어 백버튼 처리
  useFocusEffect(
    React.useCallback(() => {
      const sub = BackHandler.addEventListener("hardwareBackPress", () => {
        if ((router as any).canGoBack?.()) router.back();
        else
          router.replace({
            pathname: "/screens/ChatScreen",
            params: { topicKey, level },
          });
        return true;
      });
      return () => sub.remove();
    }, [router, topicKey, level])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {headerLabels[language] || headerLabels.en} - {topicKey}
      </Text>
      <Text style={styles.sceneTitle}>- {sceneTitle} -</Text>

      <View style={styles.ruleBox}>
        <Text style={styles.ruleTitle}>{ruleLabels.title[language]}</Text>
        <Text style={styles.ruleText}>{ruleLabels.adjective[language]}</Text>
        <Text style={styles.ruleText}>{ruleLabels.verb[language]}</Text>
      </View>

      <FlatList
        data={words}
        keyExtractor={(item, idx) => item.word + idx}
        renderItem={({ item }) => <WordCard item={item} />}
      />
    </View>
  );
}

// ✅ 스타일 정의
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f9", padding: 12 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10, padding: 20 },
  card: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  word: { fontSize: 18, fontWeight: "bold" },
  ipa: { fontSize: 14, color: "#888" },
  details: { marginTop: 6, marginBottom: 6 },
  block: { marginBottom: 10 },
  label: { fontWeight: "bold", marginTop: 6 },
  example: { fontStyle: "italic", marginTop: 4, color: "#333" },
  hint: { textAlign: "right", fontSize: 12, color: "#007AFF" },
  sceneTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#007AFF",
    textAlign: "center",
  },
  ruleBox: {
    backgroundColor: "#eef6ff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#cce0ff",
  },
  ruleTitle: { fontWeight: "bold", marginBottom: 6, color: "#0057D9" },
  ruleText: { fontSize: 14, marginBottom: 4, color: "#333" },
});
