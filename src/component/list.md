该组件为高性能列表组件


### [#]() API

### [#]() List Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|showScrollbar|控制是否出现滚动条，仅 nvue 有效|Boolean|false|true|
|lowerThreshold|距底部多少时触发 scrolltolower 事件|String|Number|50|
|upperThreshold|距顶部多少时触发 scrolltoupper 事件，非 nvue 有效|String|Number|0|
|scrollTop|设置竖向滚动条位置|String|Number|0|
|offsetAccuracy|控制 onscroll 事件触发的频率，仅 nvue 有效|String|Number|10|
|enableFlex|启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点，仅微信小程序有效|Boolean|false|\-|
|pagingEnabled|是否按分页模式显示 List，默认值 false|Boolean|false|\-|
|scrollable|是否允许 List 滚动|Boolean|true|\-|
|scrollIntoView|值应为某子元素 id（id 不能以数字开头）|String|\-|\-|
|scrollWithAnimation|在设置滚动条位置时使用动画过渡|Boolean|false|\-|
|enableBackToTop|iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效|Boolean|false|\-|
|height|列表的高度|String|Number|0|
|width|列表宽度|String|Number|0|
|preLoadScreen|列表前后预渲染的屏数，1 代表一个屏幕的高度，1.5 代表 1 个半屏幕高度|String|Number|1|

### [#]() List Events

|事件名|说明|回调参数|
|---|---|---|
|scroll|滚动条滚动触发事件|scrollTop: 滚动条位置|
|scrolltolower|滚动到底部触发事件|\-|

### [#]() ListItem Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|anchor|用于滚动到指定 item|String|Number|\-|

上次更新时间: 2025/7/31 14:06:20