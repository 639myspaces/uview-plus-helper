此组件为 uni-app 的`image`组件的加强版，在继承了原有功能外，还支持淡入动画、加载中、加载失败提示、圆角值和形状等。

**我们推荐您在任何使用图片场景的地方，都优先考虑使用这个小巧，精致而实用的组件。**

注意：

由于在`nvue`下，`u-image`名称被 uni-app 官方占用，在`nvue`页面中请使用`u-image`名称，在`vue`页面中使用`u-image`或者`u-image`均可。


### [#](http://118.25.198.98/components/image.html#api) API

### [#](http://118.25.198.98/components/image.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|src|图片地址，**强烈建议**使用绝对或者网络路径|String|\-|\-|
|mode|裁剪模式，见上方说明|String|aspectFill|\-|
|width|宽度，单位任意，如果为数值，默认单位 px|String|Number|300|
|height|高度，单位任意，如果为数值，默认单位 px|String|Number|225|
|shape|图片形状，circle-圆形，square-方形|String|square|square|
|round|设置圆角值，默认单位 px|String|Number|0|
|lazyLoad|是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效|Boolean|true|\-|
|showMenuByLongpress|是否开启长按图片显示识别小程序码菜单，仅微信小程序有效|Boolean|true|\-|
|loadingIcon|加载中的图标，或者小图片|String|photo|\-|
|errorIcon|加载失败的图标，或者小图片|String|error-circle|\-|
|showLoading|是否显示加载中的图标或者自定义的 slot|Boolean|false|true|
|showError|是否显示加载错误的图标或者自定义的 slot|Boolean|false|true|
|fade|是否需要淡入效果|Boolean|false|true|
|webp|只支持网络资源，只对微信小程序有效|Boolean|false|true|
|duration|搭配`fade`参数的过渡时间，单位 ms|String|Number|500|
|bgColor|背景颜色，用于深色页面加载图片时，为了和背景色融合|String|#f3f4f6|\-|

### [#](http://118.25.198.98/components/image.html#slot) Slot

|名称|说明|
|---|---|
|loading|自定义加载中的提示内容|
|error|自定义失败的提示内容|

### [#](http://118.25.198.98/components/image.html#cellitem-events) CellItem Events

|事件名|说明|回调参数|
|---|---|---|
|click|点击图片时触发|\-|
|error|图片加载失败时触发|err: 错误信息|
|load|图片加载成功时触发|\-|

上次更新时间: 2025/9/11 13:27:54