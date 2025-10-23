## [#](http://118.25.198.98/components/colorPicker.html#colorpicker-%E9%A2%9C%E8%89%B2%E9%80%89%E6%8B%A9%E5%99%A8-3-5-28) ColorPicker 颜色选择器 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/colorPicker.html#api)

颜色选择器，一个功能强大的颜色选择组件，支持多种颜色格式，预设颜色，可用于主题定制、样式设计等场景。

## [#](http://118.25.198.98/components/colorPicker.html#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF) 使用场景

-   当需要用户选择颜色时，如主题定制、样式设计
-   支持多种使用模式：插入模式和弹出层模式
-   提供预设颜色，方便用户快速选择常用颜色
-   支持多种颜色格式：HEX、RGB、HSB等


## [#](http://118.25.198.98/components/colorPicker.html#api) API

### [#](http://118.25.198.98/components/colorPicker.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|value / modelValue|绑定值，支持HEX、RGB、HSB格式|String|\-|\-|
|defaultColor|默认颜色值|String|theme.primary|\-|
|insert|是否插入模式|Boolean|false|true|
|show|是否显示弹出层|Boolean|false|true|
|closeable|是否显示关闭按钮|Boolean|true|false|
|closeOnClickOverlay|是否允许点击遮罩关闭|Boolean|true|false|
|title|弹出层标题|String|'选择颜色'|\-|
|zIndex|弹出层层级|String|Number|10010|
|round|弹出层圆角值|String|Number|6|
|disabled|是否禁用颜色选择器|Boolean|false|true|
|confirmShape|确认按钮形状|String|'circle'|\-|
|confirmText|确认按钮文字|String|'确认'|\-|
|showPresets|是否显示预设颜色|Boolean|true|false|
|showAlphaSlider|是否显示透明度选择器|Boolean|true|false|
|showHueSlider|是否显示色调选择器|Boolean|true|false|
|presets|预设的颜色分组|Array|见下方说明|\-|

### [#](http://118.25.198.98/components/colorPicker.html#presets-%E9%A2%84%E8%AE%BE%E9%A2%9C%E8%89%B2%E7%BB%93%E6%9E%84) Presets 预设颜色结构

### [#](http://118.25.198.98/components/colorPicker.html#events) Events

|事件名|说明|回调参数|
|---|---|---|
|change|颜色值变化时触发|{ colorFormat: String }|
|formatChange|颜色格式变化时触发|Object|
|open|弹出层打开时触发|\-|
|close|弹出层关闭时触发|\-|
|confirm|点击确认按钮时触发|String (当前选择的颜色值)|

### [#](http://118.25.198.98/components/colorPicker.html#slots) Slots

|插槽名|说明|
|---|---|
|footer|自定义底部按钮区域|

## [#](http://118.25.198.98/components/colorPicker.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9) 注意事项

1.  组件支持 Vue2 和 Vue3 的 v-model 语法
2.  在插入模式下，组件会直接渲染在页面中
3.  在弹出层模式下，需要通过 `show` 属性控制显示状态
4.  预设颜色支持自定义分组和颜色值
5.  组件会自动处理不同颜色格式之间的转换

上次更新时间: 2025/9/20 08:47:51