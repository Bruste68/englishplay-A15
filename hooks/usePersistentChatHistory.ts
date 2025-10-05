
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
};

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

  const addMessage = (sender: 'user' | 'ai', text: string) => {
    const newMessage = {
      id: Date.now().toString(),
      sender,
      text,
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
