# NoticeBar 滚动通知

该组件用于滚动通告场景，有多种模式可供选择

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| text | 显示的内容，`direction`为`column`时要求为数组，为`row`时要求为字符串 | Array \| String | - | - |
| direction | 通告滚动模式，row-横向滚动，column-竖向滚动 | String | row | column |
| step | direction = row时，是否使用步进形式滚动 | Boolean | false | true |
| icon | 是否显示左侧的音量图标 | String | volume | - |
| mode | 通告模式，link-显示右箭头，closable-显示右侧关闭图标 | String | - | link / closable |
| color | 文字颜色 | String | #f9ae3d | - |
| bgColor | 背景颜色 | String | #fdf6ec | - |
| speed | 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度 | String \| Number | 80 | - |
| fontSize | 字体大小 | String \| Number | 14 | - |
| duration | 滚动一个周期的时间长，单位ms | String \| Number | 2000 | - |
| disableTouch | 是否禁止用手滑动切换（目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序） | Boolean | true | false |
| url | 跳转的页面路径 | String | - | - |
| linkType | 页面跳转的类型 | String | navigateTo | - |
| justifyContent | 文字水平布局类型 | String | flex-start | flex-end/center |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
|--------|------|----------|------|
| click | 点击通告文字触发 | index: 点击的text的索引 | - |
| close | 点击右侧关闭图标触发 | - | - |