# Textarea 文本域

文本域此组件满足了可能出现的表单信息补充，编辑等实际逻辑的功能，内置了字数校验等

## 注意事项

由于在`nvue`下，`u-textarea`名称被uni-app官方占用，在`nvue`页面中请使用`up-textarea`名称，在`vue`页面中使用`up-textarea`或者`u-textarea`均可。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| modelValue | 输入框的内容 | String \| String | - | - |
| placeholder | 输入框为空时占位符 | Number \| String | - | - |
| height | 输入框高度 | String \| Number | 70 | - |
| confirmType | 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效 | String | done | - |
| disabled | 是否禁用 | Boolean | false | true |
| count | 是否显示统计字数 | Boolean | false | true |
| focus | 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现 | Boolean | false | true |
| autoHeight | 是否自动增加高度 | Boolean | false | true |
| fixed | 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true | Boolean | false | true |
| cursorSpacing | 指定光标与键盘的距离 | Number | 0 | - |
| cursor | 指定focus时的光标位置 | Number \| String | - | - |
| showConfirmBar | 是否显示键盘上方带有"完成"按钮那一栏 | Boolean | true | false |
| selectionStart | 光标起始位置，自动聚焦时有效，需与selection-end搭配使用 | Number | -1 | - |
| selectionEnd | 光标结束位置，自动聚焦时有效，需与selection-start搭配使用 | Number | -1 | - |
| adjustPosition | 键盘弹起时，是否自动上推页面 | Boolean | true | false |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，只微信小程序有效 | Boolean | false | true |
| holdKeyboard | focus时，点击页面的时候不收起键盘，只微信小程序有效 | Boolean | false | true |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | String \| Number | 140 | - |
| border | 边框类型，surround-四周边框，none-无边框，bottom-底部边框 | String | surround | bottom |
| placeholderClass | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | String | textarea-placeholder | - |
| placeholderStyle | 指定placeholder的样式，字符串/对象形式，如"color: red;" | String \| Object | color: #c0c4cc | - |
| formatter | 输入过滤或格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法) | Function | null | - |

### Methods

| 方法名 | 说明 |
|--------|------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| focus | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度 | e |
| blur | 输入框失去焦点时触发，event.detail = {value, cursor} | e |
| linechange | 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0} | e |
| update:modelValue | 当键盘输入时，触发 input 事件 | e.detail.value |
| confirm | 点击完成时， 触发 confirm 事件 | e |
| keyboardheightchange | 键盘高度发生变化的时候触发此事件 | e |