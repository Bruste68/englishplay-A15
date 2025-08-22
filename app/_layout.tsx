// app/_layout.tsx
import { View, useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';
import { PersistentChatHistoryProvider } from '../context/PersistentChatHistoryContext';
import * as Linking from 'expo-linking';
import { activateKeepAwakeAsync, deactivateKeepAwakeAsync } from 'expo-keep-awake';

export const unstable_settings = {
  initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();

// ✅ 딥링크 prefix 설정
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
        <Stack.Screen name="index" />
        <Stack.Screen name="language" />
        <Stack.Screen name="screens/TopicSelectScreen" />
        <Stack.Screen name="ChatScreen" />
        {/* 🗑️ WhisperRecorderScreen 제거됨 */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    activateKeepAwakeAsync('samspeak');
    return () => {
      deactivateKeepAwakeAsync('samspeak');
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <PersistentChatHistoryProvider>
        <RootLayoutNav />
      </PersistentChatHistoryProvider>
    </View>
  );
}
