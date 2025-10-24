该组件一般用于需要滚动数字到某一个值的场景，目标要求是一个递增的值。

注意

如果给组件的父元素设置`text-align: center`想让数字水平居中，可能是由于元素内容快速变化而导致渲染的问题，在APP上组件可能会有轻微的左右抖动现象， 解决办法是给父元素设置`padding-left`或者`margin-left`即可。


### API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|startVal|开始值|String|Number|0|
|endVal|结束值|String|Number|0|
|duration|滚动过程所需的时间，单位ms|String|Number|2000|
|autoplay|是否自动开始滚动|Boolean|true|false|
|decimals|要显示的小数位数，见上方说明|String|Number|0|
|useEasing|滚动结束时，是否缓动结尾，见上方说明|Boolean|true|false|
|decimal|十进制分割|String|.|\-|
|color|字体颜色|String|#606266|\-|
|fontSize|字体大小，单位px|String|Number|22|
|bold|字体是否加粗|Boolean|false|true|
|separator|千位分隔符，见上方说明|String|\-|\-|


### Methods

此方法如要通过ref手动调用

|名称|说明|
|---|---|
|start|`autoplay`为`false`时，通过此方法启动滚动|
|reStart|暂停后重新开始滚动(从暂停前的值开始滚动)|
|paused|暂停滚动|


### Event

|事件名|说明|回调参数|版本|
|---|---|---|---|
|end|数值滚动到目标值时触发|\-|\-|


上次更新时间: 2025/7/31 14:06:20