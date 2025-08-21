
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

type Props = {
  text: string;
  onFinish?: () => void;
  speed?: number;
};

const TypingText: React.FC<Props> = ({ text, onFinish, speed = 30 }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);
        onFinish?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return <Text style={{ fontSize: 16 }}>{displayed}</Text>;
};

export default TypingText;
