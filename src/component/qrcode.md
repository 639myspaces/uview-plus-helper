## [#](http://118.25.198.98/components/qrcode2.html#qrcode-%E4%BA%8C%E7%BB%B4%E7%A0%81-3-6-0) Qrcode 二维码 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/qrcode2.html#api)

二维码生成组件，支持自定义颜色、图标、大小等配置，还支持二维码状态显示和长按保存功能。


### [#](http://118.25.198.98/components/qrcode2.html#api) API

### [#](http://118.25.198.98/components/qrcode2.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|value|二维码内容|String|Number|''|
|size|二维码尺寸|String|Number|140|
|background|背景色|String|'#fff'|\-|
|foreground|前景色|String|'#000'|\-|
|pdground|定位角点颜色|String|'#000'|\-|
|level|容错级别|String|'H'|L|
|icon|二维码中心图标|String|''|\-|
|iconSize|图标大小|Number|30|\-|
|status|二维码状态|String|''|expired|
|expiredText|过期提示文字|String|'二维码已过期'|\-|
|scannedText|已扫码提示文字|String|'已扫描'|\-|
|refreshText|刷新按钮提示文字|String|'点击刷新'|\-|
|mode 3.6.1|生成模式，图片模式不存在层级问题|String|image|canvas|

### [#](http://118.25.198.98/components/qrcode2.html#event) Event

|事件名|说明|回调参数|版本|
|---|---|---|---|
|change|重新生成二维码时触发|\-|\-|
|refresh|点击刷新按钮时触发|\-|\-|
|onLongpress|长按保存二维码时触发|tempFilePath: 临时文件路径|\-|
|error|生成或保存出错时触发|error: 错误信息|\-|

### [#](http://118.25.198.98/components/qrcode2.html#%E6%8F%92%E6%A7%BD) 插槽

|插槽名|说明|版本|
|---|---|---|
|loading|自定义加载状态显示|\-|
|expired|自定义过期状态显示|\-|
|scanned|自定义已扫描状态显示|\-|

### [#](http://118.25.198.98/components/qrcode2.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9) 注意事项

1.  **图标要求**：`icon`属性需要传入图片的完整URL地址，建议使用正方形图片以获得最佳效果。
    
2.  **容错级别**：容错级别越高，二维码越不容易被破坏，但二维码密度也会相应增加。建议根据实际使用场景选择合适的容错级别。
    
3.  **长按保存**：长按保存功能在不同平台上的表现可能略有差异，建议在目标平台上进行充分测试。
    
4.  **状态管理**：`status`属性用于控制二维码的显示状态，当设置为`expired`或`scanned`时，会显示相应的遮罩层。
    
5.  **文件导出**：`fileType`支持`png`和`jpg`格式，`quality`参数仅在导出`jpg`格式时有效。
    

上次更新时间: 2025/9/20 08:47:51