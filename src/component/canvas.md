Canvas 画布组件，支持2D和WebGL渲染，提供统一的跨平台画布API。


## API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|width|画布宽度|String|Number|375|
|height|画布高度|String|Number|\-|
|type|画布类型|String|2d（微信小程序/抖音小程序）
webgl（其他平台）|2d|
|disableScroll|是否禁用滚动|Boolean|false|true|
|hidpi|是否启用高清|Boolean|true|false|

### Events

|事件名|说明|回调参数|
|---|---|---|
|onTouchstart|触摸开始|event|
|onTouchmove|触摸移动|event|
|onTouchend|触摸结束|event|
|onTouchcancel|触摸取消|event|
|onLongtap|长按|event|
|onError|错误事件|event|

### Methods

|方法名|说明|参数|返回值|
|---|---|---|---|
|getCanvasContext|获取画布上下文|\-|Promise<{canvas, width, height, canvasId, use2D}>|
|queryCanvas|查询画布节点信息|\-|Promise<{node, size}>|
|canvasToTempFilePath|导出画布为临时文件|options|Promise<string>|

### canvasToTempFilePath 参数

|参数|说明|类型|默认值|
|---|---|---|---|
|x|画布x轴起点|Number|0|
|y|画布y轴起点|Number|0|
|width|画布宽度|Number|canvas宽度|
|height|画布高度|Number|canvas高度|
|destWidth|输出图片宽度|Number|width|
|destHeight|输出图片高度|Number|height|
|fileType|图片格式|String|png|
|quality|图片质量|Number|1|

上次更新时间: 2025/9/20 08:47:51