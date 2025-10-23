tag 组件一般用于标记和选择，我们提供了更加丰富的表现形式，能够较全面的涵盖您的使用场景


### [#](http://118.25.198.98/components/tag.html#api) API

### [#](http://118.25.198.98/components/tag.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|type|主题类型|String|primary|success / info / warning / error|
|disabled|不可用|Boolean|String|false|
|size|标签大小|String|medium|large、mini|
|shape|标签形状|String|square|circle|
|text|标签的文字内容|String|Number|\-|
|bgColor|背景颜色，默认为空字符串，即不处理|String|#C6C7CB|\-|
|color|标签字体颜色，默认为空字符串，即不处理|String|\-|\-|
|borderColor|标签的边框颜色|String|\-|\-|
|closeColor|关闭按钮图标的颜色|String|\-|\-|
|name|点击时返回的索引值，用于区分例遍的数组哪个元素被点击了|String|Number|\-|
|plainFill|镂空时是否填充背景色|Boolean|false|true|
|plain|是否镂空|Boolean|false|true|
|closable|是否可关闭，设置为`true`，文字右边会出现一个关闭图标|Boolean|false|true|
|show|标签显示与否|Boolean|true|false|
|icon|内置图标，或绝对路径的图片|String|\-|\-|
|gutter|标签之间的间距|String|Number|10px|
|animation|是否开启过渡动画|Boolean|true|false|
|closeInside|关闭按钮是不是内嵌在标签内|Boolean|false|true|

### [#](http://118.25.198.98/components/tag.html#event) Event

|事件名|说明|回调参数|版本|
|---|---|---|---|
|click|点击标签触发|index: 传递的`index`参数值|\-|
|close|`closable`为`true`时，点击标签关闭按钮触发|index: 传递的`index`参数值|\-|

上次更新时间: 2025/9/11 13:27:54