# Android上架流程與注意事項
這裡將介紹如何將android app上架，注意事項會==highlight==

## 打包發布
製作AAB或APK
==Google Play只能用AAB==
#### 1. 生成簽名加密
在C:\Program Files\Java\jdkx.x.x_x\bin下執行
`$ keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
取得金鑰文件
#### 2. 設定gradle
1. 把金鑰文件放在app資料夾下的android/app資料夾裡
2. 在/android/gradle.properties檔案中加入
```jsx
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
    ```
#### 3. 加入簽名配置
在android/app/build.gradle檔案添加
```jsx=
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
#### 4. 打包生成APK包
在app資料夾下執行
```shell=
$ cd android
$ ./gradlew assembleRelease
```
==確保gradle.properties 中没有_org.gradle.configureondemand=true_，否則最後的APK檔不能使用==
完成打包位在:android/app/build/outputs/apk/release/app-release.apk

#### 5. 打包生成AAB包
在app資料夾下執行
```shell=
$ cd android
$ ./gradlew bundleRelease
```
==確保gradle.properties 中没有_org.gradle.configureondemand=true_，否則最後的APK檔不能使用==
完成打包位在:android/app/build/outputs/bundle/release/app-release.aab

## 上傳到Google Play
#### 1. 註冊google帳號，開啟google play後台
需要建立開發者帳號

#### 2. 建立應用程式
填寫應用程式資料

#### 3. 設定應用程式
資料設定
* 權限
* 廣告:應用程式裡面有廣告就必須填"是"
* 內容分級
* 目標受眾群體:吸引兒童部分只要不是給非兒童的應用程式則選"是"
* 新聞應用
* 新冠肺炎
* 數據安全:==須先設定隱私權政策==
* 商店設置
* 商品詳情:必須準備許多應用程式畫面截圖做展示
* 國家和地區

完成以上內容即可點"創建正式版本"

#### 4. AAB檔案上傳
1. 上傳檔案>保存
2. 檢查發布
3. 開始發布正式版
4. 等待審核

#### 參考資料
https://www.react-native.cn/docs/signed-apk-android
https://www.youtube.com/watch?v=thEqGPzXNdk
https://ithelp.ithome.com.tw/articles/10243763
