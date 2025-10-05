# Notify 消息提示

该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。

## API

### Methods

| 事件名 | 说明 | 类型 |
|--------|------|------|
| show | 显示并加载配置 | Handler |
| primary / success / warning /error | 显示当前主题消息提示 | Handler |
| close | 关闭消息提示 | Handler |

### Show Methods Arguments

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| top | 到顶部的距离 | String \| Number | 0 | - |
| type | 主题，primary，success，warning，error | String | primary | - |
| color | 字体颜色 | String | #ffffff | - |
| bgColor | 背景颜色 | String | - | - |
| message | 展示的文字内容 | String | - | - |
| duration | 展示时长，为0时不消失，单位ms | String \| Number | 3000 | - |
| fontSize | 字体大小，单位rpx | String \| Number | 15 | - |
| safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | Boolean | false | true |

### Slot

| 参数 | 说明 |
|------|------|
| icon | 通知内容 |