该组件用于分隔长列表，每次只加载一个页面。适用于数据量较大的场景，通过分页的方式提升用户体验和页面性能。

注意

VUE2版本下，微信小程序会控制台会报 `More than one slot named "page" are found inside a single component instance` 的警告，VUE3版本无问题，推荐使用VUE3


### [#](http://118.25.198.98/components/pagination.html#api) API

### [#](http://118.25.198.98/components/pagination.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|modelValue|当前页码（Vue3，优先级高于value）|Number|1|\-|
|value|当前页码（Vue2或Vue3备用）|Number|1|\-|
|total|总记录数|Number|0|\-|
|pageSize|每页显示的记录数|Number|10|\-|
|pagerCount|显示的页码按钮数量|Number|5|\-|
|disabled|是否禁用分页|Boolean|false|true|
|forceEllipses|是否显示省略号|Boolean|false|true|
|simple|是否为简单分页|Boolean|false|true|
|showPrevButton|是否展示上一页按钮|Boolean|true|false|
|showNextButton|是否展示下一页按钮|Boolean|true|false|
|prevText|上一页按钮文字|String|'上一页'|\-|
|nextText|下一页按钮文字|String|'下一页'|\-|
|bgColor|背景色|String|Boolean|'#f7f7f7'|
|color|文本色|String|'#606266'|\-|
|activeBgColor|激活背景色|String|Boolean|'#2979ff'|
|activeColor|激活文本色|String|Boolean|'#ffffff'|
|fontSize|字体尺寸|String|'14px'|\-|
|round|圆角|String|'4px'|\-|
|borderColor|描边色|String|Boolean|'#e4e7ed'|
|itemWidth|每项宽度|String|'34px'|\-|
|itemHeight|每项高度|String|'34px'|\-|
|customStyle|自定义样式|Object|{}|\-|

### [#](http://118.25.198.98/components/pagination.html#events) Events

|事件名|说明|回调参数|
|---|---|---|
|change|切换分页时触发|page: 当前页码|

### [#](http://118.25.198.98/components/pagination.html#slots) Slots

|名称|说明|参数|
|---|---|---|
|prev|自定义上一页按钮内容|disabled: 是否禁用|
|next|自定义下一页按钮内容|disabled: 是否禁用|
|page|自定义页码按钮内容|label: 页码标签, active: 是否激活|

上次更新时间: 2025/8/24 23:26:43