# Form 表单

此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。

## 注意事项

- 由于在`nvue`下，`u-form`名称被uni-app官方占用，在`nvue`页面中请使用`up-form`名称，在`vue`页面中使用`up-form`或者`u-form`均可。注意:borderBottom="true"需要完整写法才生效，不能简写为borderBottom。
- 如绑定ref建议不要使用form等容易与uni-app内置组件冲突的关键字，建议使用如formRef等明显不会有冲突风险的名称，比如ref="formRef"，不要使用ref="form"已经发现会导致双向绑定失效。

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| model | 表单数据对象 | Object | - | - |
| rules | 通过`ref`设置，如果`rules`中有自定义方法等，需要使用`setRules`方法设置规则，见上方说明 | Object\|Function\|Array | - | - |
| errorType | 错误的提示方式，见上方说明 | String | message | none\|toast\|border-bottom\|none |
| borderBottom | 是否显示表单域的下划线边框 | Boolean | true | - |
| labelPosition | 表单域提示文字的位置，`left`-左侧，`top`-上方 | String | left | top |
| labelWidth | 提示文字的宽度，单位px | String \| Number | 45 | 数值 / auto |
| labelAlign | lable字体的对齐方式 | String | left | center / right |
| labelStyle | lable的样式，对象形式 | Object | - | - |

### Form Methods

此方法如要通过ref手动调用

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| validate | 对整个表单进行校验的方法 | - |
| setRules | 如果`rules`中有自定义方法等，需要用此方法设置`rules`规则，否则微信小程序无效 | Function(rules) |
| validateField | 对部分表单字段进行校验 | Function(value, Function(errorsRes)) |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | - |
| clearValidate | 清空校验结果 | Function(props) |

### Form-item Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| label | 左侧提示文字 | String | - | - |
| prop | 表单域`model`对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的 | String | - | - |
| rules | 标单项验证规则，如果`rules`中有自定义方法等，需要使用`setRules`方法设置规则，见上方说明 | Array | [] | - |
| borderBottom | 是否显示下边框，如不需要下边框，需同时将`u-form`的同名参数设置为`false` | String \| Boolean | true | true / false |
| labelPosition | 表单域提示文字的位置，`left`-左侧，`top`-上方 | String | - | - |
| labelWidth | 提示文字的宽度，单位rpx，如设置，将覆盖`u-form`的同名参数 | String \| Number | - | - |
| rightIcon | 右侧自定义字体图标(限uview-plus内置图标)或图片地址 | String | - | - |
| leftIcon | 左侧自定义字体图标(限uview-plus内置图标)或图片地址 | String | - | - |
| leftIconStyle | 左侧自定义字体图标的样式 | String \| Object | - | - |
| required | 是否显示左边的"*"号，这里仅起展示作用，如需校验必填，请通过`rules`配置必填规则，如需在`swiper`标签内显示星号，需要给予`swiper-item`内第一个根节点一定的`margin`样式 | Boolean | false | true |

### Form-item Methods

此方法如要通过ref手动调用

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| setRules | 如果`rules`中有自定义方法等，需要用此方法设置`rules`规则，否则微信小程序无效 | Function(rules) |

### Form-item Slot

| 名称 | 说明 |
| --- | --- |
| - | Form Item 的内容 |
| right | 右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景 |

### Form-item Events

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| click | 点击时触发 | - | - |