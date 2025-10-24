该组件一般用于垂直展示的导航栏，用于在不同的内容区域之间进行切换，支持徽标提示、禁用状态、自定义样式等功能。


### [#]() API

### [#]() Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|value|当前导航项的索引|Number|String|\-|
|modelValue|Vue3模式下当前导航项的索引|Number|String|\-|
|width|宽度|String|\-|\-|
|fontSize|字体大小|String|\-|\-|
|lineHeight|行高|String|\-|\-|
|textColor|文本颜色|String|\-|\-|
|disabledColor|禁用文本颜色|String|\-|\-|
|disabledBgColor|禁用背景颜色|String|\-|\-|
|bgColor|背景色|String|\-|\-|
|activeColor|激活时文本颜色|String|\-|\-|
|activeBgColor|激活时背景颜色|String|\-|\-|
|activeBold|激活时是否加粗|Boolean|\-|\-|
|activeStyle|激活时的样式|String|Object|\-|
|inactiveStyle|非激活时的样式|String|Object|\-|
|lineWidth|滑块长度|String|Number|\-|
|lineHeight|滑块高度|String|Number|\-|
|lineColor|滑块颜色|String|\-|\-|
|lineBgSize|滑块背景显示大小，当滑块背景设置为图片时使用|String|\-|\-|
|showLine|是否显示滑块|Boolean|\-|\-|

### [#]() Events

|事件名|说明|回调参数|
|---|---|---|
|change|切换导航项时触发|{index, label, value}|

### [#]() Slots

|名称|说明|
|---|---|
|default|默认插槽，用于放置 `u-sidebar-item` 组件|

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|label|内容|String|\-|\-|
|value|值，用于标识该项|String|Number|\-|
|icon|图标名称|String|\-|\-|
|iconSize|图标大小|String|Number|\-|
|iconColor|图标颜色|String|\-|\-|
|iconPosition|图标位置|String|\-|left / top|
|badge|右上角的角标提示信息|String|Number|Object|
|dot|是否显示圆点，将会覆盖badge参数|Boolean|\-|\-|
|disabled|是否禁用该项|Boolean|\-|\-|

上次更新时间: 2025/8/24 23:26:43