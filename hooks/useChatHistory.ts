
import { useState } from 'react';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
};

export function useChatHistory() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (sender: 'user' | 'ai', text: string) => {
    const newMessage = {
      id: Date.now().toString(),
      sender,
      text,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    addMessage,
    clearMessages,
  };
}
