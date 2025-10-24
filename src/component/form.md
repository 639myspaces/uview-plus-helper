此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。

注意：

由于在`nvue`下，`u-form`名称被uni-app官方占用，在`nvue`页面中请使用`u-form`名称，在`vue`页面中使用`u-form`或者`u-form`均可。

注意：

Vue2模式下，需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。 Vue3 无需使用setRules方法设置规则。 如。



### API

###  Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|model|表单数据对象|Object|\-|\-|
|rules|表单校验规则，Vue2模式下，通过`ref`设置，如果`rules`中有自定义方法等，需要使用`setRules`方法设置规则，见上方说明|Object|Function|Array|
|errorType|错误的提示方式，见上方说明|String|message|none|
|borderBottom|是否显示表单域的下划线边框|Boolean|true|\-|
|labelPosition|表单域提示文字的位置，`left`\-左侧，`top`\-上方|String|left|top|
|labelWidth|提示文字的宽度，单位px|String|Number|45|
|labelAlign|lable字体的对齐方式|String|left|center / right|
|labelStyle|lable的样式，对象形式|Object|\-|\-|

###  Methods

此方法如要通过ref手动调用

|名称|说明|参数|
|---|---|---|
|validate|对整个表单进行校验的方法|\-|
|setRules|Vue2模式下，如果`rules`中有自定义方法等，需要用此方法设置`rules`规则，否则微信小程序无效，VUE3无此问题|Function(rules)|
|validateField|对部分表单字段进行校验|Function(value, Function(errorsRes))|
|resetFields|对整个表单进行重置，将所有字段值重置为初始值并移除校验结果。注意：vue2模式下，需要使用 `:model.sync`|\-|
|clearValidate|清空校验结果|Function(props)|

### Form-item Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|label|左侧提示文字|String|\-|\-|
|prop|表单域`model`对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的|String|\-|\-|
|rules|表单校验规则|Object|Function|Array|
|borderBottom|是否显示下边框，如不需要下边框，需同时将`u-form`的同名参数设置为`false`|String|Boolean|true|
|labelWidth|提示文字的宽度，单位rpx，如设置，将覆盖`u-form`的同名参数|String|Number|\-|
|labelPosition|label的位置|String|\-|left / top|
|rightIcon|右侧自定义字体图标(限uView内置图标)或图片地址|String|\-|\-|
|leftIcon|左侧自定义字体图标(限uView内置图标)或图片地址|String|\-|\-|
|leftIconStyle|左侧自定义字体图标的样式|String|Object|\-|
|required|是否显示左边的"\*"号，这里仅起展示作用，如需校验必填，请通过`rules`配置必填规则，如需在`swiper`标签内显示星号，需要给予`swiper-item`内第一个根节点一定的`margin`样式|Boolean|false|true|

### Form-item Slot

|名称|说明|
|---|---|
|\-|Form Item 的内容|
|right|右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景|
|error|自定义传入校验错误时显示的信息，通过作用域插槽暴露了内部当前message错误信息|

### Form-item Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|click|点击时触发|\-|\-|

上次更新时间: 2025/9/11 13:27:54