该组件一般用于商城购物选择物品数量的场景

注意：该输入框只能输入大于或等于0的整数


### [#](http://118.25.198.98/components/numberBox.html#api) API

### [#](http://118.25.198.98/components/numberBox.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|name|步进器标识符，在change回调返回|String|Number|\-|
|value|用于双向绑定的值，初始化时设置设为默认min值(最小值)|String|Number|1|
|min|用户可输入的最小值|String|Number|1|
|max|用户可输入的最大值|String|Number|`Number.MAX_SAFE_INTEGER`|
|step|步长，每次加或减的值， 支持小数值，如需小数|String|Number|1|
|integer|是否只能输入正整数|Boolean|false|true|
|disabled|是否禁用操作，包括输入框，加减按钮|Boolean|false|true|
|disabledInput|是否禁止输入框|Boolean|false|true|
|asyncChange|是否开启异步变更，开启后需要手动控制输入值|Boolean|false|true|
|inputWidth|输入框宽度，单位px|String|Number|35|
|showMinus|是否显示减少按钮|Boolean|true|false|
|showPlus|是否显示增加按钮|Boolean|true|false|
|decimalLength|显示的小数位数|String|Number|\-|
|longPress|是否允许长按进行加减|Boolean|true|false|
|color|输入框文字和加减按钮图标的颜色|String|#323233|\-|
|buttonSize|按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致|String|Number|30|
|bgColor|输入框和按钮的背景颜色|String|#EBECEE|\-|
|cursorSpacing|指定光标于键盘的距离，避免键盘遮挡输入框，单位px|String|Number|100|
|disablePlus|是否禁用增加按钮|Boolean|false|true|
|disableMinus|是否禁用减少按钮|Boolean|false|true|
|iconStyle|加减按钮图标的样式|String|\-|\-|
|iconSize 3.0.1|加减按钮图标大小|String|Number|15|
|buttonRound 3.0.1|加减按钮圆角|String|Number|\-|
|inputBgColor 3.0.1|输入框背景颜色|String|\-|\-|
|disableColor 3.3.1|按钮禁用后按钮和输入框字体颜色|String|#f7f8fa|\-|
|disableBgColor 3.3.1|禁用后的按钮和输入框背景颜色|String|#c8c9cc|\-|

### [#](http://118.25.198.98/components/numberBox.html#events) Events

|事件名|说明|回调参数|
|---|---|---|
|focus|输入框得到焦点触发(按钮可点击情况下)，对象形式|value：输入框当前值，name：步进器标识符|
|blur|输入框失去焦点时触发，对象形式|value：输入框当前值，name：步进器标识符|
|change|输入框内容发生变化时触发，对象形式|value：输入框当前值，name：步进器标识符|
|overlimit|超过范围阈值时触发|type：（`minus`已达最小值，`plus`已达最大值）|

### [#](http://118.25.198.98/components/numberBox.html#slots) Slots

|名称|说明|
|---|---|
|minus|减少按钮|
|input|输入框|
|plus|增加按钮|

上次更新时间: 2025/7/31 14:06:20