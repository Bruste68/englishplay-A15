import 'dotenv/config';
import { withDangerousMod } from '@expo/config-plugins';
import { withBuildProperties } from 'expo-build-properties';
import fs from 'fs';
import path from 'path';

const ENV = 'production'; // 릴리즈 고정

const withGoogleServicesJson = (config: any) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const appPath = path.resolve('./android/app');
      const gsPath = path.join(appPath, 'google-services.json');

      if (!fs.existsSync(appPath)) {
        fs.mkdirSync(appPath, { recursive: true });
      }

      const base64 = process.env.GOOGLE_SERVICES_JSON;
      if (base64) {
        const buffer = Buffer.from(base64, 'base64');
        fs.writeFileSync(gsPath, buffer);
        console.log('✅ google-services.json created in withDangerousMod');
      } else {
        console.warn('⚠️ GOOGLE_SERVICES_JSON env variable not set');
      }

      return config;
    }
  ]);
};

export default ({ config }) => {
  // Google Services JSON
  config = withGoogleServicesJson(config);

  // Build properties
  config = withBuildProperties(config, {
    android: {
      minSdkVersion: 24,
      compileSdkVersion: 35,
      targetSdkVersion: 35,
      kotlinVersion: '2.0.21',
    },
  });

  return {
    ...config,
    name: 'SamSpeakEn',
    slug: 'englishplay-ondevice',
    scheme: 'englishplayondevice',
    version: "10.0.8",   // versionName
    orientation: 'portrait',
    icon: './assets/icon.png',

    // ✅ Force Dark 무효화
    userInterfaceStyle: 'light',

    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    runtimeVersion: "10.0.0",
    assetBundlePatterns: ['**/*'],

    android: {
      versionCode: 108,
      package: 'com.bruste68.englishplayondevice.play',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      permissions: ["INTERNET"],
      googleServicesFile: './google-services.json',

      // 🚫 강제 다크모드 비활성화 (추가 보강)
      userInterfaceStyle: "light",
    },

    plugins: [
      'react-native-iap',
    ],

    extra: {
      eas: {
        projectId: '3c63c36b-05ee-41fb-aa8e-1d8c56077f3b'
      },
      ENV,
      API_BASE_URL: process.env.EXPO_PUBLIC_BACKEND_URL || "https://samspeakgo.com/api",
      EXPO_PUBLIC_WHISPER_URL: process.env.EXPO_PUBLIC_WHISPER_URL,
      EXPO_PUBLIC_REGION: process.env.EXPO_PUBLIC_REGION,
      EXPO_PUBLIC_APP_NAME: process.env.EXPO_PUBLIC_APP_NAME,
      EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
      GOOGLE_ANDROID_CLIENT_ID: process.env.GOOGLE_ANDROID_CLIENT_ID,
      GOOGLE_APP_REDIRECT_URI: process.env.GOOGLE_APP_REDIRECT_URI,
      GOOGLE_ANDROID_REDIRECT_URI: process.env.GOOGLE_ANDROID_REDIRECT_URI,
      ANDROID_PACKAGE_NAME: 'com.bruste68.englishplayondevice.play',
    }
  };
};
