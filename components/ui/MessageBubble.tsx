
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageBubbleProps {
  sender: 'user' | 'ai';
  text: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
  const isUser = sender === 'user';

  return (
    <View style={[styles.bubbleContainer, isUser ? styles.userAlign : styles.aiAlign]}>
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}>
        <Text style={styles.bubbleText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 10,
  },
  userAlign: {
    justifyContent: 'flex-end',
  },
  aiAlign: {
    justifyContent: 'flex-start',
  },
  bubble: {
    padding: 10,
    borderRadius: 16,
    maxWidth: '75%',
  },
  userBubble: {
    backgroundColor: '#D0EBFF', // light blue
    borderTopRightRadius: 0,
  },
  aiBubble: {
    backgroundColor: '#FFE3EC', // light pink
    borderTopLeftRadius: 0,
  },
  bubbleText: {
    fontSize: 16,
    color: '#333',
  },
});
