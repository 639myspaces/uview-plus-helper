# Tooltip 长按提示

Tooltip组件主要用于长按操作，类似微信的长按气泡

## API

### Tooltip Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 需要显示的提示文字 | String \| Number | - | - |
| copyText | 点击复制按钮时，复制的文本，为空则使用text值 | String \| Number | - | - |
| size | 文本大小 | String \| Number | 14 | - |
| color | 字体颜色 | String | #606266 | - |
| bgColor | 弹出提示框时，文本的背景色 | String | transparent | - |
| direction <sup class="version-badge">3.4.104</sup> | 弹出提示的方向，top-上方，bottom-下方, left-左方, right-右方 | String | top | bottom |
| zIndex | 弹出提示的z-index，nvue无效 | String \| Number | 10071 | - |
| showCopy | 是否显示复制按钮 | Boolean | true | false |
| buttons | 扩展的按钮组 | Array | - | - |
| overlay | 是否显示透明遮罩以防止触摸穿透 | Boolean | true | false |
| showToast | 是否显示复制成功或者失败的`toast` | Boolean | true | false |
| triggerMode <sup class="version-badge">3.4.104</sup> | 触发模式 | String | longpress | click |
| popupBgColor <sup class="version-badge">3.4.104</sup> | 弹窗背景色 | String |  |  |
| forcePosition <sup class="version-badge">3.5.8</sup> | 手动强制定位更精确控制,支持指定left/right/top/bottom | Object | {} |  |

### Slot

| 名称 | 说明 |
| --- | --- |
| trigger <sup class="version-badge">3.4.104</sup> | 触发器插槽 |
| content <sup class="version-badge">3.4.104</sup> | 弹窗内容插槽 |

### Tooltip Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击触发事件 | index，被点击按钮的索引 |