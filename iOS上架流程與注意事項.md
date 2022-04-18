# iOS上架流程與注意事項
這裡將介紹如何將android app上架，注意事項會==highlight==

## 上架

#### 1. 建立Apple帳號，登入App Store Connect網站
* 建立"新的App"
* 輸入App資訊，套組ID的部分，清單中找不到Bundle ID的話，選擇「XC Wildcard – *」，然後在套裝組 ID 後綴輸入Bundle ID

#### 2. 填寫App資訊
* 標題、副標題
* 隱私權政策
* App類別
* App價錢:==需要先到App Store Connect的協議、稅務與銀行業務去設定銀行帳戶==
* 預購、上架國家、大量採購、照片圖片、宣傳文字、分級、版權、都入資訊、聯絡資訊、備註、上架日期、多國語言

#### 3. 從Xcode上傳App
* 到General頁面中的Signing輸入上架帳號的Apple ID和密碼
* Xcode會生成Provisioning Profile
* ==檢查Bundle Identifier 和 Version是否與先前在App Store Connect的相同==
* 檢查Assets.xcassets 的圖，留意不同裝置需要的圖片大小
* 將App Build的對象改為Generic iOS Device

#### 4. 開始上傳
* 點Product>Archive
* 點Distribute App>iOS App Store>Upload>Next
* 產生iOS Distribution certificate
* ==點Export Signing Certificate可以輸出certificate，存在Mac中，方便未來傳到另一台上架App的Mac使用==
* 在Certificates, Identifiers & Profiles 網頁中可以看到 Xcode生成的Distribution certificate
* 點Upload

#### 5. App送審
* App Store Connect>活動分頁:查看App處理狀態
* 完成處理後，到App Store>準備提交>，選擇剛剛上傳好的App
* 若要上傳多個版本，可重新執行Product>Archive的步驟，並且==更改每個版本的Build作為辨別==
* 提交送審

#### 參考資料
https://www.appcoda.com.tw/ios-app-submission/
