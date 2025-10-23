警告提示，展现需要关注的信息。

## [#](http://118.25.198.98/components/alert.html#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF) 使用场景

-   当某个页面需要向用户显示警告的信息时
-   非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭


## [#](http://118.25.198.98/components/alert.html#api) API

### [#](http://118.25.198.98/components/alert.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|显示的文字|String|\-|\-|
|type|使用预设的颜色|String|warning|success|
|description|辅助性文字，颜色比 `title` 浅一点，字号也小一点|String|\-|\-|
|closable|关闭按钮（默认为叉号 icon 图标）|Boolean|false|true|
|showIcon|是否显示左边的辅助图标|Boolean|false|true|
|effect|多图时，图片缩放裁剪的模式|String|light（浅色）|dark（深色）|
|center|文字是否居中|Boolean|false|true|
|fontSize|字体大小|String|Number|14|

### [#](http://118.25.198.98/components/alert.html#events) Events

|事件名|说明|回调参数|
|---|---|---|
|click|点击组件时触发|\-|
|close|点击关闭按钮时触发|\-|

上次更新时间: 2025/9/20 08:47:51