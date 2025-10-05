import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleFindPassword = async () => {
    if (!email) {
      Alert.alert('이메일을 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('http://47.237.71.231:5000/api/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('오류', data.message || '등록되지 않은 이메일입니다.');
        return;
      }

      Alert.alert(`비밀번호는: ${data.password}`);
    } catch (err) {
      console.error('비밀번호 조회 실패:', err);
      Alert.alert('서버 연결 실패');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 찾기</Text>

      <TextInput
        style={styles.input}
        placeholder="이메일 입력"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleFindPassword}>
        <Text style={styles.buttonText}>비밀번호 확인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 16 },
  button: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8 },
  buttonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
});
