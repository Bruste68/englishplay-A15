package com.bruste68.englishplayondevice.play

import expo.modules.splashscreen.SplashScreenManager
import android.os.Build
import android.os.Bundle
import androidx.activity.enableEdgeToEdge  // ✅ Android 15 대응
import android.content.pm.ActivityInfo   // ✅ 화면 방향 설정용

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import expo.modules.ReactActivityDelegateWrapper

class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    // ✅ Android 15 이상 대응: 전체화면(edge-to-edge) 적용
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) { // Android 15+
        enableEdgeToEdge()
    }

    // ✅ 필요 시 화면 방향 제한 (예: 세로 고정)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED

    // ✅ Expo splash screen 설정
    SplashScreenManager.registerOnActivity(this)

    super.onCreate(null)
  }

  override fun getMainComponentName(): String = "main"

  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return ReactActivityDelegateWrapper(
      this,
      BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
      object : DefaultReactActivityDelegate(
        this,
        mainComponentName,
        fabricEnabled
      ) {}
    )
  }

  override fun invokeDefaultOnBackPressed() {
    if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
      if (!moveTaskToBack(false)) {
        super.invokeDefaultOnBackPressed()
      }
      return
    }
    super.invokeDefaultOnBackPressed()
  }
}
