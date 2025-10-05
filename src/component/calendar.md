# Calendar 日历

## 组件介绍

此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中。

## 注意事项

此组件与Picker选择器的日期选择模式有一定的重合之处，区别在于本组件为更专业的日期选择场景，能选择日期范围等。另外`Picker`组件的日期模式可以配置更多的参数，如时、分、秒等，可以根据不同的使用场景进行选择。


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----|-----|-----|-----|-----|
| title | 标题内容 | String | 日期选择 | - |
| showTitle | 是否显示标题 | Boolean | true | false |
| showSubtitle | 是否显示副标题 | Boolean | true | false |
| mode | 日期类型选择 | String | single | multiple-可以选择多个日期，range-选择日期范围（多个月需配合`monthNum`属性使用） |
| startText | mode=range时，第一个日期底部的提示文字 | String | 开始 | - |
| endText | mode=range时，最后一个日期底部的提示文字 | String | 结束 | - |
| customList | 自定义列表 | Array | [] | [] |
| color | 主题色，对底部按钮和选中日期有效 | String | #3c9cff | - |
| minDate | 最小的可选日期 | Number \| String | 0 | - |
| maxDate | 最大可选日期 | Number \| String | 0 | - |
| defaultDate | 默认选中的日期，mode为multiple或range是必须为数组格式 | Array \| String \| Date | null | - |
| maxCount | mode=multiple时，最多可选多少个日期 | Number \| String | Number.MAX_SAFE_INTEGER | - |
| rowHeight | 日期行高 | Number \|String | 56 | - |
| formatter | 日期格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法) | Function | null | - |
| showLunar | 是否显示农历 | Boolean | false | true |
| showMark | 是否显示月份背景色 | Boolean | true | false |
| confirmText | 确定按钮的文字 | String | 确定 | - |
| confirmDisabledText | 确认按钮处于禁用状态时的文字 | String | 确定 | - |
| show | 是否显示日历弹窗 | Boolean | false | true |
| closeOnClickOverlay | 是否允许点击遮罩关闭日历（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | Boolean | false | true |
| readonly | 是否为只读状态，只读状态下禁止选择日期 | Boolean | false | true |
| maxRange | 日期区间最多可选天数，默认无限制，mode = range时有效 | Number \| String | 无限制 | - |
| rangePrompt | 范围选择超过最多可选天数时的提示文案，mode = range时有效 | String \| null | 选择天数不能超过 xx 天 | - |
| showRangePrompt | 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效 | Boolean | true | false |
| allowSameDay | 是否允许日期范围的起止时间为同一天，mode = range时有效 | Boolean | false | true |
| round | 圆角值，默认无圆角 | String \| Number | 0 | - |
| monthNum | 最大展示的月份数量 | String \| Number | 3 | - |
| weekText | 星期文案，可用于多语言。 | Array | ['一', '二', '三', '四', '五', '六', '日'] | - |
| forbidDays | 单选与多选禁止选中的日期列表，mode!=range时有效。 | Array | [] | - |
| forbidDaysToast | 单选与多选禁止选中的日期选择时提示 | String | 该日期已禁用 | - |
| pageInline <span class="badge tip" style="vertical-align:top;">3.5.3</span> | 页面内插入模式 | Boolean | false | true |

### Methods

| 方法名 | 说明 |
|-----|-----|
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |

### Event

| 事件名 | 说明 | 回调参数 |
|-----|-----|-----|
| confirm | 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发 | 选择日期相关的返回参数 |
| close | 日历关闭时触发 | 可定义页面关闭时的回调事件 |