# ──────────────────────────────────────────────
# 📦 React Native core
# ──────────────────────────────────────────────
-keep class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**
-keepclassmembers class * {
    @com.facebook.react.uimanager.annotations.ReactProp <methods>;
}
-keepclassmembers class * {
    @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>;
}

# ──────────────────────────────────────────────
# ⚙️ TurboModules / GestureHandler / Reanimated
# ──────────────────────────────────────────────
-keep class com.facebook.react.turbomodule.** { *; }
-keep class com.swmansion.** { *; }
-dontwarn com.swmansion.**

# ──────────────────────────────────────────────
# 🚀 Expo 모듈
# ──────────────────────────────────────────────
-keep class expo.modules.** { *; }
-dontwarn expo.modules.**

# ──────────────────────────────────────────────
# 📱 Huawei HMS Core + IAP + Update SDK
# ──────────────────────────────────────────────
-keep class com.huawei.hms.** { *; }
-dontwarn com.huawei.hms.**
-keep class com.huawei.updatesdk.** { *; }
-dontwarn com.huawei.updatesdk.**
-keep class com.huawei.agconnect.** { *; }
-dontwarn com.huawei.agconnect.**
-keep class com.huawei.hms.network.** { *; }
-dontwarn com.huawei.hms.network.**

# ──────────────────────────────────────────────
# 📦 Gson / Jackson
# ──────────────────────────────────────────────
-keep class com.google.gson.** { *; }
-dontwarn com.google.gson.**
-keep class com.fasterxml.jackson.** { *; }
-dontwarn com.fasterxml.jackson.**
-keep class sun.misc.Unsafe { *; }

# ──────────────────────────────────────────────
# 🌐 Retrofit / OkHttp
# ──────────────────────────────────────────────
-keep class okhttp3.** { *; }
-keep interface okhttp3.** { *; }
-dontwarn okio.**

-keepattributes Signature
-keepattributes *Annotation*

# ──────────────────────────────────────────────
# 🛠️ Parcelable, Enum
# ──────────────────────────────────────────────
-keepclassmembers class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}
-keepclassmembers enum * { *; }

# ──────────────────────────────────────────────
# 🔧 Reflection & Annotations
# ──────────────────────────────────────────────
-keepattributes RuntimeVisibleAnnotations
-keepattributes RuntimeVisibleParameterAnnotations
-keepattributes EnclosingMethod
