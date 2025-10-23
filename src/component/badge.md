该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。


### [#](http://118.25.198.98/components/badge.html#api) API

### [#](http://118.25.198.98/components/badge.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|isDot|不展示数字，只有一个小点|Boolean|false|true|
|v-model / modeValue / value|展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为`0`且`show-zero`为`false`时隐藏|String|Number|\-|
|show|组件是否显示|Boolean|true|false|
|max|最大值，超过最大值会显示 '{max}+'|String|Number|99|
|type|主题类型|String|error|warning / success / primary / info|
|showZero|当数值为 0 时，是否展示 Badge|Boolean|false|true|
|bgColor|背景颜色，优先级比`type`高，如设置，`type`参数会失效，支持使用主题色|String|\-|\-|
|color|字体颜色，支持使用主题色|String|#ffffff|\-|
|shape|徽标形状，circle-四角均为圆角，horn-左下角为直角|String|circle|horn|
|numberType|置数字的显示方式，详细见上方文档|String|overflow|ellipsis / limit|
|offset|设置badge的位置偏移，格式为 \[x, y\]，也即设置的为`top`和`right`的值，`absolute`为`true`时有效|Array|\-|\-|
|inverted|是否反转背景和字体颜色|Boolean|false|true|
|absolute|组件是否绝对定位，为`true`时，`offset`参数才有效|Boolean|false|true|

上次更新时间: 2025/8/30 23:36:46