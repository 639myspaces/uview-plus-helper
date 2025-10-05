# NumberBox 步进器

该组件一般用于商城购物选择物品数量的场景

注意：该输入框只能输入大于或等于0的整数

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 步进器标识符，在change回调返回 | String \| Number | - | - |
| modelValue | 用于双向绑定的值，初始化时设置设为默认min值(最小值) | String \| Number | 1 | - |
| min | 用户可输入的最小值 | String \| Number | 1 | - |
| max | 用户可输入的最大值 | String \| Number | Number.MAX_SAFE_INTEGER | - |
| step | 步长，每次加或减的值， 支持小数值，如需小数 | String \| Number | 1 | - |
| integer | 是否只能输入正整数 | Boolean | false | true |
| disabled | 是否禁用操作，包括输入框，加减按钮 | Boolean | false | true |
| disabledInput | 是否禁止输入框 | Boolean | false | true |
| asyncChange | 是否开启异步变更，开启后需要手动控制输入值 | Boolean | false | true |
| inputWidth | 输入框宽度，单位px | String \| Number | 35 | - |
| showMinus | 是否显示减少按钮 | Boolean | true | false |
| showPlus | 是否显示增加按钮 | Boolean | true | false |
| decimalLength | 显示的小数位数 | String \| Number | - | - |
| longPress | 是否允许长按进行加减 | Boolean | true | false |
| color | 输入框文字和加减按钮图标的颜色 | String | #323233 | - |
| buttonWidth | 按钮宽度，单位px | String \| Number | 30 | - |
| buttonSize | 按钮高度，单位px，输入框高度和此值保持一致 | String \| Number | 30 | - |
| buttonRadius | 按钮圆角 | String | 2px | - |
| bgColor | 输入框和按钮的背景颜色 | String | #EBECEE | - |
| disabledBgColor<sup style="color: #1989fa;">3.4.57</sup> | 禁用时按钮背景颜色 | String | #f7f8fa | - |
| inputBgColor | 输入框独立背景颜色 | String | #EBECEE | - |
| cursorSpacing | 指定光标于键盘的距离，避免键盘遮挡输入框，单位px | String \| Number | 100 | - |
| disablePlus | 是否禁用增加按钮 | Boolean | false | true |
| disableMinus | 是否禁用减少按钮 | Boolean | false | true |
| iconStyle | 加减按钮图标的样式 | String | - | - |
| miniMode | 迷你模式常用于外卖，值为0时只显示+号按钮 | Boolean | false | true |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| focus | 输入框得到焦点触发(按钮可点击情况下)，对象形式 | value：输入框当前值，name：步进器标识符 |
| blur | 输入框失去焦点时触发，对象形式 | value：输入框当前值，name：步进器标识符 |
| change | 输入框内容发生变化时触发，对象形式 | value：输入框当前值，name：步进器标识符 |
| overlimit | 超过范围阈值时触发 | type：（`minus`已达最小值，`plus`已达最大值） |

### Slots

| 名称 | 说明 |
| --- | --- |
| minus | 减少按钮 |
| input | 输入框 |
| plus | 增加按钮 |