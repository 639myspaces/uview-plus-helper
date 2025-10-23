此选择器用于单列，多列，多列联动的选择场景。


### [#](http://118.25.198.98/components/picker.html#api) API

### [#](http://118.25.198.98/components/picker.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|v-model / modeValue 3.0.1|当前选中项对应的值|Array|\-|\-|
|show|用于控制选择器的弹出与收起|Boolean|false|true|
|showToolbar|是否显示顶部的操作栏|Boolean|true|false|
|title|顶部中间的标题|String|\-|\-|
|columns|设置每一列的数据，见上方说明|Array|\-|\-|
|loading|加载状态|Boolean|false|true|
|itemHeight|各列中，单个选项的高度|String|Number|44|
|cancelText|取消按钮的文字|String|取消|\-|
|confirmText|确认按钮的文字|String|确认|\-|
|cancelColor|取消按钮的颜色|String|#909193|\-|
|confirmColor|确认按钮的颜色|String|#3c9cff|\-|
|visibleItemCount|每列中可见选项的数量|String|Number|5|
|keyName|自定义需要展示的`text`属性键名|String|text|\-|
|valueName|自定义需要展示的`value`属性键名|String|value|\-|
|closeOnClickOverlay|是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）|Boolean|true|false|
|defaultIndex|各列的默认索引|Array|\-|\-|
|immediateChange 2.0.22|是否在手指松开时立即触发`change`事件。若不开启则会在滚动动画结束后触发`change`事件，只在微信`2.21.1`及以上有效|Boolean|false|true|
|round 3.0.1|圆角值，默认无圆角|String|Number|0|

### [#](http://118.25.198.98/components/picker.html#methods) Methods

|名称|说明|
|---|---|
|setIndexs|(index, setLastIndex) 设置对应列的选择值|
|setColumnValues|多列联动时需要用到，见上方说明，注意`微信小程序`的特殊用法|

### [#](http://118.25.198.98/components/picker.html#events) Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|close|关闭选择器时触发|\-|\-|
|confirm|点击确定按钮，返回当前选择的值|Array: 见上方"回调参数"部分说明|\-|
|change|当选择值变化时触发|Array: 见上方"回调参数"部分说明|\-|
|cancel|点击取消按钮|\-|\-|

### [#](http://118.25.198.98/components/picker.html#slot) Slot 3.0.1

|名称|说明|
|---|---|
|trigger|自定义触发|

上次更新时间: 2025/7/31 14:06:20