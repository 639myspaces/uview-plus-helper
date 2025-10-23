本组件用于微信小程序中获取用户头像和昵称的授权弹窗。

本组件基于微信小程序的开放能力，提供统一的用户信息获取界面，支持头像选择和昵称输入。


## [#](http://118.25.198.98/components/wxAuth.html#api) API

### [#](http://118.25.198.98/components/wxAuth.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|show|是否显示授权弹窗|Boolean|false|true|
|logo|应用logo图片地址|String|''|\-|
|title|应用标题|String|''|\-|
|showHeader|是否显示头部区域|Boolean|true|true|
|content|授权说明内容|String|'获取您的昵称、头像'|\-|
|tips|提示信息|String|'以便为您提供更优质的服务'|\-|
|round|弹窗圆角大小|String|Number|10|
|closeable|是否显示关闭按钮|Boolean|true|true|
|maskCloseable|是否允许点击遮罩关闭|Boolean|false|true|
|confirmText|确认按钮文字|String|'保存'|\-|

### [#](http://118.25.198.98/components/wxAuth.html#events) Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|confirm|用户确认授权时触发|Object: {avatar, nickname}|\-|
|close|关闭弹窗时触发|\-|\-|
|chooseAvatar|用户选择头像时触发|String: avatarPath|\-|

### [#](http://118.25.198.98/components/wxAuth.html#slots) Slots

|插槽名|说明|版本|
|---|---|---|
|默认插槽|自定义弹窗内容|\-|

## [#](http://118.25.198.98/components/wxAuth.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9) 注意事项

1.  **平台限制**：本组件仅支持微信小程序平台，其他平台无法使用
2.  **权限要求**：需要在小程序配置中声明相关权限

## [#](http://118.25.198.98/components/wxAuth.html#%E7%9B%B8%E5%85%B3%E9%93%BE%E6%8E%A5) 相关链接

-   [微信小程序用户信息获取 (opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html)

上次更新时间: 2025/8/24 23:26:43