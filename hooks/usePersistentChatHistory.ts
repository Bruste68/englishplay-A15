import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Message } from '../types'; // ✅ types.ts 연결

export function usePersistentChatHistory() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      saveMessages();
    }
  }, [messages]);

  const loadMessages = async () => {
    try {
      const stored = await AsyncStorage.getItem('chat_messages');
      if (stored) {
        setMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error('❌ 대화 불러오기 실패:', e);
    }
  };

  const saveMessages = async () => {
    try {
      await AsyncStorage.setItem('chat_messages', JSON.stringify(messages));
    } catch (e) {
      console.error('❌ 대화 저장 실패:', e);
    }
  };

  /**
   * ✅ addMessage 개선
   * - topicKey: 대화 주제
   * - sender: 'user' | 'ai'
   * - text: 메시지 내용
   * - metadata: audioFile, isTemplate, extra 등
   */
  const addMessage = (
    topicKey: string,
    sender: 'user' | 'ai',
    text: string,
    metadata?: Message['metadata'] & {
      isTemplate?: boolean;
      extra?: { step?: number; scene?: string; timestamp?: number };
    }
  ) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: sender, // ✅ Message 타입에 맞게 'role' 사용
      text,
      ...metadata,
    };

    setMessages(prev => [...prev, newMessage]);
  };

  const clearMessages = async () => {
    try {
      await AsyncStorage.removeItem('chat_messages');
      setMessages([]);
    } catch (e) {
      console.error('❌ 대화 초기화 실패:', e);
    }
  };

  return {
    messages,
    addMessage,
    clearMessages,
  };
}
