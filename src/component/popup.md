弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。


### API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|show|是否展示弹窗|Boolean|false|true|
|overlay|是否显示遮罩|Boolean|true|false|
|mode|弹出方向|String|bottom|top / right / bottom / center|
|title 3.5.0|弹窗的标题|String|\-|\-|
|titleStyle 3.5.1|自定义样式弹窗标题样式|Object|String|\-|
|width|弹窗的宽度|String|Number|\-|
|height|弹窗的高度, mode = top|center|bottom时有效|String|
|duration|遮罩打开或收起的动画过渡时间，单位ms|String|Number|300|
|overlayDuration|遮罩层动画时长，单位ms|String|Number|350|
|closeable|是否显示关闭图标|Boolean|false|true|
|overlayStyle|遮罩自定义样式，一般用于修改遮罩颜色，如：{background: 'rgba(3, 100, 219, 0.5)'}|Object|String|\-|
|overlayOpacity|遮罩透明度，`0-1`之间，勿与`overlayStyle`共用|Number|String|0.5|
|closeOnClickOverlay|点击遮罩是否关闭弹窗（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）|Boolean|true|false|
|zIndex|弹出层的`z-index`值|Number|String|10075|
|safeAreaInsetBottom|是否为留出[底部安全距离](http://118.25.198.98/components/safeAreaInset.html)|Boolean|true|false|
|safeAreaInsetTop|是否留出[顶部安全距离](http://118.25.198.98/components/safeAreaInset.html)（状态栏高度）|Boolean|false|true|
|closeIcon|关闭按钮图标|String|close|
|closeIconColor|关闭按钮图标颜色|String|
|closeIconSize|关闭按钮图标大小|String|Number|18|
|closeIconPos|自定义关闭图标位置，top-left为左上角，top-right为右上角，top-center为上面中间，bottom-left为左下角，bottom-right为右下角|String|top-right|top-left / top-center /bottom-left / bottom-right / bottom-center / bottom-center|
|margin|外边距|Number|String|
|round|设置圆角值，仅对`mode = top|bottom|center`有效|Number|
|zoom|当mode=center时 是否开启缩放|Boolean|true|false|
|bgColor|背景色，一般用于特殊弹窗内容场景，设置为`transparent`可去除默认的白色背景|String|\-|\-|
|customStyle|用户自定义样式|Object|\-|\-|

### Slot

|名称|说明|
|---|---|
|header|自定义标题|
|trigger|自定义触发|

### Event

|事件名|说明|回调参数|版本|
|---|---|---|---|
|open|弹出层打开|\-|\-|
|close|弹出层收起|\-|\-|

上次更新时间: 2025/8/15 23:51:12