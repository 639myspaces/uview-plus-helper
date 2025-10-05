# Modal 模态框

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

## API

### Props

注意：需要给`modal`组件通过`show`绑定一个布尔值，来初始化`modal`的状态，随后该值被双向绑定。

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示模态框，请赋值给`show` | Boolean | false | true |
| title | 标题内容 | String | - | - |
| content | 模态框内容，如传入`slot`内容，则此参数无效 | String | - | - |
| confirmText | 确认按钮的文字 | String | 确认 | - |
| cancelText | 取消按钮的文字 | String | 取消 | - |
| showConfirmButton | 是否显示确认按钮 | Boolean | true | false |
| showCancelButton | 是否显示取消按钮 | Boolean | false | true |
| confirmColor | 确认按钮的颜色 | String | #2979ff | - |
| cancelColor | 取消按钮的颜色 | String | #606266 | - |
| buttonReverse | 对调确认和取消的位置 | Boolean | false | true |
| zoom | 是否开启缩放模式 | Boolean | true | false |
| asyncClose | 是否异步关闭，只对确定按钮有效，见上方说明 | Boolean | false | |
| asyncCloseTip<span class="badge tip" style="vertical-align:top;">3.4.4</span> | 确定按钮异步关闭启用时，如果点击取消时的文案提示 | String | '' | 如：操作中 |
| asyncCancelClose<span class="badge tip" style="vertical-align:top;">3.4.4</span> | 是否异步关闭，只对取消按钮有效 | Boolean | false | true |
| closeOnClickOverlay | 是否允许点击遮罩关闭Modal（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | Boolean | false | true |
| negativeTop | 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位 | String \| Number | 0 | - |
| width | modal宽度，不支持百分比，可以数值，px，rpx单位 | String \| Number | 650rpx | px \| rpx |
| confirmButtonShape | 确认按钮的样式,如设置，将不会显示取消按钮 | String | - | circle(圆形) \| square(方形) |
| contentTextAlign | 文案对齐方式 | String | left | left \| center \| right |

### Event

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| close | 点击遮罩关闭出发，closeOnClickOverlay为true有效 | - |
| cancelOnAsync | 异步操作进行中点击取消按钮触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 传入自定义内容，一般为富文本，见上方说明 |
| confirmButton | 传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景 |
| bottom <span class="badge tip" style="vertical-align:top;">3.4.31</span> | 弹窗下方追加内容 |