# ScrollList 横向滚动列表

该组件一般用于同时展示多个商品、分类的场景，也可以完成左右滑动的列表。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| indicatorWidth | 指示器的整体宽度 | String \| Number | 50 | - |
| indicatorBarWidth | 滑块的宽度 | String \| Number | 20 | - |
| indicator | 是否显示面板指示器 | Boolean | true | false |
| indicatorColor | 指示器非激活颜色 | String | #f2f2f2 | - |
| indicatorActiveColor | 指示器滑块颜色 | String | #3c9cff | - |
| indicatorStyle | 指示器样式，可通过bottom，left，right进行定位 | String \| Object | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| left | 滑动到左边时触发 | - |
| right | 滑动到右边时触发 | - |