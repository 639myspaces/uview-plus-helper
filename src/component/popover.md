## [#](http://118.25.198.98/components/popover.html#%E4%BB%8B%E7%BB%8D) 介绍

Popover 气泡弹出框是一个轻量级的弹出层组件，用于显示提示信息或额外内容。支持多种弹出方向和位置，具有良好的交互体验。

注意

由于小程序无法监听点击自己以外的地方，为了在点击页面其他地方时，可以自动关闭 popover ，所以需要在页面的根元素上绑定点击事件，并发送 uni.$emit('u-popover-close') 事件


## [#](http://118.25.198.98/components/popover.html#api) API

### [#](http://118.25.198.98/components/popover.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|show|是否显示弹出层|Boolean|false|true / false|
|content|弹出层内容|String|''|\-|
|position|弹出方向|String|'top'|top / bottom / left / right / auto / top-left / top-right / bottom-left / bottom-right / left-top / left-bottom / right-top / right-bottom|
|showArrow|是否显示箭头|Boolean|true|true / false|
|arrowSize|箭头大小|String / Number|'12px'|\-|
|arrowColor|箭头颜色|String|'#000'|\-|
|bgColor|弹出层背景色|String|'#060607'|\-|
|color|文字颜色|String|'#fff'|\-|
|fontSize|字体大小|String / Number|'14px'|\-|
|padding|内边距|String / Number|'8px 12px'|\-|
|round|圆角|String / Number|'4px'|\-|
|width|弹出层宽度|String / Number|''|\-|
|maxWidth|弹出层最大宽度|String / Number|'200px'|\-|
|minWidth|弹出层最小宽度|String / Number|'50px'|\-|
|zIndex|层级|String / Number|999|\-|
|duration|动画时长（毫秒）|String / Number|300|\-|
|disabled|是否禁用|Boolean|false|true / false|
|popoverStyle|自定义弹出层样式|Object|{}|\-|
|showOverlay 3.6.7|是否显示遮罩层|Boolean|false|true|

### [#](http://118.25.198.98/components/popover.html#slots) Slots

|名称|说明|参数|
|---|---|---|
|content|弹出层的内容|\-|

上次更新时间: 2025/9/11 13:27:54