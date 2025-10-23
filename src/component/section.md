该组件一般用于分类信息有很多，但是限于篇幅只能列出一部分，让用户通过"查看更多"获得更多信息的场景，实际效果见演示。


### [#](http://118.25.198.98/components/section.html#api) API

### [#](http://118.25.198.98/components/section.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|左边主标题|String|\-|\-|
|sub-title|右边副标题|String|更多|\-|
|right|是否显示右边的内容|Boolean|true|false|
|show-line|是否显示左边的竖条|Boolean|true|false|
|font-size|主标题的字体大小|String|Number|28|
|bold|主标题是否加粗|Boolean|true|false|
|color|主标题颜色|String|#303133|\-|
|sub-color|右边副标题的颜色(右箭头同此颜色)|String|#909399|\-|
|line-color|左边竖线的颜色，默认同`color`参数值|String|\-|\-|
|arrow|是否显示右边箭头|Boolean|true|false|

### [#](http://118.25.198.98/components/section.html#events) Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|click|组件右侧的内容被点击时触发，用于跳转"更多"|\-|\-|

### [#](http://118.25.198.98/components/section.html#slot) Slot

|名称|说明|
|---|---|
|left|自定义左侧内容|
|right|自定义右侧内容|

上次更新时间: 2025/7/10 18:08:31