# Input 输入框
去除`fixed`、`showWordLimit`、`showConfirmBar`、`disableDefaultPadding`、`autosize`字段

此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件[up-form](form.html)而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。

应该在`up-form`中嵌套`up-form-item`，再嵌套`up-input`去实现。

> 注意：由于在`nvue`下，`u-input`名称被uni-app官方占用，在uview2中官方使用`u--input`的方式解决，uview-plus则统一将前缀改为形如`up-input`既兼容nvue也兼容vue，同时仍然保持`u--`和`u-`前缀的兼容。

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| modelValue | 输入的值 | Number \| String | - | - |
| type | 输入框类型 | String | text | number \| idcard \| digit \| password |
| disabled | 是否禁用输入框 | Boolean | false | true |
| disabledColor | 禁用状态时的背景色 | String | #f5f7fa | - |
| clearable | 是否显示清除控件 | Boolean | false | true |
| onlyClearableOnFocused <span class="badge tip" style="vertical-align:top;">3.5.7</span> | clearabled开启时是否仅聚焦时才显示清除控件 | Boolean | true | false |
| password | 是否密码类型 | Boolean | false | true |
| maxlength | 最大输入长度，设置为 -1的时候不限制最大长度（在支付宝小程序存在问题不推推荐用-1） | String \| Number | 140 | - |
| placeholder | 输入框为空时的占位符 | String | - | - |
| placeholderClass | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/ | String | input-placeholder | - |
| placeholderStyle | 指定placeholder的样式，字符串/对象形式，如"color: red;" | String \| Object | color: #c0c4cc | - |
| showWordLimit | 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效 | Boolean | false | true |
| confirmType | 设置右下角按钮的文字，兼容性详见uni-app文档 | String | done | send \| search \| next \| go \| done |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起，H5无效 | Boolean | false | true |
| holdKeyboard | focus时，点击页面的时候不收起键盘，微信小程序有效 | Boolean | false | true |
| focus | 自动获取焦点，在 H5平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用doFocus()、doBlur() 方法控制焦点 | Boolean | false | true |
| autoBlur | 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效 | Boolean | false | true |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效 | Boolean | false | true |
| cursor | 指定focus时光标的位置 | String \| Number | -1 | - |
| cursorColor <span class="badge tip" style="vertical-align:top;">3.4.74</span> | 输入框光标颜色【微信小程序 3.1.0+、H5(4.0+)、App-Vue(4.0+) 】 | String | '' | - |
| cursorSpacing | 输入框聚焦时底部与键盘的距离 | String \| Number | 30 | - |
| selectionStart | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 | String \| Number | -1 | - |
| selectionEnd | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 | String \| Number | -1 | - |
| adjustPosition | 键盘弹起时，是否自动上推页面 | Boolean | true | false |
| inputAlign | 输入框内容对齐方式 | String | left | left \| center \| right |
| fontSize | 输入框字体的大小 | String \| Number | 15px | - |
| color | 输入框字体颜色 | String | #303133 | - |
| prefixIcon | 输入框前置图标 | String | - | - |
| prefixIconStyle | 前置图标样式，对象或字符串 | String \| Object | - | - |
| suffixIcon | 输入框后置图标 | String | - | - |
| suffixIconStyle | 后置图标样式，对象或字符串 | String \| Object | - | - |
| border | 边框类型，surround-四周边框，bottom-底部边框，none-无边框 | String | surround | bottom \| none |
| readonly | 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会 | Boolean | false | true |
| shape | 输入框形状，circle-圆形，square-方形 | String | square | circle |
| formatter | 输入过滤或格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法) | Function | null | - |
| customStyle | 定义需要用到的外部样式 | Object | - | - |
| passwordVisibilityToggle <span class="badge tip" style="vertical-align:top;">3.4.107</span> | 是否显示右侧密码显示切换图标 | Boolean | true | false |

### Events
| 事件名 | 说明 | 回调参数 | 版本 |
| :--- | :--- | :--- | :--- |
| blur | 输入框失去焦点时触发 | value：内容值 | - |
| focus | 输入框聚焦时触发 | - | - |
| confirm | 点击完成按钮时触发 | value：内容值 | - |
| keyboardheightchange | 键盘高度发生变化的时候触发此事件 | - | 微信小程序2.7.0+、App 3.1.0+ |
| update:modelValue | 内容发生变化触发此事件 | value：内容值 | - |
| change | 内容发生变化触发此事件 | value：内容值 | - |
| clear | 点击清空内容 | - | - |

### Methods
| 方法名 | 说明 |
| :--- | :--- |
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |
| doFocus | 手动聚焦 |
| doBlur | 手动Blur |

### Slots
| 名称 | 说明 |
| :--- | :--- |
| prefix | 输入框前置内容，`nuve`环境需`up-input`有效，非`nvue`都可 |
| suffix | 输入框后置内容，`nuve`环境需`up-input`有效，非`nvue`都可 |