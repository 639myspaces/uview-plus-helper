该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。


### [#](http://118.25.198.98/components/notify.html#api) API

### [#](http://118.25.198.98/components/notify.html#methods) Methods

|事件名|说明|类型|
|---|---|---|
|show|显示并加载配置|Handler|
|primary / success / warning /error|显示当前主题消息提示|Handler|
|close|关闭消息提示|Handler|

### [#](http://118.25.198.98/components/notify.html#show-methods-arguments) Show Methods Arguments

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|top|到顶部的距离|String|Number|0|
|type|主题，primary，success，warning，error|String|primary|\-|
|color|字体颜色|String|#ffffff|\-|
|bgColor|背景颜色|String|\-|\-|
|message|展示的文字内容|String|\-|\-|
|duration|展示时长，为0时不消失，单位ms|String|Number|3000|
|fontSize|字体大小，单位rpx|String|Number|15|
|safeAreaInsetTop|是否留出顶部安全距离（状态栏高度）|Boolean|false|true|

### [#](http://118.25.198.98/components/notify.html#slot) Slot

|参数|说明|
|---|---|
|icon|通知内容|

上次更新时间: 2025/7/31 14:06:20