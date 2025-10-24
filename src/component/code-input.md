该组件一般用于验证用户短信验证码的场景，也可以结合uView的[键盘组件](http://118.25.198.98/components/keyboard.html)使用


### [#]() API

### [#]() Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|type|输入框类型，见上方说明|String|number|text|
|confirmType|设置右下角按钮的文字，兼容性详见uni-app文档|String|done|send|
|confirmHold|点击键盘右下角按钮时是否保持键盘不收起，H5无效|
|adjustPosition 2.0.32|键盘弹起时，是否自动上推页面|Boolean|true|false|
|maxlength|输入字符个数|String \\ Number|6|\-|
|dot|是否用圆点填充|Boolean|false|true|
|mode|模式选择，见上方"基本使用"说明|String|box|bottomLine / middleLine|
|hairline|是否细边框|Boolean|false|true|
|space|字符间的距离|String \\ Number|10|\-|
|v-model|双向绑定的值|String \\ Number|\-|\-|
|focus|是否自动获取焦点|Boolean|false|false|
|bold|字体和输入横线是否加粗|Boolean|false|true|
|color|字体颜色|String|#606266|\-|
|fontSize|字体大小，单位rpx|String \\ Number|18|\-|
|size|输入框的大小，宽等于高|String \\ Number|35|\-|
|disabledKeyboard|禁止点击输入框唤起系统键盘|Boolean|false|true|
|borderColor|边框和线条颜色|String|#c9cacc|\-|
|disabledDot|是否禁止输入"."符号|Boolean|true|false|
|bgColor|背景颜色|String|\-|\-|
|round|设置圆角值|String \\ Number|4px|

### [#]() Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|change|输入内容发生改变时触发，具体见上方说明|value：当前输入的值|\-|
|finish|输入字符个数达`maxlength`值时触发，见上方说明|value：当前输入的值|\-|

上次更新时间: 2025/7/31 14:06:20