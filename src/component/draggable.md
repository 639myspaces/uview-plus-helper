此组件用于实现拖拽排序功能，支持多列网格布局、长按拖拽、手柄拖拽等多种交互方式。


### [#](http://118.25.198.98/components/draggable.html#api) API

### [#](http://118.25.198.98/components/draggable.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|list|数据列表|Array|\[\]|\-|
|column|列数|Number|2|\-|
|aspectRatio|宽高比（填写此项时itemHeight失效）|Number|null|\-|
|itemHeight|项目高度|String|Number|60|
|damping|阻尼系数|Number|50|\-|
|friction|摩擦系数|Number|2|\-|
|handle|是否使用手柄拖拽|Boolean|false|true|
|disabled|是否禁用|Boolean|false|true|
|longpress|是否长按拖拽|Boolean|false|true|
|closeable|是否显示关闭按钮|Boolean|false|true|

### [#](http://118.25.198.98/components/draggable.html#events) Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|change|拖拽排序完成时触发|Array: 排序后的数据数组|\-|
|close|点击关闭按钮时触发|Number: 被关闭项目的索引|\-|

### [#](http://118.25.198.98/components/draggable.html#slot) Slot

|名称|说明|参数|
|---|---|---|
|item|自定义项目内容|{ item: 数据项, index: 索引, startIndex: 初始索引, active: 是否激活, disabled: 是否禁用 }|
|close|自定义关闭按钮|\-|

上次更新时间: 2025/8/24 23:26:43