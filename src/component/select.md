该组件是一个基于本地数据的下拉列表，提供丰富的配置选项和事件回调，适用于各种选择场景。


### [#]() API

### [#]() Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|value|默认值，多选时为数组|String/Number/Array|''|\-|
|list|本地数据，格式 \[{text:'',value:'',disabled?:boolean}\]|Array|\[\]|\-|
|clearable|是否可以清空已选项|Boolean|true|true、false|
|emptyText|没有数据时显示的文字|String|'暂无数据'|\-|
|label|左侧标题|String|''|\-|
|placeholder|输入框的提示文字|String|'请选择'|\-|
|disabled|是否禁用|Boolean|false|true、false|
|multiple|是否多选模式|Boolean|false|true、false|
|wrap|是否允许选中文本换行显示|Boolean|false|true、false|
|placement|弹出位置|String|'bottom'|'top'、'bottom'|
|align|选择文字的位置|String|'left'|'left'、'center'、'right'|
|showArrow|是否隐藏右侧按钮|Boolean|false|true、false|
|border|边框样式|String|'default'|'default'、'underline'、'none'|
|customStyle|自定义样式|Object/String|{}|\-|

### [#]() Events

|事件名|说明|回调参数|
|---|---|---|
|change|选中发生变化触发|value: 选中的值|
|open|下拉列表开启时触发|\-|
|close|下拉列表关闭时触发|\-|
|clear|点击清除按钮之后触发|oldValue: 清空前的值|

### [#]() Slot

|名称|说明|
|---|---|
|\-|自定义选择器的所有内容|

上次更新时间: 2025/9/21 12:08:21