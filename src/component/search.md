# Search 搜索

## 提示
由于右侧的演示是通过iframe引入的，缺少移动端的@touchstart事件，故清除控件无效，请在真机演示中查看效果。

搜索组件，集成了常见搜索框所需功能，用户可以一键引入，开箱即用。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 双向绑定输入框搜索值 | String | - | - |
| shape | 搜索框形状，round-圆形，square-方形 | String | round | square |
| bgColor | 搜索框背景颜色 | String | #f2f2f2 | - |
| placeholder | 占位文字内容 | String | 请输入关键字 | - |
| clearabled | 是否启用清除控件 | Boolean | true | false |
| onlyClearableOnFocused | clearabled开启时是否仅聚焦时才显示清除控件 | Boolean | true | false |
| focus | 是否自动获得焦点 | Boolean | false | true |
| showAction | 是否显示右侧控件(右侧的"搜索"按钮) | Boolean | true | false |
| actionStyle | 右侧控件的样式，对象形式 | Object | - | - |
| actionText | 右侧控件文字 | String | 搜索 | - |
| inputAlign | 输入框内容水平对齐方式 | String | left | center / right |
| inputStyle | 自定义输入框样式，对象形式 | Object | - | - |
| disabled | 是否启用输入框 | Boolean | false | true |
| borderColor | 边框颜色，配置了颜色，才会有边框 | String | transparent | - |
| searchIconColor | 搜索图标的颜色，默认同输入框字体颜色 | String | #909399 | - |
| searchIconSize | 搜索图标的大小 | Number | 22 | - |
| color | 输入框字体颜色 | String | #606266 | - |
| placeholderColor | placeholder的颜色 | String | #909399 | - |
| searchIcon | 输入框左边的图标，可以为uview-plus图标名称或图片路径 | String | search | - |
| margin | 组件与其他上下左右元素之间的距离，带单位的字符串形式，如"30rpx"、"30rpx 20rpx"等写法 | String | 0 | - |
| animation | 是否开启动画 | Boolean | false | true |
| value | 输入框初始值 | String | - | - |
| maxlength | 输入框最大能输入的长度，-1为不限制长度 | String \| Number | -1 | - |
| height | 输入框高度，单位rpx | String \| Number | 64 | - |
| label | 搜索左侧文本信息 | String \| Number | - | - |

### Events

您可以通过监听`change`事件，在回调中将返回的结果绑定一个变量去获得用户的输入内容。但如"基本使用"中的说明一样，您双向绑定了一个变量后，无需监听`change`事件也是可以的。

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| change | 输入框内容发生变化时触发 | value：输入框的值 | - |
| search | 用户确定搜索时触发，用户按回车键，或者手机键盘右下角的"搜索"键时触发 | value：输入框的值 | - |
| custom | 用户点击右侧控件时触发 | value：输入框的值 | - |
| blur | 输入框失去焦点时触发 | value：输入框的值 | - |
| focus | 输入框获得焦点时触发 | value：输入框的值 | - |
| clear | 配置了`clearabled`后，清空内容时会发出此事件 | - | - |
| click | `disabled`为`true`时，点击输入框，发出此事件，用于跳转搜索页 | - | - |
| clickIcon | 左侧icon点击时候时触发 | - | - |