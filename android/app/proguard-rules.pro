# ---------------------------
# 기본 설정
# ---------------------------
-optimizationpasses 5
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-dontpreverify
-verbose

# ---------------------------
# Kotlin / Annotation
# ---------------------------
-keepattributes *Annotation*
-keepattributes Signature, InnerClasses, EnclosingMethod

-keepclassmembers class kotlin.Metadata { *; }
-keepclassmembers class kotlin.coroutines.** { *; }

# ---------------------------
# React Native / Expo
# ---------------------------
-keep class com.facebook.react.** { *; }
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.uimanager.** { *; }
-keepclassmembers class * extends com.facebook.react.bridge.JavaScriptModule { *; }
-keepclassmembers class * extends com.facebook.react.bridge.NativeModule { *; }
-keepclassmembers class * extends com.facebook.react.uimanager.ViewManager { *; }
-keepclassmembers class * { @com.facebook.react.bridge.ReactMethod <methods>; }

# Hermes / JSC
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# Expo SDK
-keep class expo.modules.** { *; }
-keep class org.unimodules.** { *; }

# ---------------------------
# Google / Firebase
# ---------------------------
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }
-keep class com.google.android.play.core.** { *; }

# ---------------------------
# Network / JSON
# ---------------------------
-keep class com.google.gson.** { *; }
-keepattributes *Annotation*
-keepattributes Signature

-keep class okhttp3.** { *; }
-dontwarn okhttp3.**

-keep class retrofit2.** { *; }
-dontwarn retrofit2.**

# ---------------------------
# AsyncStorage / SecureStore
# ---------------------------
-keep class com.reactnativecommunity.asyncstorage.** { *; }
-keep class expo.modules.securestore.** { *; }

# ---------------------------
# JNI / Native
# ---------------------------
-keepclasseswithmembernames class * {
    native <methods>;
}

# Enum name 보존 (JSON 직렬화 시 필요)
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# ---------------------------
# Billing / IAP
# ---------------------------
-keep class com.android.billingclient.** { *; }
-dontwarn com.android.billingclient.**

-keep class com.dooboolab.rniap.** { *; }

# ---------------------------
# Reanimated (RN 애니메이션)
# ---------------------------
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# ---------------------------
# Log 최소화 (릴리즈)
# ---------------------------
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
}
