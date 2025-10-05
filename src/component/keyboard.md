# Keyboard 键盘

此为uview-plus自定义的键盘面板，内含了数字键盘，车牌号键，身份证号键盘3种模式，都有可以打乱按键顺序的选项。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| mode | 键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘 | String | car | number / card |
| dotDisabled | 是否显示"."按键，只在mode=number时有效 | Boolean | false | true |
| tooltip | 是否显示键盘顶部工具条 | Boolean | true | false |
| showTips | 是否显示工具条中间的提示 | Boolean | true | false |
| tips | 工具条中间的提示文字，见上方`基本使用`的说明 | String | - | - |
| showCancel | 是否显示工具条左边的"取消"按钮 | Boolean | true | false |
| showConfirm | 是否显示工具条右边的"完成"按钮 | Boolean | true | false |
| random | 是否打乱键盘按键的顺序 | Boolean | false | true |
| safeAreaInsetBottom | 是否开启[底部安全区适配]() | Boolean | false | true |
| closeOnClickOverlay | 是否允许点击遮罩收起键盘（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | Boolean | true | false |
| show | 控制键盘的弹出与收起 | Boolean | true | false |
| overlay | 是否显示遮罩 | Boolean | true | false |
| zIndex | 弹出键盘的`z-index`值 | String \| Number | 1075 | - |
| confirmText | 确认按钮的文字 | String | 确认 | - |
| cancelText | 取消按钮的文字 | String | 取消 | - |
| customStyle | 自定义样式，对象形式 | Object | {} | - |
| autoChange | `mode`为`car`下，输入文字后，是否自动切换为字母模式 | Boolean | false | true |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| change | 按键被点击(不包含退格键被点击) | 按键的值，见上方说明和示例 | - |
| close | 键盘关闭 | - | - |
| confirm | 键盘顶部工具条右边的"完成"按钮被点击 | - | - |
| cancel | 键盘顶部工具条左边的"取消"按钮被点击 | - | - |
| backspace | 键盘退格键被点击 | - | - |

### Slot

| 名称 | 说明 | 版本 |
| --- | --- | --- |
| default | 内容将会显示键盘的工具条上面，可以结合[MessageInput 验证码输入]()组件实现类似支付宝输入密码时，上方显示输入内容的功能 | - |