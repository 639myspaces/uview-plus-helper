文本过长时，自动省略多余的文本。支持展开/收起功能，可以设置省略位置、自定义省略符号等。


## API

### Ellipsis Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|content|文本内容|String|\-|\-|
|position|省略位置|String|end|start / end / middle|
|rows|显示行数|String|Number|1|
|expand-text|展开文本|String|\-|\-|
|collapse-text|收起文本|String|\-|\-|
|symbol|省略符号|String|...|\-|
|color|文本颜色|String|#303133|\-|
|font-size|文本大小|String|Number|14|
|line-height|行高|String|Number|20|
|action-color|展开/收起按钮颜色|String|#3c9cff|\-|
|custom-style|自定义样式|Object|\-|\-|

### Ellipsis Events

|事件名|说明|回调参数|
|---|---|---|
|change|展开/收起状态改变时触发|event = { expanded: Boolean, content: String }|

上次更新时间: 2025/8/24 23:26:43