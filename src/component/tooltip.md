Tooltip组件主要用于长按操作，类似微信的长按气泡


### [#]() API

### [#]() Tooltip Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|text|需要显示的提示文字|String|Number|\-|
|copyText|点击复制按钮时，复制的文本，为空则使用text值|String|Number|\-|
|size|文本大小|String|Number|14|
|color|字体颜色|String|#606266|\-|
|bgColor|弹出提示框时，文本的背景色|String|transparent|\-|
|direction|弹出提示的方向，top-上方，bottom-下方|String|top|bottom|
|zIndex|弹出提示的z-index，nvue无效|String|Number|10071|
|showCopy|是否显示复制按钮|Boolean|true|false|
|buttons|扩展的按钮组|Array|\-|\-|
|overlay|是否显示透明遮罩以防止触摸穿透|Boolean|true|false|
|showToast|是否显示复制成功或者失败的`toast`|Boolean|true|false|

### [#]() Tooltip Events

|事件名|说明|回调参数|
|---|---|---|
|click|点击触发事件|index，被点击按钮的索引|

上次更新时间: 2025/7/31 14:06:20