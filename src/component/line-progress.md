展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。


### API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|activeColor|进度条激活部分的颜色|String|#19be6b|\-|
|inactiveColor|进度条的底色，默认为灰色|String|#ececec|\-|
|percentage|进度百分比，数值|String|Number|0|
|showText|是否在进度条内部显示百分比的值|Boolean|true|false|
|height|进度条的高度，默认单位px|String|Number|12|

### Slots

|名称|说明|
|---|---|
|default|传入自定义的显示内容，将会覆盖默认显示的百分比值|

上次更新时间: 2025/7/31 14:06:20