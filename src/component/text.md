# Text 文本

此组件集成了文本类在项目中的常用功能，包括状态，拨打电话，格式化日期，*替换，超链接...等功能。您大可不必在使用特殊文本时自己定义，text组件几乎涵盖您能使用的大部分场景。

## 注意事项

由于在`nvue`下，`u-text`名称被uni-app官方占用，在`nvue`页面中请使用`up-text`名称，在`vue`页面中使用`up-text`或者`u-text`均可。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| type | 主题颜色 | String | - | - |
| show | 是否显示 | Boolean | true | false |
| text | 显示的值 | String \| Number | - | - |
| prefixIcon | 前置图标 | String | - | - |
| suffixIcon | 后置图标 | String | - | - |
| mode | 文本处理的匹配模式text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接 | String | - | - |
| href | mode=link下，配置的链接 | String | - | - |
| format | 格式化规则 | String \| Function | - | - |
| call | mode=phone时，点击文本是否拨打电话 | Boolean | false | true |
| openType | 小程序的打开方式 | String | - | - |
| bold | 是否粗体，默认normal | Boolean | false | true |
| block | 是否块状 | Boolean | false | true |
| lines | 文本显示的行数，如果设置，超出此行数，将会显示省略号 | String \| Number | - | - |
| color | 文本颜色 | String | #303133 | - |
| size | 字体大小 | String \| Number | 15 | - |
| iconStyle | 图标的样式 | Object \| String | 15px | - |
| decoration | 文字装饰，下划线，中划线等 | String | none | underline/line-through |
| margin | 外边距，对象、字符串，数值形式均可 | Object \| Number \| String | - | - |
| lineHeight | 文本行高 | Number \| String | - | - |
| align | 文本对齐方式 | String | left | center/right |
| wordWrap | 文字换行 | String | normal | break-word/anywhere |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击触发事件 | - |