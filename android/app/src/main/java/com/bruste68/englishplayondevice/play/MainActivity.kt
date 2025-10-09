package com.bruste68.englishplayondevice.play

import expo.modules.splashscreen.SplashScreenManager
import android.os.Build
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import android.content.pm.ActivityInfo
import android.util.Log

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import expo.modules.ReactActivityDelegateWrapper
import com.facebook.react.modules.core.DeviceEventManagerModule

class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) {
      enableEdgeToEdge()
    }
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED
    SplashScreenManager.registerOnActivity(this)
    super.onCreate(null)
  }

  override fun getMainComponentName(): String {
    return "main"
  }

  private fun emitEventToJS(eventName: String) {
    try {
      val reactContext = reactInstanceManager?.currentReactContext
      if (reactContext != null && reactContext.hasActiveCatalystInstance()) {
        reactContext
          .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
          .emit(eventName, null)
        Log.i("MainActivity", "📡 JS 이벤트 전달 성공: $eventName")
      } else {
        Log.w("MainActivity", "⚠️ JS Context 아직 준비 안됨: $eventName skip됨")
      }
    } catch (e: Exception) {
      Log.e("MainActivity", "❌ JS 이벤트 전송 중 오류 ($eventName)", e)
    }
  }

  override fun onPause() {
    super.onPause()
    Log.i("MainActivity", "📴 [LIFECYCLE] onPause() called")
    emitEventToJS("AppPaused")
  }

  override fun onResume() {
    super.onResume()
    Log.i("MainActivity", "🔙 [LIFECYCLE] onResume() called")
    emitEventToJS("AppResumed")
  }

  override fun onWindowFocusChanged(hasFocus: Boolean) {
    super.onWindowFocusChanged(hasFocus)
    if (!hasFocus) {
      Log.i("MainActivity", "📱 [FOCUS] Window lost focus → likely background")
      emitEventToJS("AppPaused")
    } else {
      Log.i("MainActivity", "🟢 [FOCUS] Window regained focus → foreground")
      emitEventToJS("AppResumed")
    }
  }

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
