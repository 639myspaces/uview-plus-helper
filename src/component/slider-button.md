## SliderButton 滑动按钮 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/sliderButton.html#api)

滑动验证按钮组件，常用于验证用户操作，通过滑动滑块到指定位置来完成验证。


## API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|text|按钮文字|String|滑动解锁|\-|
|width|按钮宽度|String|Number|\-|
|height|按钮高度|String|Number|45|
|round|圆角|String|Number|100|
|bgColor|背景颜色|String|#e0e0e0|\-|
|railIndex|滑道层级|String|Number|\-|
|railColor|滑道颜色|String|主题色|\-|
|railRadius|滑道圆角|String|Number|100|
|textColor|文字颜色|String|#c2c2c2|\-|
|activeTextColor|激活文字颜色|String|#ffffff|\-|
|fontSize|文字大小|String|Number|16|
|textBold|文字是否加粗|Boolean|false|true|
|disabled|是否禁用|Boolean|false|true|
|successText|成功文字|String|验证成功|\-|
|autoReset|是否自动重置|Boolean|false|true|
|resetDelay|重置延迟时间（毫秒）|Number|2000|\-|
|threshold|阈值|String|Number|\-|

### Events

|事件名|说明|回调参数|
|---|---|---|
|change|滑动过程中触发|percent: 滑动进度百分比(0-1)|
|success|滑动验证成功时触发|\-|
|reset|滑动重置时触发|\-|

### Slots

|名称|说明|
|---|---|
|thumb|自定义滑块内容|
|default|自定义文字内容|

### Methods

|方法名|说明|参数|返回值|
|---|---|---|---|
|reset|重置滑动按钮|\-|\-|

上次更新时间: 2025/9/20 08:47:51