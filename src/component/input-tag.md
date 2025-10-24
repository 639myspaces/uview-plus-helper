## InputTag 输入标签 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/inputTag.html#api)

用于在输入框中快速录入多个标签项，支持折叠展示、最大数量限制、禁用、内嵌标签等能力，移动端友好。


## API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|v-model|绑定的标签数组|Array|\[\]|\-|
|placeholder|输入框占位符|String|请输入内容，回车添加|\-|
|max|最大可添加数量|Number|String|\-|
|collapseTags|是否折叠展示|Boolean|false|true|
|maxCollapseTags|折叠时最多展示的标签数量|Number|String|1|
|inputStyle|输入框自定义样式|Object|String|\-|
|placeholderStyle|占位符样式|Object|String|\-|
|disabled|是否禁用|Boolean|false|true|
|showConfirmButton|是否显示右侧确认按钮（外置模式）|Boolean|true|false|
|confirmButtonText|确认按钮文案（为空则不显示按钮）|String|添加标签|\-|
|saveOnBlur|失焦时是否保存（`tagInside` 或隐藏按钮时更常用）|Boolean|true|false|
|tagBgColor|标签背景色（支持内置色值或自定义色）|String|\-|\-|
|tagInside|标签是否内嵌到输入区域|Boolean|false|true|
|tagColor|标签字体颜色（不传则按背景自适应）|String|\-|\-|
|plain|是否镂空标签|Boolean|false|true|
|shape|标签形状|String|square|circle|
|bgColor|容器背景色（内嵌与外置模式均可用）|String|\-|\-|
|round|容器圆角|Number|String|5|

> 颜色说明：`tagBgColor` 支持 uView next预设色（如 `primary`、`warning`）或十六进制 / rgb / rgba 自定义色；当使用自定义浅色时，`tagColor` 建议指定为深色以增强可读性。

### Events

|事件名|说明|回调参数|
|---|---|---|
|change|标签集合变更时触发|Array 当前标签数组|
|addTag|新增标签时触发|String 新增的标签值|
|removeTag|移除标签时触发|String 被移除的标签值|

### Slots

当前组件无插槽。

上次更新时间: 2025/9/20 08:47:51