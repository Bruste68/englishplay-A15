import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  Platform, Alert, 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL } from "../../lib/api";
import { allDialogs } from "../../constants/templateDialogs";
import { useLanguage } from "../../hooks/useLanguage";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
  VictoryStack,
  VictoryLegend,
  VictoryScatter,  // ✅ 추가
  VictoryLabel,    // ✅ 추가
} from "victory-native";
import { VictoryTheme } from "victory-native";

type Props = { compact?: boolean };

// 날짜 포맷 함수
function formatDay(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const month = d.getMonth() + 1; // 1~12 자동 계산
  return `${month}/${day}`;
}

function formatWeek(weekNum: number) {
  return `WW${String(weekNum).slice(-2)}`;
}

function formatMonth(monthStr: string) {
  const [year, month] = monthStr.split("-");
  const d = new Date(`${monthStr}-01`);
  const mon = d.toLocaleString("en-US", { month: "short" });
  const yy = year.slice(-2);
  return month === "01" ? `${mon}/${yy}` : mon;
}

// ✅ 날짜 + "일" 포맷 함수 (지난학습이력 전용)
function formatDateWithDay(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()}일`;
}

function ymdLocal(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ✅ 일간 8개 채우기
function fillMissingDays(raw: any[], days: number = 8) {
  const today = new Date();
  const result = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = ymdLocal(d);
    const found = raw.find((r) => (r.learned_date ?? r.learned_at) === key);
    result.push({
      day: formatDay(key),
      business: Number(found?.business) || 0,
      meeting: Number(found?.meeting) || 0,
      presentation: Number(found?.presentation) || 0,
      daily: Number(found?.daily) || 0,
      shopping: Number(found?.shopping) || 0,
      restaurant: Number(found?.restaurant) || 0,
      travel: Number(found?.travel) || 0,
      total: Number(found?.total) || 0,
      topic: found?.topic ?? null,
      scene: found?.scene ?? null,
      date: key,
    });
  }
  return result;
}

// ✅ 주간 8개 채우기
function getISOWeek(d: Date) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return date.getUTCFullYear() * 100 + weekNo; // 예: 202539
}

function fillMissingWeeks(raw: any[], weeks: number = 8) {
  const today = new Date();
  const result = [];
  for (let i = weeks - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i * 7);
    const key = getISOWeek(d);
    const found = raw.find((r) => r.week === key);
    result.push({
      week: formatWeek(key),
      business: Number(found?.business) || 0,
      meeting: Number(found?.meeting) || 0,
      presentation: Number(found?.presentation) || 0,
      daily: Number(found?.daily) || 0,
      shopping: Number(found?.shopping) || 0,
      restaurant: Number(found?.restaurant) || 0,
      travel: Number(found?.travel) || 0,
      total: Number(found?.total) || 0,
    });
  }
  return result;
}

// ✅ 월간 8개 채우기
function getYearMonthLocal(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function fillMissingMonths(raw: any[], months: number = 8) {
  const today = new Date();
  const result = [];
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const key = getYearMonthLocal(d);   // ✅ 로컬 기준 YYYY-MM
    const found = raw.find((r) => r.month === key);
    result.push({
      month: formatMonth(key),
      business: Number(found?.business) || 0,
      meeting: Number(found?.meeting) || 0,
      presentation: Number(found?.presentation) || 0,
      daily: Number(found?.daily) || 0,
      shopping: Number(found?.shopping) || 0,
      restaurant: Number(found?.restaurant) || 0,
      travel: Number(found?.travel) || 0,
      total: Number(found?.total) || 0,
    });
  }
  return result;
}

function RankBar({
  rank,
  totalUsers,
  label,
  color = "#4CAF50",
}: {
  rank: number;
  totalUsers?: number;
  label: string;
  color?: string;
}) {
  const hasData = !!(totalUsers && totalUsers > 1 && rank > 0);

  if (!hasData) {
    return (
      <View style={styles.noDataBox}>
        <Text style={styles.noDataText}>📉 No data</Text>
        <Text style={styles.noDataSub}>No learning data available.</Text>
      </View>
    );
  }

  const percent =
    totalUsers > 1 ? 100 * (1 - (rank - 1) / (totalUsers - 1)) : 100;

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ marginBottom: 4, fontWeight: "600", color: "#111" }}>
        {label}: Rank {rank}
      </Text>
      <View
        style={{
          height: 20,
          width: "100%",
          backgroundColor: "#eee",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            height: 20,
            width: `${percent}%`,
            backgroundColor: color,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

// scene 코드로 장면 제목 가져오기
function getSceneInfo(sceneCode?: string) {
  if (!sceneCode) return null;

  for (const topicKey in allDialogs) {
    const topic = allDialogs[topicKey];
    for (const levelKey in topic) {
      const scenes = topic[levelKey];
      const found = scenes.find((s) => s.code === sceneCode);
      if (found) {
        return {
          topic: topicKey,
          level: levelKey,
          description:
            typeof found.description === "string"
              ? found.description
              : found.description?.ko || found.description?.en || "",
        };
      }
    }
  }
  return null;
}

// ✅ 데이터 안전 처리 (최근 8개, null → 0 변환)
function normalizeChartData(data: any[], xKey: string) {
  if (!data || data.length === 0) return [];

  return data
    .filter((d) => d && d[xKey]) // xKey 없는 값 제거
    .slice(-8) // 최근 8개만
    .map((d) => ({
      ...d,
      business: Number(d.business) || 0,
      meeting: Number(d.meeting) || 0,
      presentation: Number(d.presentation) || 0,
      daily: Number(d.daily) || 0,
      shopping: Number(d.shopping) || 0,
      restaurant: Number(d.restaurant) || 0,
      travel: Number(d.travel) || 0, 
      total: Number(d.total) || 0,
    }));
}

function StudyChart({
  title,
  data,
  xKey,
}: {
  title: string;
  data: any[];
  xKey: "day" | "week" | "month";
}) {
  const { t, language } = useLanguage();

  const colors = [
    "#1976D2", "#FF9800", "#4CAF50", "#9C27B0",
    "#009688", "#795548", "#607D8B",
  ];
  const categories = [
    { key: "business", name: "Business" },
    { key: "meeting", name: "Meeting" },
    { key: "presentation", name: "Presentation" },
    { key: "daily", name: "Daily" },
    { key: "shopping", name: "Shopping" },
    { key: "restaurant", name: "Restaurant" },
    { key: "travel", name: "Travel" },
  ];

  const sliced =
    xKey === "day"
      ? fillMissingDays(data)
      : xKey === "week"
      ? fillMissingWeeks(data)
      : fillMissingMonths(data);

  // ✅ 전체 합계로 데이터 존재 여부 판단
  const totalSum = sliced.reduce((sum, d) => sum + (d.total || 0), 0);
  const hasData = totalSum > 0;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {!hasData ? (
        <View style={styles.noDataBox}>
          <Text style={styles.noDataText}>📊 No data</Text>
          <Text style={styles.noDataSub}>
            {language === "ko"
              ? "No learning data available."
              : "No learning data available."}
          </Text>
        </View>
      ) : (
        <>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{ x: 25, y: 20 }}
            padding={{ top: 20, bottom: 50, left: 50, right: 20 }}
          >
            <VictoryAxis
              tickValues={sliced.map((d) => d[xKey])}
              tickFormat={(t) => String(t)}
              style={{ tickLabels: { fill: "#333", fontSize: 10 } }}
            />
            <VictoryAxis dependentAxis tickFormat={(t) => `${t}`} />

            <VictoryStack colorScale={colors}>
              {categories.map((c) => (
                <VictoryBar key={c.key} data={sliced} x={xKey} y={c.key} />
              ))}
            </VictoryStack>

            <VictoryScatter
              data={sliced}
              x={xKey}
              y="total"
              size={3}
              labels={({ datum }) => (datum.total > 0 ? `${datum.total}` : "")}
              labelComponent={
                <VictoryLabel
                  dy={-8}
                  style={{ fill: "#111", fontSize: 12, fontWeight: "600" }}
                />
              }
            />
          </VictoryChart>

          <View
            style={{
              marginTop: 8,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {categories.map((c, i) => (
              <View
                key={c.key}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 12,
                  marginBottom: 4,
                }}
              >
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: colors[i],
                    marginRight: 4,
                  }}
                />
                <Text style={{ fontSize: 12, color: "#111" }}>{c.name}</Text>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
}

export default function MyDashboard({ compact = false }: Props) {
  const { t, language } = useLanguage(); // <- language 함께
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [premiumActive, setPremiumActive] = useState<boolean>(false);
  const [premiumExpiresAt, setPremiumExpiresAt] = useState<string | null>(null);
  const [trialEndAt, setTrialEndAt] = useState<string | null>(null);

  const [progress, setProgress] = useState<any>({});
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [weeklyData, setWeeklyData] = useState<any[]>([]);
  const [monthlyData, setMonthlyData] = useState<any[]>([]);
  const [lastStudy, setLastStudy] = useState<any | null>(null);
  const [voiceGender, setVoiceGender] = useState<"male" | "female" | null>(null);

  const topicLabel = (raw?: string) => {
    const dict: Record<string, Record<string,string>> = {
      business:   { ko: '비즈니스', en: 'Business' },
      meeting:    { ko: '회의',     en: 'Meeting' },
      presentation:{ ko:'발표',     en: 'Presentation'},
      daily:      { ko: '일상',     en: 'Daily' },
      shopping:   { ko: '쇼핑',     en: 'Shopping' },
      restaurant: { ko: '식당',     en: 'Restaurant' },
      travel:     { ko: '여행',     en: 'Travel' },
    };
    if (!raw) return '';
    const key = raw.toLowerCase();
    return dict[key]?.[language] ?? key;
  };

  const levelLabel = (raw?: string) => {
    const dict: Record<string, Record<string,string>> = {
      beginner:     { ko: 'Light',  en: 'Beginner' },
      intermediate: { ko: 'Middle', en: 'Intermediate' },
      advanced:     { ko: 'Heavy',  en: 'Advanced' },
    };
    if (!raw) return '';
    return dict[raw]?.[language] ?? raw;
  };

  const safeText = (val: any, language?: string) => {
    if (!val) return "[empty]";
    if (typeof val === "string") return val.trim() || "[empty]";
    if (typeof val === "object") {
      return val[language || "en"] || val.ko || val.en || "[empty]";
    }
    return String(val);
  };

  const [voiceType, setVoiceType] = useState<
    "male_standard" | "male_child" | "female_standard" | "female_child" | null
  >(null);

  /** ✅ Section 컴포넌트 정의 */
  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  // value가 문자열이면 그대로, 객체면 현재 언어 → ko → en 순으로 고름
  const pickI18n = (val: any) => {
    if (!val) return "[no text]";
    if (typeof val === "string") return val.trim() || "[empty]";
    return (
      val[language] ||
      val.ko ||
      val.en ||
      Object.values(val)[0] ||
      "[no translation]"
    );
  };

  useEffect(() => {
    AsyncStorage.getItem("voiceType").then((val) => {
      if (
        val === "male_standard" ||
        val === "male_child" ||
        val === "female_standard" ||
        val === "female_child"
      ) {
        setVoiceType(val);
      }
    });
  }, []);

  /** ✅ 데이터 로딩 */
  const load = async () => {
    setLoading(true);
    try {
      const u = await AsyncStorage.getItem("currentUser");
      const pa = await AsyncStorage.getItem("premiumActive");
      const pe = await AsyncStorage.getItem("premiumExpiresAt");
      if (u) {
        const parsed = JSON.parse(u);
        setUser(parsed);
        if (parsed.trial_start_at) {
          const trialEnd = new Date(parsed.trial_start_at);
          trialEnd.setDate(trialEnd.getDate() + 3);
          setTrialEndAt(trialEnd.toISOString());
        }
      }
      setPremiumActive(pa === "true");
      if (pe) setPremiumExpiresAt(pe);

      const authToken = await AsyncStorage.getItem("authToken");
      if (authToken) {
        const headers = { Authorization: `Bearer ${authToken}` };

        // 구독 상태
        try {
          const s = await axios.get(`${API_BASE_URL}/api/purchase/status`, { headers });
          if (s.data?.premium_expires_at) {
            setPremiumActive(new Date(s.data.premium_expires_at).getTime() > Date.now());
            setPremiumExpiresAt(s.data.premium_expires_at);
          }
          if (s.data?.trial_end_at) setTrialEndAt(s.data.trial_end_at);
        } catch {}

        // 학습 요약
        try {
          const r = await axios.get(`${API_BASE_URL}/api/progress/summary`, { headers });
          console.log("📡 summary raw:", r.data);
          setProgress(r.data?.data ?? {});
        } catch {}

        // 일간
        try {
          const r = await axios.get(`${API_BASE_URL}/api/progress/daily`, { headers });
          setDailyData(Array.isArray(r.data?.data) ? r.data.data : []);
        } catch {}

        // 주간
        try {
          const r = await axios.get(`${API_BASE_URL}/api/progress/weekly`, { headers });
          setWeeklyData(Array.isArray(r.data?.data) ? r.data.data : []);
        } catch {}

        // 월간
        try {
          const r = await axios.get(`${API_BASE_URL}/api/progress/monthly`, { headers });
          setMonthlyData(Array.isArray(r.data?.data) ? r.data.data : []);
        } catch {}

        // 최근 학습
        try {
          const r = await axios.get(`${API_BASE_URL}/api/progress/last`, { headers });
          console.log("🎬 lastStudy raw:", JSON.stringify(r.data, null, 2));
          setLastStudy(r.data?.data ?? null);
        } catch {}
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("voiceGender").then((val) => {
      if (val === "male" || val === "female") setVoiceGender(val);
    });
  }, []);

  const handleVoiceSelect = async (
    type: "male_standard" | "male_child" | "female_standard" | "female_child"
  ) => {
    setVoiceType(type);
    await AsyncStorage.setItem("voiceType", type);
  };

  if (loading) {
    return (
      <View style={{ padding: 20, alignItems: "center" }}>
        <ActivityIndicator />
        <Text style={{ marginTop: 8 }}>{t.dashboard.loading}</Text>
      </View>
    );
  }

  // ✅ 오늘 학습 시간은 summary에서 내려온 todayMinutes 사용
  const todayMinutes = progress.todayMinutes ?? 0;

  // ✅ 만료일 임박 여부 (3일 이내)
  const isExpiringSoon =
    premiumExpiresAt &&
    new Date(premiumExpiresAt).getTime() - Date.now() <
      3 * 24 * 60 * 60 * 1000;

  // ✅ 잔여일 계산
  let remainingDays: number | null = null;
  if (premiumActive && premiumExpiresAt) {
    const diff =
      new Date(premiumExpiresAt).getTime() - new Date().getTime();
    remainingDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  // ✅ 잔여 체험일 계산
  let remainingTrialDays: number | null = null;
  if (!premiumActive && trialEndAt) {
    const diff = new Date(trialEndAt).getTime() - new Date().getTime();
    remainingTrialDays = diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
  }

  // 지난 학습 이력 (dailyData 마지막 항목 기준)
  const todayKey = ymdLocal(new Date());
  const todayRow = dailyData.find(d => (d.learned_date ?? d.learned_at) === todayKey);

  return (
    <ScrollView style={[styles.container, compact && { paddingHorizontal: 12 }]}>
      {/* 계정/프로필 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.dashboard.myAccount}</Text>
        <Text style={styles.row}>
          {t.dashboard.id}: <Text style={styles.val}>{user?.userId ?? "guest"}</Text>
        </Text>

        {/* 상태 배지 */}
        {user?.is_admin ? (
          <Text style={[styles.badge, { backgroundColor: "#E3F2FD", color: "#0D47A1" }]}>
            {t.dashboard.admin}
          </Text>
        ) : premiumActive ? (
          <Text style={[styles.badge, { backgroundColor: "#E8F5E8", color: "#2E7D32" }]}>
            {t.dashboard.premium} {premiumExpiresAt ? `~ ${new Date(premiumExpiresAt).toLocaleString()}` : ""}{" "}
            {remainingDays !== null ? `(${t.dashboard.remainingDays.replace("{days}", remainingDays.toString())})` : ""}
          </Text>
        ) : remainingTrialDays !== null ? (
          <Text style={[styles.badge, { backgroundColor: "#E3F2FD", color: "#1565C0" }]}>{t.dashboard.trial}</Text>
        ) : (
          <Text style={[styles.badge, { backgroundColor: "#FFF3E0", color: "#E65100" }]}>{t.dashboard.freeUser}</Text>
        )}
      </View>

      {/* 구독/결제 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.dashboard.subscription}</Text>
        <Text style={styles.row}>
          {t.dashboard.status}:{" "}
          <Text style={styles.val}>
            {user?.is_admin ? t.dashboard.admin : premiumActive ? t.dashboard.premium : remainingTrialDays !== null ? t.dashboard.trial : t.dashboard.freeUser}
          </Text>
        </Text>
        {premiumExpiresAt && (
          <Text style={styles.row}>
            {t.dashboard.expiresAt}: <Text style={styles.val}>{new Date(premiumExpiresAt).toLocaleString()}</Text>
          </Text>
        )}
        {remainingDays !== null && (
          <Text style={styles.row}>
            {t.dashboard.remainingDays.replace("{days}", remainingDays.toString())}
          </Text>
        )}
        {remainingTrialDays !== null && (
          <Text style={styles.row}>
            {t.dashboard.remainingTrialDays.replace("{days}", remainingTrialDays.toString())}
          </Text>
        )}

        <View style={{ flexDirection: "row", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#007AFF" }]}>
            <Text style={styles.btnText}>{t.dashboard.subscribe}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: isExpiringSoon ? "#FF5722" : "#4CAF50" }]}>
            <Text style={styles.btnText}>{t.dashboard.extendSubscription}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#D32F2F" }]}>
            <Text style={styles.btnText}>{t.dashboard.cancelSubscription}</Text>
          </TouchableOpacity>
          {!compact && (
            <TouchableOpacity style={[styles.btn, { backgroundColor: "#FF9800" }]}>
              <Text style={styles.btnText}>{t.dashboard.refresh}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* 학습진도 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.dashboard.studyProgress}</Text>
        <Text style={styles.row}>
          {t.dashboard.totalMinutes}: <Text style={styles.val}>{progress.totalMinutes ?? "?"}min</Text>
        </Text>
        <Text style={styles.row}>
          {t.dashboard.todayMinutes}: <Text style={styles.val}>{todayMinutes ?? "?"}min</Text>
        </Text>
        {lastStudy ? (
          <Text style={styles.row}>
            {t.dashboard.lastStudy}:{" "}
            <Text style={styles.val}>
              {topicLabel(lastStudy.topic_from_scene)} - {levelLabel(lastStudy.level)}{" "}
              {
                safeText(lastStudy.scene_title, language) ||
                safeText(lastStudy.title, language) ||
                safeText(lastStudy.description, language)
              }
            </Text>
          </Text>
        ) : (
          <Text style={styles.row}>
            {t.dashboard.lastStudy}: <Text style={styles.val}>{t.dashboard.noStudyHistory}</Text>
          </Text>
        )}

      </View>

      {/* 학습 순위 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.dashboard.rank}</Text>
        <RankBar
          rank={progress.rankOverall ?? 0}
          totalUsers={progress.totalUsersOverall ?? 1}
          label={t.dashboard.overallRank ?? (language === 'ko' ? '전체 순위' : 'Overall rank')}
        />
        <RankBar
          rank={progress.rankBeginner ?? 0}
          totalUsers={progress.totalUsersBeginner ?? 1}
          label={t.dashboard.beginnerRank ?? (language === 'ko' ? '초급 순위' : 'Beginner rank')}
        //  label={t.dashboard.beginnerRank}
        />
        <RankBar
          rank={progress.rankIntermediate ?? 0}
          totalUsers={progress.totalUsersIntermediate ?? 1}
          label={t.dashboard.intermediateRank ?? (language === 'ko' ? '중급 순위' : 'Intermediate rank')}
         // label={t.dashboard.intermediateRank}
        />
        <RankBar
          rank={progress.rankAdvanced ?? 0}
          totalUsers={progress.totalUsersAdvanced ?? 1}
          label={t.dashboard.advancedRank ?? (language === 'ko' ? '고급 순위' : 'Advanced rank')}
        //  label={t.dashboard.advancedRank}
        />
      </View>

      {/* 학습 그래프 */}
      <StudyChart title={t.dashboard.dailyChart} data={dailyData} xKey="day" />
      <StudyChart title={t.dashboard.weeklyChart} data={weeklyData} xKey="week" />
      <StudyChart title={t.dashboard.monthlyChart} data={monthlyData} xKey="month" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  section: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#eee",
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 10, color: "#111" },
  row: { fontSize: 14, color: "#222", marginBottom: 4 }, 
  val: { fontWeight: "600", color: "#000" }, 
  badge: {
    marginTop: 6,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    overflow: "hidden",
  },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 },
  btnText: { color: "#fff", fontWeight: "700" },
  link: { color: "#007AFF", fontSize: 15, marginBottom: 8 },
  graphPlaceholder: {
    marginTop: 10,
    height: 120,
    backgroundColor: "#EDEDED",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  noDataBox: {
    backgroundColor: "#F2F2F2",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 8,
  },
  noDataText: {
    color: "#444",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  noDataSub: {
    color: "#777",
    fontSize: 13,
    textAlign: "center",
  },
});
