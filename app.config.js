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
  config = withGoogleServicesJson(config);

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
    version: "4.0.0",   // ← versionName
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    runtimeVersion: require('./package.json').version,
    assetBundlePatterns: ['**/*'],

    android: {
      versionCode: 40,
      package: 'com.bruste68.englishplayondevice.play',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      permissions: [],
      googleServicesFile: './google-services.json',
    },

    plugins: [
      'react-native-iap', // Google BillingClient 의존성/매니페스트 자동 설정
    ],

    extra: {
      eas: {
        projectId: '3c63c36b-05ee-41fb-aa8e-1d8c56077f3b'
      },
      ENV,
      API_BASE_URL: process.env.EXPO_PUBLIC_BACKEND_URL,
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
