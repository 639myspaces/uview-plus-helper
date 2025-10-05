# BackTop 返回顶部

该组件一个用于长页面，滑动一定距离后，出现返回顶部按钮，方便快速返回顶部的场景。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| mode | 按钮形状 | String | circle | square |
| icon | uview-plus内置图标名称，或图片路径 | String | arrow-upward | - |
| text | 返回顶部按钮的提示文字 | String | - | - |
| duration | 返回顶部过程中的过渡时间，单位ms | String \| Number | 100 | - |
| scrollTop | 页面的滚动距离，通过`onPageScroll`生命周期获取 | String \| Number | 0 | - |
| top | 滚动条滑动多少距离时显示，单位rpx | String \| Number | 400 | - |
| bottom | 返回按钮位置到屏幕底部的距离，单位rpx | String \| Number | 100 | - |
| right | 返回按钮位置到屏幕右边的距离，单位rpx | String \| Number | 20 | - |
| z-index | 返回顶部按钮的层级 | String \| Number | 9 | - |
| iconStyle | 图标的样式，对象形式 | Object | - | - |
| customStyle | 按钮外层的自定义样式 | Object | - | - |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义返回按钮的所有内容 |