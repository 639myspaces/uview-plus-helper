本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。

本组件功能类似于uni的`uni.showActionSheet`API，配置更加灵活，所有平台都表现一致。


## [#](http://118.25.198.98/components/actionSheet.html#api) API

### [#](http://118.25.198.98/components/actionSheet.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|show|是否展示|Boolean|false|true|
|title|设置标题|String|\-|\-|
|titleStyle 3.5.42|自定义样式弹窗标题样式|Object|String|\-|
|closeable 3.5.42|是否显示关闭图标|Boolean|false|true|
|description|选项上方的描述信息|String|\-|\-|
|actions|按钮的文字数组|Array<Object>|\[ \]|\-|
|cancelText|取消按钮的文字|String|\-|\-|
|closeOnClickAction|点击菜单项时是否关闭弹窗|Boolean|\-|\-|
|safeAreaInsetBottom|是否开启底部安全区适配|Boolean|false|true|
|openType|小程序的打开方式|String|\-|\-|
|closeOnClickOverlay|点击遮罩是否允许关闭|Boolean|\-|\-|
|height 3.4.2|设置高度，默认不限制，超出后自动滚动|Boolean|false|true|
|round|圆角值|String|Number|0|
|lang|指定返回用户信息的语言|String|en|zh\_CN|
|sessionFrom|会话来源（仅微信小程序有效）|String|\-|\-|
|sendMessageTitle|会话内消息卡片标题|String|\-|\-|
|sendMessagePath|会话内消息卡片点击跳转小程序路径|String|\-|\-|
|sendMessageImg|会话内消息卡片图片|String|\-|\-|
|showMessageCard|是否显示会话内消息卡片|Boolean|false|true|
|appParameter|打开 APP 时传递的参数|String|\-|\-|

### [#](http://118.25.198.98/components/actionSheet.html#events) Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|select|点击列表项时触发|\-|\-|
|close|点击取消按钮时触发|\-|\-|
|getuserinfo|获取用户信息回调|detail|\-|
|contact|客服消息回调|\-|\-|
|getphonenumber|获取用户手机号回调|\-|\-|
|error|使用开放能力时发生错误的回调|\-|\-|
|launchapp|打开 APP 成功的回调|\-|\-|
|opensetting|打开授权设置页后回调|\-|\-|

上次更新时间: 2025/8/30 23:36:46