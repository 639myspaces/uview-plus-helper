弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。


### API

### Props

注意：需要给`modal`组件通过`show`绑定一个布尔值，来初始化`modal`的状态，随后该值被双向绑定。

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|show|是否显示模态框，请赋值给`show`|Boolean|false|true|
|title|标题内容|String|\-|\-|
|content|模态框内容，如传入`slot`内容，则此参数无效|String|\-|\-|
|confirmText|确认按钮的文字|String|确认|\-|
|cancelText|取消按钮的文字|String|取消|\-|
|showConfirmButton|是否显示确认按钮|Boolean|true|false|
|showCancelButton|是否显示取消按钮|Boolean|false|true|
|confirmColor|确认按钮的颜色|String|#2979ff|\-|
|cancelColor|取消按钮的颜色|String|#606266|\-|
|duration|弹窗动画过度时间|Number|400|\-|
|buttonReverse|对调确认和取消的位置|Boolean|false|true|
|zoom|是否开启缩放模式|Boolean|true|false|
|zIndex 3.5.6|弹出层的`z-index`值|String / Number|10075|\-|
|asyncClose|是否异步关闭，只对确定按钮有效，见上方说明|Boolean|false|true|
|closeOnClickOverlay|是否允许点击遮罩关闭Modal（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）|Boolean|false|true|
|negativeTop|往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位|String|Number|0|
|width|modal宽度，不支持百分比，可以数值，px，rpx单位|String|Number|650rpx|
|confirmButtonShape|确认按钮的样式,如设置，将不会显示取消按钮|String|\-|circle(圆形)|
|round 3.0.1|设置圆角值|string|Number|6px|
|buttonModel 3.1.5|按钮模式，text 文字模式，button 按钮模式|string|text|button|
|buttonRound 3.1.5|按钮圆角，仅按钮模式有效|String|Number|
|confirmBgColor 3.1.5|确认按钮背景颜色，仅按钮模式有效|String|\-|\-|
|cancelBgColor 3.1.5|取消按钮背景颜色，仅按钮模式有效|String|\-|\-|

### Event

|事件名|说明|回调参数|
|---|---|---|
|confirm|点击确认按钮时触发|\-|
|cancel|点击取消按钮时触发|\-|
|close|点击遮罩关闭触发，closeOnClickOverlay为true有效|\-|

### Slots

|名称|说明|
|---|---|
|default|传入自定义内容，一般为富文本，见上方说明|
|confirmButton|传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景|

上次更新时间: 2025/8/24 23:26:43