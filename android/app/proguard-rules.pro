# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Add any project specific keep options here:
# ----------- 기본 Android / Kotlin 최적화 -----------
# Annotation 유지
-keepattributes *Annotation*

# Kotlin metadata 유지
-keepclassmembers class kotlin.Metadata { *; }
-keepclassmembers class kotlin.coroutines.** { *; }

# ----------- React Native / Expo 관련 -----------
# React Native 필수
-keep class com.facebook.react.** { *; }
-keep class com.facebook.react.bridge.** { *; }
-keepclassmembers class * extends com.facebook.react.bridge.JavaScriptModule { *; }
-keepclassmembers class * extends com.facebook.react.bridge.NativeModule { *; }
-keepclassmembers class * extends com.facebook.react.uimanager.ViewManager { *; }
-keepclassmembers class * {
    @com.facebook.react.bridge.ReactMethod <methods>;
}

# React Native hooks, context 내부 클래스 보존
-keepclassmembers class * {
    *** Companion;
}
-keepclassmembers class * {
    *** DefaultImpls;
}

# Hermes / JSC
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# Expo SDK 모듈
-keep class expo.modules.** { *; }
-keep class org.unimodules.** { *; }

# ----------- Google Play 서비스 / Firebase -----------
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }
-keep class com.google.android.play.core.** { *; }

# ----------- Gson / JSON 직렬화 -----------
-keep class com.google.gson.** { *; }
-keepattributes Signature
-keepattributes *Annotation*

# ----------- OkHttp / 네트워크 -----------
-keep class okhttp3.** { *; }
-dontwarn okhttp3.**

# ----------- Retrofit (사용 시) -----------
-keep class retrofit2.** { *; }
-dontwarn retrofit2.**

# ----------- AsyncStorage, SecureStore 등 Expo 모듈 -----------
-keep class com.reactnativecommunity.asyncstorage.** { *; }
-keep class expo.modules.securestore.** { *; }

# ----------- 네이티브 JNI 호출 보존 -----------
-keepclasseswithmembernames class * {
    native <methods>;
}

# ----------- Enum name 보존 (예: JSON 직렬화 시 필요) -----------
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# ----------- 릴리즈 로그 최소화 -----------
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
}

# ----------- 기타 안전 장치 -----------
-dontwarn javax.annotation.**
-dontwarn kotlin.**
-dontwarn kotlinx.**
-dontwarn org.codehaus.mojo.**

# Google Play Billing
-keep class com.android.billingclient.** { *; }
-dontwarn com.android.billingclient.**

# react-native-iap
-keep class com.dooboolab.rniap.** { *; }
