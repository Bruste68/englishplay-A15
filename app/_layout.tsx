import { View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useCallback } from 'react';
import { PersistentChatHistoryProvider } from '../context/PersistentChatHistoryContext';
import * as Linking from 'expo-linking';
import { OverlayProvider } from '../context/OverlayContext';
import MyOverlay from '../components/global/MyOverlay';
import MyFab from '../components/global/MyFab';
import { activateKeepAwakeAsync } from 'expo-keep-awake';

export const unstable_settings = {
  initialRouteName: '(tabs)', // ✅ 탭 그룹을 루트로 시작
};

SplashScreen.preventAutoHideAsync();

const linking = {
  prefixes: [
    'englishplayondevice://',
    'com.googleusercontent.apps.925681825495-v900v134g50u5dpd3rqvts8is3m9ifkl:/',
    'com.bruste68.englishplayondevice.play://'
  ],
  config: {
    screens: {
      login: 'index',
      language: 'language',
      ChatScreen: 'ChatScreen',
      'screens/TopicSelectScreen': 'screens/TopicSelectScreen',
    },
  },
  getInitialURL: async () => Linking.getInitialURL(),
  subscribe: (listener: (url: string) => void) => {
    const onReceiveURL = ({ url }: { url: string }) => listener(url);
    const subscription = Linking.addEventListener('url', onReceiveURL);
    return () => subscription.remove();
  }
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* (tabs) 그룹이 기본 진입점 */}
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="language" />
        <Stack.Screen name="screens/TopicSelectScreen" />
        <Stack.Screen name="ChatScreen" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    activateKeepAwakeAsync('samspeak');
    return () => {
      // 최신 SDK에서는 deactivate 없음 → cleanup 비워둠
    };
  }, []);

  // ✅ 로그인 상태 감지
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };
    checkLogin();

    // 포그라운드로 돌아올 때도 다시 확인
    const interval = setInterval(checkLogin, 3000);
    return () => clearInterval(interval);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <OverlayProvider>
        <PersistentChatHistoryProvider>
          <RootLayoutNav />

          {/* ✅ 로그인한 경우에만 표시 */}
          {isLoggedIn && (
            <>
              <MyOverlay />
              <MyFab />
            </>
          )}

          <StatusBar style="auto" />
        </PersistentChatHistoryProvider>
      </OverlayProvider>
    </View>
  );
}
