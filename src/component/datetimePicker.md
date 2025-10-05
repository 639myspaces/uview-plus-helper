# DatetimePicker 选择器

## 组件介绍
此选择器用于时间日期选择。

## 注意事项
请先执行npm i dayjs安装依赖。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| hasInput <span class="badge tip" style="vertical-align:top;">3.1.49</span> | 是否自带input输入框 | Boolean | false | true |
| format <span class="badge tip" style="vertical-align:top;">3.1.49</span> | 输入框显示日期格式 | String | 'YYYY-MM-DD HH:mm' |  |
| placeholder <span class="badge tip" style="vertical-align:top;">3.1.49</span> | 输入框placeholder | String | 请选择 |  |
| inputProps <span class="badge tip" style="vertical-align:top;">3.4.25</span> | 输入框props，便于传递更多up-input的props | Object | {} |  |
| v-model:show | 用于控制选择器的弹出与收起 | Boolean | false | true |
| popupMode | 用于控制选择器的弹出方向 | String | bottom | top、bottom、left、right |
| showToolbar | 是否显示顶部的操作栏 | Boolean | true | false |
| v-model | 绑定值 | String \| Number | - | - |
| title | 顶部标题 | String | - | - |
| mode | 展示格式 | String | datetime | date为日期选择，time为时间选择，year-month为年月选择 |
| maxDate | 可选的最大时间（时间戳毫秒） | Number | 最大默认值为后10年 | - |
| minDate | 可选的最小时间（时间戳毫秒） | Number | 最小默认值为前10年 | - |
| minHour | 可选的最小小时，仅mode=time有效 | Number | 0 | - |
| maxHour | 可选的最大小时，仅mode=time有效 | Number | 23 | - |
| minMinute | 可选的最小分钟，仅mode=time有效 | Number | 0 | - |
| maxMinute | 可选的最大分钟，仅mode=time有效 | Number | 59 | - |
| filter | 选项过滤函数 | Function | null | - |
| formatter | 输入过滤或格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法) | Function | null | - |
| loading | 是否显示加载中状态 | Boolean | false | true |
| itemHeight | 各列中，单个选项的高度 | String \| Number | 44 | - |
| cancelText | 取消按钮的文字 | String | 取消 | - |
| confirmText | 确认按钮的文字 | String | 确认 | - |
| cancelColor | 取消按钮的颜色 | String | #909193 | - |
| confirmColor | 确认按钮的颜色 | String | #3c9cff | - |
| visibleItemCount | 每列中可见选项的数量 | String \| Number | 5 | - |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | Boolean | false | true |
| defaultIndex | 各列的默认索引 | Array | [] | - |
| pageInline <span class="badge tip" style="vertical-align:top;">3.5.5</span> | 页面内插入模式 | Boolean | false | true |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
|--------|------|----------|------|
| close | 关闭选择器时触发 | - | - |
| confirm | 点击确定按钮，返回当前选择的值 | - | - |
| change | 当选择值变化时触发 | - | - |
| cancel | 点击取消按钮 | - | - |

### Slots

| 名称 | 说明 |
|------|------|
| toolbar-right | 工具栏右侧内容，自定义右侧内容，因为微信小程序限制，需要同时设置:toolbarRightSlot="true"生效。 |
| toolbar-bottom | 输入框下方自定义区域 |
| trigger | hasInput模式时自定义触发和显示区域scope={value: ''} |

### Methods

| 方法名 | 说明 |
|--------|------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |