import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useLanguage, translations, LanguageCode } from '../hooks/useLanguage';
import { Image } from 'react-native';

const languages: { code: LanguageCode; label: string; emoji: string }[] = [
  { code: 'en', label: 'English', emoji: '🇺🇸' },
  { code: 'ko', label: '한국어', emoji: '🇰🇷' },
  { code: 'zh', label: '中文', emoji: '🇨🇳' },
  { code: 'ja', label: '日本語', emoji: '🇯🇵' },
  { code: 'vi', label: 'Tiếng Việt', emoji: '🇻🇳' },
];

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const { setLanguage } = useLanguage();

  const selectLanguage = async (code: string) => {
    try {
      console.log('📌 언어 선택됨:', code);
      await setLanguage(code as LanguageCode);
      console.log('✅ 언어 상태 업데이트 완료');
      router.replace('/login'); // 체험/구매 판단은 로그인에서 처리
    } catch (error) {
      console.error('Language selection error:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{ width: 80, height: 80, resizeMode: 'contain' }}
          />
          <Text style={styles.title}> SamSpeak </Text>

          {languages.map(({ code, label, emoji }) => (
            <TouchableOpacity
              key={code}
              style={styles.cardButton}
              onPress={() => selectLanguage(code)}
            >
              <Text style={styles.cardText}>{emoji} {label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#fdfaf5',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3e3e3e',
    marginBottom: 80,
  },
  cardButton: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
 //   fontFamily: Platform.OS === 'android' ? 'sans-serif' : undefined,
  }
});
