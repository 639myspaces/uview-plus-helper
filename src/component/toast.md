Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，我们为其提供了多种丰富的 API。

注意：

由于 uni 中无法通过 js 创建元素，所以需要在页面中调用`<toast />`组件，再通过`ref`开启


### API

### Props

这些参数为通过`ref`调用`<toast/>`组件内部的`show`方法时，需要传递参数

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|loading|是否加载中|Boolean|false|true|
|title|显示的文本|String|Number|\-|
|icon|图标，或者绝对路径的图片|String|\-|\-|
|position|toast 出现的位置|String|center|top / bottom|
|type|主题类型|String|\-|\-|
|params|跳转的参数|Object|\-|\-|
|duration|展示时间，单位 ms|String|Number|2000|
|success|执行完后的回调函数|Function|null|\-|

### Methods

方法是通过`ref`调用的，参见上方说明 注意：所有有关`ref`的调用，都不能在页面的`onLoad`生命周期调用，因为此时组件尚未创建完毕，会报错，应该在`onReady`生命周期调用。

|方法名|说明|参数|版本|
|---|---|---|---|
|open|显示 toast，如需一进入页面就显示 toast，请在`onReady`生命周期调用|见上方说明|\-|

上次更新时间: 2025/9/20 08:47:51