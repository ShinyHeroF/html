关于cj项目bridge设计上的注意点：

1. ios和安卓平台需统一参数格式和返回格式
2. 所有bridge方法，服务端均需要callback给客户端（即使对于setKey这种不太强调返回值的bridge方法）
3. 内部浏览器中如果初期没有需要，不能使用jsbridge



目前认为需要的bridge方法的大致描述



### 数据缓存

clearStorage(key)

getStorage(key)

setStorage(key, value)



### 地理位置

getLocation，只返回latitude, longitude

报错定为3类（无权限、原生端超时、无法获得地理位置（由于完全无网络等原因））



### 设备功能

scanCode（支付二维码和条码），返回码的内容字符串

screenBrightness(控制值为一个0.0到1.0的浮点数)



### app相关

gotoSetting (跳至本app的权限设定)

getAppVersion



### 打开外部内容

openInInnerBrowser

openInOuterBrowser

注：个人认为设定内部浏览器的标题的功能可以去除，使用document.title即可

注：内部浏览器中正在加载网页内容时原生不要绘制类似“菊花”这样很明显的视图。考虑顶部进度条或者干脆不绘制表示加载的视图



### 推送通知

checkPushNotificationUsability

onPushNotification(原生作为客户端，h5作为服务端)

TODO：需要从APNS或安卓推送消息的结构中提炼出一个发送给h5时的通用结构，类似于

```json
{
  "title": "推送标题", // 用于h5通知中心列表页的显示
  "content": "内容", // 用于h5通知中心列表页的显示
  "pushDate": 1541403679284 // 原生收到此条推送时的时间戳，用于h5通知中心列表页的显示和排序
  "meta": {
    "type": "userLevelUp" // 预先定义的某种推送业务类型
      ... // 其他与本推送业务类型相关的数据的key value
  }
}
```

前端每次接收到原生的一条推送，在本地进行缓存，用户可以清理一条或多条前端的推送通知缓存。前端接收到原生推送后回调给原生



### 图片输入(优先度可较低，可使用\<input type="file"\>代替)

selectImage

takePhoto 

注：图片输入的返回方式，考虑实现为：原生将图片存在原生的某个可访问的路径下（例如/var/.....），返回此地址后h5引用此地址即可

注：拍照的情况下，原生需自行处理好照片朝向(orientation)的问题

TODO：定义selectImage可能的报错类型（无相册权限等），定义takePhoto可能的报错类型（无相机权限等）



### 跳转地图app

openInMap

TODO：这里需要设定一下打开地图方式的优先级，按优先级根据客户端是否有这种方式进行逐级的Fallback。初步设定为：谷歌地图app打开 -> 内部浏览器打开谷歌地图网页版



### 控制statusbar样式

setStatusBarTextColor 'black' 'white'



### 热更新

onH5Update(原生作为客户端，h5作为服务端)，h5端将是否允许reload新版本回调给原生



### 切至前台/后台

onForeground / onBackground (原生作为客户端，h5作为服务端。h5端收到此次状态变化后回调给原生)

