cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。


### [#](http://118.25.198.98/components/cell.html#api) API

### [#](http://118.25.198.98/components/cell.html#cellgroup-props) CellGroup Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|分组标题|String|\-|\-|
|border|是否显示外边框|Boolean|true|false|
|round|设置圆角值|string|\-|
|borderColor|边框颜色|string|\-|
|backgroundColor|背景颜色|string|\-|

| customStyle | 用户自定义外部样式，对象形式，如{'font-size': '12px'} 或 {'fontSize': '12px'} | object | - | - |

### [#](http://118.25.198.98/components/cell.html#cell-props) Cell Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|左侧标题|String|Number|\-|
|label|标题下方的描述信息|String|Number|\-|
|value|右侧的内容|String|Number|\-|
|icon|左侧图标名称，或者图片链接(本地文件建议使用绝对地址)|String|\-|\-|
|disabled|是否禁用cell|Boolean|false|true|
|border|是否显示下边框|Boolean|true|false|
|borderColor|边框颜色|string|\-|
|center|内容是否垂直居中(主要是针对右侧的value部分)|Boolean|false|true|
|url|点击后跳转的URL地址|String|\-|\-|
|linkType|链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作|String|navigateTo|\-|
|clickable|是否开启点击反馈(表现为点击时加上灰色背景)|Boolean|false|true|
|isLink|是否展示右侧箭头并开启点击反馈|Boolean|false|true|
|required|是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)|Boolean|false|true|
|rightIcon|右侧的图标箭头|String|arrow-right|\-|
|arrowDirection|右侧箭头的方向，可选值为：left，up，down|String|right|left|
|iconStyle|左侧图标样式|Object|String|\-|
|rightIconStyle|右侧箭头图标的样式|Object|String|\-|
|titleStyle|标题的样式|Object|String|\-|
|size|单位元的大小，可选值为large|String|\-|\-|
|stop|点击cell是否阻止事件传播|Boolean|true|false|
|name|标识符，用于在`click`事件中进行返回|String|Number|\-|

### [#](http://118.25.198.98/components/cell.html#cell-slot) Cell Slot

|名称|说明|
|---|---|
|title|自定义左侧标题部分的内容，如需使用，请勿定义`title`参数，或赋值`null`即可|
|value|自定义右侧标题部分的内容，如需使用，请勿定义`value`参数，或赋值`null`即可|
|icon|自定义左侧的图标|
|right-icon|自定义右侧图标内容，需设置`arrow`为`false`才起作用|
|label|自定义`label`内容|

### [#](http://118.25.198.98/components/cell.html#cell-event) Cell Event

|事件名|说明|回调参数|
|---|---|---|
|click|点击cell列表时触发|name: `props`的`name`参数标识符|

上次更新时间: 2025/9/11 13:27:54