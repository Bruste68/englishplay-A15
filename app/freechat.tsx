import React from 'react';
import { View, StyleSheet } from 'react-native';
import FreeChatView from '../components/FreeChatView';
import { useVoice } from '../hooks/useVoice';
import { usePersistentChatHistory } from '../context/PersistentChatHistoryContext';
import type { Message, FeedbackItem, DialogState, LanguageCode, PracticeScene, TopicType, LevelType } from '../types';


export default function FreeChatScreen() {
  const {
    transcript,
    isRecording,
    startRecording,
    stopRecording,
    clearTranscript,
  } = useVoice();

  const { messagesByTopic, addMessage: chatAddMessage } = usePersistentChatHistory();

  const topicKey = 'freechat';
  const messages = messagesByTopic?.[topicKey] ?? [];

  return (
    <View style={styles.container}>
      <FreeChatView
        topicKey={topicKey}
        messages={messages}
        addMessage={(_topic, role, text, metadata ) =>
          chatAddMessage(topicKey, role, text, metadata)
        }
        startRecording={startRecording}
        stopRecording={stopRecording}
        isRecording={isRecording}
        transcript={transcript}
        clearTranscript={clearTranscript}
        onExitFreeTalk={() => {
           console.log('Free talk session ended');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
