import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { API_BASE_URL } from '../../lib/api';

export default function RegisterScreen() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 🔧 생년월일 포맷 함수
  const formatBirth = (raw: string) => {
    if (/^\d{8}$/.test(raw)) {
      return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
    }
    return raw; // 이미 형식이 맞는 경우 그대로
  };

  const handleRegister = async () => {
    console.log('🚀 회원가입 버튼 클릭됨');
    console.log('📡 API 주소:', API_BASE_URL);

    if (!userId || !name || !birth || !password || !confirmPassword) {
      Alert.alert('오류', '모든 항목을 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('오류', '비밀번호가 일치하지 않습니다.');
      return;
    }

    const formattedBirth = formatBirth(birth);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(formattedBirth)) {
      Alert.alert('오류', '생년월일 형식은 YYYY-MM-DD 또는 YYYYMMDD 이어야 합니다.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/api/signup`, {
        id: userId,
        name,
        birth: formattedBirth,
        password,
      });
      console.log('✅ 서버 응답:', res.data);
      Alert.alert('회원가입 완료', '이제 로그인해주세요.', [
        { text: '확인', onPress: () => router.replace('/login') },
      ]);
    } catch (error: any) {
      console.error('❌ 요청 실패:', error.message);
      Alert.alert('회원가입 실패', error.response?.data?.message || '오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>

      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="생년월일 (YYYY-MM-DD 또는 YYYYMMDD)"
        value={birth}
        onChangeText={setBirth}
        keyboardType="numeric"
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>가입하기</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 32, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
