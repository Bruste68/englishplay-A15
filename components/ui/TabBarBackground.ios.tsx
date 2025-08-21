import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

let LazyBlurView: React.ComponentType<any> | null = null;
let LazyBottomTabHook: (() => number) | null = null;

export default function BlurTabBarBackground() {
  const [ReadyBlurView, setReadyBlurView] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    (async () => {
      const { BlurView } = await import('expo-blur');
      LazyBlurView = BlurView;
      setReadyBlurView(() => BlurView);
    })();
  }, []);

  if (!ReadyBlurView) return null;

  return (
    <ReadyBlurView
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  );
}

export function useBottomTabOverflow(): number {
  const [tabHeight, setTabHeight] = useState(0);
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    (async () => {
      const { useBottomTabBarHeight } = await import('@react-navigation/bottom-tabs');
      LazyBottomTabHook = useBottomTabBarHeight;
      setTabHeight(useBottomTabBarHeight());
    })();
  }, []);

  return tabHeight - bottom;
}
