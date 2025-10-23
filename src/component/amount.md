本组件一个专门用于展示金额、价格等金融数字的组件，支持多种格式化选项、动画效果和中文大写转换。


## [#](http://118.25.198.98/components/amount.html#api) API

### [#](http://118.25.198.98/components/amount.html#props) Props

|参数|说明|类型|默认值|
|---|---|---|---|
|value|金额数值|Number|0|
|symbol|金融符号|String|'￥'|
|reverse|是否置后金额符号位置|Boolean|false|
|precision|数字精度，小数点后保留几位|Number|2|
|roundUp|数字精度取舍是否四舍五入|Boolean|true|
|transition|数字变化是否使用动画|Boolean|false|
|duration|数字变化动画时长|Number|1000|
|separatorDigits|分隔符位置 (3为千分位，4为万分位)|Number|4|
|separator|分隔符|String|','|
|showSymbol|是否显示金融符号|Boolean|true|
|showDecimal|是否显示小数|Boolean|true|
|showSeparator|是否显示分隔符|Boolean|false|
|capital|数字是否转换为大写中文|Boolean|false|
|fontSize|整数字体大小|String|''|
|fontSizeRatio|金融符号小数与整数的比例或字体大小|String/Number|0.7|
|color|颜色，支持使用主题色|String|''|
|customStyle|自定义样式|Object|{}|

### [#](http://118.25.198.98/components/amount.html#slots) Slots

|名称|说明|参数|
|---|---|---|
|default|自定义内容|{ integer: string, decimal: string, capital: string }|

上次更新时间: 2025/8/30 23:36:46