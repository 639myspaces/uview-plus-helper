基于字体的图标集，包含了大多数常见场景的图标。


### [#](http://118.25.198.98/components/icon.html#api) API

### [#](http://118.25.198.98/components/icon.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|name|图标名称，见示例图标集，如名称带有`/`，会被认为是图片图标|String|\-|\-|
|color|图标颜色，支持使用主题色|String|color\['u-content-color'\]|\-|
|size|图标字体大小，单位默认 px|String|Number|16px|
|bold|是否显示粗体|Boolean|false|\-|
|index|一个用于区分多个图标的值，点击图标时通过`click`事件传出|String|Number|\-|
|hoverClass|图标按下去的样式类，用法同 uni 的`view`组件的`hover-class`参数，详见：[hover-class (opens new window)](https://uniapp.dcloud.io/component/view)|String|\-|\-|
|customPrefix|自定义字体图标库时，需要写上此值，详见：[扩展自定义图标库 (opens new window)](https://uview.d3u.cn/guide/customIcon.html)|String|uicon|\-|
|label|图标右侧/下方的 label 文字|String|Number|\-|
|labelPos|`label`相对于图标的位置|String|right|bottom / top / left|
|labelSize|`label`字体大小，单位默认 px|String|Number|15px|
|labelColor|`label`字体颜色，支持使用主题色|String|color\['u-content-color'\]|\-|
|space|`label`与图标的距离，单位默认 px|String|Number|3px|
|imgMode|图片裁剪、缩放的模式，image 组件原生属性，详见：[image (opens new window)](https://uniapp.dcloud.io/component/image?id=image)|String|\-|\-|
|width|`name`为图片路径时图片的宽度，单位默认 px|String|Number|\-|
|height|`name`为图片路径时图片的高度，单位默认 px|String|Number|\-|
|top|图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位默认 px|String|Number|0|
|stop|是否阻止事件传播|Boolean|false|\-|

### [#](http://118.25.198.98/components/icon.html#events) Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|click|点击图标时触发|index: 通过`props`传递的`index`值|\-|



上次更新时间: 2025/9/11 13:27:54