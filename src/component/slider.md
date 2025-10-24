## Slider 滑动选择器 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/slider.html#api)

适用于选择单个数值或区间范围的场景，支持横向/纵向、反向、禁用、双滑块区间、防交叉、显示数值等能力。


## API

### Props

|参数|说明|类型|默认值|
|---|---|---|---|
|v-model|双向绑定值（Number 或 \[start, end\]）|Number|Array|
|min|最小值|Number|0|
|max|最大值|Number|100|
|step|步长，>0|Number|1|
|range|是否启用区间模式|Boolean|false|
|disabled|是否禁用|Boolean|false|
|readonly|是否只读|Boolean|false|
|reverse|是否反向|Boolean|false|
|noCross|区间是否禁止交叉|Boolean|false|
|vertical|是否竖向|Boolean|false|
|size|主尺寸（纵向为宽度/横向为高度）|String|24px|
|railColor|轨道颜色|String|rgba(0, 0, 0, 0.1)|
|railRadius|轨道圆角|String|2px|
|railSize|轨道厚度|String|4px|
|trackColor|已选轨道颜色|String|#1677ff|
|thumbSize|滑块尺寸|String|20px|
|thumbColor|滑块背景色|String|#ffffff|
|thumbBorder|滑块边框|String|3px solid #1677ff|
|thumbRadius|滑块圆角|String|50%|
|showValue|是否显示当前值|Boolean|false|

说明：数值类 props 会在内部做安全转换与边界裁剪。

### Events

|事件名|说明|回调参数|
|---|---|---|
|change|值稳定后触发（松手/点轨道）|当前值（Number|
|dragStart|开始拖动|当前值（Number|
|dragEnd|结束拖动|当前值（Number|

### Slots

|名称|说明|
|---|---|
|startThumb|起始滑块内容|
|endThumb|结束滑块内容（区间模式）|

上次更新时间: 2025/9/20 08:47:51