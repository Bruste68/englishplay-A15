
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Message = {
  id: string;
  role: 'user' | 'ai'; // sender -> role로 변경
  text: string;
  timestamp: number;
  scene?: number; // 추가
  step?: number; // 추가
  metadata?: {
    isTemplate?: boolean;
    audioFile?: string;
    confidence?: number;
  };
};

type TemplateProgress = {
  messages: Message[];
  currentStep: number;
  completed: boolean;
};

type ChatHistoryContextType = {
  messagesByTopic: Record<string, Message[]>;
  templateProgressByTopic: Record<string, TemplateProgress>;
  addMessage: (topic: string, sender: 'user' | 'ai', text: string, metadata?: Message['metadata']) => void;
  addTemplateMessage: (topic: string, message: Message) => void;
  clearMessages: (topic: string, keepStructure?: boolean) => void;
};

const PersistentChatHistoryContext = createContext<ChatHistoryContextType | undefined>(undefined);

export const PersistentChatHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [messagesByTopic, setMessagesByTopic] = useState<Record<string, Message[]>>({});
  const [templateProgressByTopic, setTemplateProgressByTopic] = useState<Record<string, TemplateProgress>>({});

  const addMessage = (
     topic: string,
     sender: 'user' | 'ai',
     text: string,
     metadata?: Message['metadata'],
     userMessage?: boolean
  ) => {
     const id = Date.now().toString();
     const newMessage: Message = {
       id,
       role: sender,
       text,
       timestamp: Date.now(),
       metadata,
     };

     setMessagesByTopic((prev) => {
       const currentMessages = prev[topic] || [];
       return { ...prev, [topic]: [...currentMessages, newMessage] };
     });
  };

  const addTemplateMessage = (topic: string, message: Message) => {
    setTemplateProgressByTopic((prev) => {
      const progress = prev[topic] || { messages: [], currentStep: 0, completed: false };
      const updatedMessages = [...progress.messages, message];
      return {
        ...prev,
        [topic]: {
          ...progress,
          messages: updatedMessages,
          currentStep: progress.currentStep + 1,
          completed: false,
        },
      };
    });
  };

  const clearMessages = (topic: string, keepStructure = false) => {
    setMessagesByTopic((prev) => {
      if (keepStructure) return { ...prev, [topic]: [] };
      const newState = { ...prev };
      delete newState[topic];
      return newState;
    });

    setTemplateProgressByTopic((prev) => {
      const newState = { ...prev };
      delete newState[topic];
      return newState;
    });
  };

  return (
    <PersistentChatHistoryContext.Provider
      value={{
        messagesByTopic,
        templateProgressByTopic,
        addMessage,
        addTemplateMessage,
        clearMessages,
      }}
    >
      {children}
    </PersistentChatHistoryContext.Provider>
  );
};

export const usePersistentChatHistory = (): ChatHistoryContextType => {
  const context = useContext(PersistentChatHistoryContext);
  if (!context) {
    throw new Error('usePersistentChatHistory must be used within a Provider');
  }
  return context; // ✅ 전체 반환!
};
