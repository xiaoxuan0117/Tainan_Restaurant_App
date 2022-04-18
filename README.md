# README
## 簡介
這是一個簡單的APP，實現下方Tab換頁、左側清單滑動與請求API等功能。react native cli的內容在app資料夾中
以下講解每部份製作細節:
>備註:
> * 電腦是windos系統所以暫無ios版本
> * 括號內為耗時
## 製作流程與時間
### 1. 環境建置(約1天以上)
這部分花了非常久的時間，礙於電腦磁碟空間不足所以花了一些時間整理，並且工具下載下來後跑動速度很慢、有突發狀況等等。
### 2. 下方APP tab切換頁面(約1-2小時)
* 使用react navigation製作此功能
* 分類檔案:主要有screen的三個頁面，與一個串聯screen的tabNavigation頁面
![](https://i.imgur.com/CJUPa0V.png)

* 架構(除了tab標題還有加上icon):
```jsx=
<Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInActiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'list';

          for(let i = 0 ; i< routes.length; i +=1){
            if(route.name === routes[i].name){
              iconName = focused 
              ? routes[i].icon
              : `${routes[i].icon}-outline`;
              break;
            }
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      >
      <Tab.Screen name="All Restauraunts" component={MainPage}/>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
```
* 截圖:
![](https://i.imgur.com/lhfeIKw.png)


### 3. app選單點擊(約1小時)
* 使用react navigation製作此功能
* 分類檔案:同樣利用screen的三個頁面，並在tabNavigation頁面串聯screen
* 架構:
```jsx=
<Drawer.Navigator
        openBydefault={false}
          drawerType="slide"
        >
            <Drawer.Screen name='Restaurants in Tainan' component={TabBottomNavigation} /> 
            <Drawer.Screen name='Favorite Restauraunts' component={Favorite} /> 
            <Drawer.Screen name='About' component={About} /> 
        </Drawer.Navigator>
```
* 截圖:
![](https://i.imgur.com/gNhy5Os.png)


### 4. 串接一組資料列表資料(約1-2小時)
* 製作json檔案內容與取得自製fake api
* 在mainPage.js中請求此api，將資料放入tab為restaurant的頁面


### 5. 點選愛心功能
因為目前的還沒有作品用到redux，因此試做此功能
* 新增store.js
![](https://i.imgur.com/1XLdpNR.png)
* 於store.js內新增reducer
* 在mainPage.js發布接收到的json資料，並在同一檔案訂閱收資料
* 在favorite.js也要收資料
* 在mainPage.js和favorite.js中都有點擊愛心可以發通知修改資料的功能
* 截圖:
![](https://i.imgur.com/JuuUtJd.png)

> 備註:
> * 此功能沒有非常完整，測試的時候favorite頁面要手動重新整理才會反應資料更新
> * 一開始要用react-redux所以加上Provider，但是後來用redux，因此將Provider移除較適宜
    
## 示範影片
https://youtube.com/shorts/RMmk7aB6Z5M?feature=share
