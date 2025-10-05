import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { GestureResponderEvent } from 'react-native';

type LazyProps = {
  BottomTabBarButtonProps: any;
  PlatformPressable: React.ComponentType<any>;
};

export function HapticTab(props: any) {
  const [PressableComponent, setPressableComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    (async () => {
      const { PlatformPressable } = await import('@react-navigation/elements');
      setPressableComponent(() => PlatformPressable);
    })();
  }, []);

  if (!PressableComponent) return null;

  return (
    <PressableComponent
      {...props}
      onPressIn={(ev: GestureResponderEvent) => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
