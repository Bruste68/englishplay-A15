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

// ✅ 다국어 토글 및 복수형 라벨
const uiLabels = {
  plural: {
    en: "Plural",
    ko: "복수형",
    ja: "複数形",
    zh: "复数形式",
    vi: "số nhiều",
  },
  expand: {
    en: "▼ Expand",
    ko: "▼ 펼치기",
    ja: "▼ 展開",
    zh: "▼ 展开",
    vi: "▼ Mở rộng",
  },
  collapse: {
    en: "▲ Collapse",
    ko: "▲ 접기",
    ja: "▲ 折りたたむ",
    zh: "▲ 收起",
    vi: "▲ Thu gọn",
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

                {/* ✅ 명사: 복수형 표시 */}
                {pos === "noun" && data.plural && (
                  <Text style={styles.subform}>
                    • {uiLabels.plural[language] || uiLabels.plural.en}: {data.plural}
                  </Text>
                )}

                {/* ✅ 동사: 시제 변화 표시 */}
                {pos === "verb" && data.forms && (
                  <Text style={styles.subform}>
                    • {item.word} - {data.forms.past} - {data.forms.past_participle} - {data.forms.progressive}
                  </Text>
                )}

                {/* ✅ 형용사: 비교급/최상급/부사형 표시 */}
                {pos === "adjective" && data.forms && (
                  <Text style={styles.subform}>
                    • {item.word} - {data.forms.comparative} - {data.forms.superlative}
                    {data.forms.adverb ? `, adverb: ${data.forms.adverb}` : ""}
                  </Text>
                )}

                {/* ✅ 예문 */}
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

      {/* ✅ 다국어 토글 버튼 */}
      <Text style={styles.hint}>
        {expanded
          ? uiLabels.collapse[language] || uiLabels.collapse.en
          : uiLabels.expand[language] || uiLabels.expand.en}
      </Text>
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

// ✅ 스타일 정의 (가독성 강화 버전)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbff",
    padding: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111", // ✅ 진한색으로 변경
    textAlign: "center",
    marginBottom: 10,
    paddingVertical: 10,
  },
  sceneTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0070F3",
    textAlign: "center",
    marginBottom: 14,
  },
  ruleBox: {
    backgroundColor: "#e8f0ff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#bcd4ff",
  },
  ruleTitle: {
    fontWeight: "bold",
    color: "#0040A0",
    fontSize: 16,
    marginBottom: 8,
  },
  ruleText: {
    fontSize: 15,
    color: "#1a1a1a",
    lineHeight: 22,
    marginBottom: 4,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 0.8,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  word: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000", // ✅ 확실히 진하게
    marginBottom: 4,
    lineHeight: 26,
  },
  ipa: {
    fontSize: 15,
    color: "#444", // ✅ IPA 가독성 향상
    marginLeft: 4,
  },
  details: {
    marginTop: 8,
    marginBottom: 8,
  },
  block: {
    marginBottom: 12,
  },
  label: {
    fontWeight: "700",
    marginTop: 8,
    fontSize: 15,
    color: "#111",
  },
  example: {
    fontStyle: "italic",
    marginTop: 6,
    color: "#222", // ✅ Android 대비 강화
    fontSize: 15,
    lineHeight: 22,
  },
  subform: {
    color: "#333",
    fontSize: 14,
    marginTop: 2,
    lineHeight: 20,
  },
  hint: {
    textAlign: "right",
    fontSize: 13,
    color: "#007AFF",
    fontWeight: "600",
  },
});
