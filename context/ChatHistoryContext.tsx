
import React, { createContext, useState, ReactNode } from 'react';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
};

type ChatHistoryContextType = {
  messages: Message[];
  addMessage: (sender: 'user' | 'ai', text: string) => void;
  clearMessages: () => void;
};

export const ChatHistoryContext = createContext<ChatHistoryContextType>({
  messages: [],
  addMessage: () => {},
  clearMessages: () => {},
});

export const ChatHistoryProvider = ({ children }: { children: ReactNode }) => {
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

  return (
    <ChatHistoryContext.Provider value={{ messages, addMessage, clearMessages }}>
      {children}
    </ChatHistoryContext.Provider>
  );
};
