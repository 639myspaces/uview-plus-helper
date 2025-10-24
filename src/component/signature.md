该组件可用于电子签名、手写签名等场景。支持多种画笔颜色、压感绘制、撤销重做、水印等功能。


### API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|标题|String|请签名|\-|
|showTitle|是否显示标题|Boolean|true|\-|
|showToolbar|是否显示工具栏|Boolean|true|\-|
|showColorList|是否显示颜色列表|Boolean|true|\-|
|showClear|是否显示清空按钮|Boolean|true|\-|
|showUndo|是否显示撤销按钮|Boolean|true|\-|
|showClose 3.5.7|是否显示关闭按钮|Boolean|true|\-|
|closeText 3.5.7|关闭按钮的文本|String|关闭|\-|
|clearText|清空按钮的文本|String|清空|\-|
|undoText|撤销按钮的文本|String|撤销|\-|
|confirmText|完成按钮的文本|String|完成|\-|
|toolbarStyle|工具栏对齐方式|Object|{}|\-|
|fixed|是否固定标题栏和工具栏|Boolean|false|\-|
|minLineWidth|线条最小宽度|String|Number|2|
|maxLineWidth|线条最大宽度|String|Number|6|
|penColor|画笔颜色|String|#333333|\-|
|penColorList|画笔颜色列表|Array|\['#333333', '#FF1E10', '#FFBE00', '#1A9BFF', '#1AAD19'\]|\-|
|penSize|画笔大小|String|Number|2|
|backgroundColor|背景颜色|String|#ffffff|\-|
|type|canvas类型|String|2d|\-|
|openSmooth|是否开启压感|Boolean|false|\-|
|maxHistoryLength|最大历史记录数|String|Number|20|
|landscape|是否横屏|Boolean|false|\-|
|disableScroll|是否禁用滚动|Boolean|true|\-|
|disabled|是否禁用|Boolean|false|\-|
|boundingBox|只生成内容区域|Boolean|false|\-|
|customStyle|自定义样式|Object|String|{}|
|fileType|输出的图片类型|String|png|png, jpg|
|quality|图片的质量，取值范围为 (0, 1)|Number|1|\-|
|showWatermark|是否显示水印|Boolean|false|\-|
|watermark|水印配置对象|Object|{}|\-|

### Events

|事件名|说明|回调参数|
|---|---|---|
|clear|清空签名时触发|\-|
|undo|撤销操作时触发|\-|
|confirm|完成签名时触发|base64图片数据|

### Methods

|方法名|说明|参数|返回值|
|---|---|---|---|
|clear|清空签名|\-|\-|
|undo|撤销上一步操作|\-|\-|
|getImage|获取签名图片|\-|Promise<String>|

### Slots

|名称|说明|
|---|---|
|title|自定义标题内容|
|toolbar|自定义工具栏内容|

上次更新时间: 2025/8/30 23:36:46