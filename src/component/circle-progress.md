展示操作或任务的当前进度，比如上传文件，是一个圆形的进度环。


### API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|percent|圆环进度百分比值，为数值类型，0-100|String|Number|\-|
|inactive-color|圆环的底色，默认为灰色(该值无法动态变更)|String|#ececec|\-|
|active-color|圆环激活部分的颜色(该值无法动态变更)|String|#19be6b|\-|
|width|整个圆环组件的宽度，高度默认等于宽度值，单位rpx|String|Number|200|
|border-width|圆环的边框宽度，单位rpx|String|Number|14|
|duration|整个圆环执行一圈的时间，单位ms|String|Number|1500|
|type|如设置，`active-color`值将会失效|String|\-|success / primary / error / info / warning|
|bg-color|整个组件背景颜色，默认为白色|String|#ffffff|\-|


上次更新时间: 2025/7/10 18:08:31