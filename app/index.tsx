// app/index.tsx
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { InteractionManager } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // 모든 애니메이션 및 네비게이션 준비가 끝난 후 실행
    const runAfterInteractions = async () => {
      await InteractionManager.runAfterInteractions(() => {
        console.log('🚀 index.tsx: 라우팅 시작');
        router.replace('/language');
      });
    };

    runAfterInteractions().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>loading...</Text>
    </View>
  );
}
