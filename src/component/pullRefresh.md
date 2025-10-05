# PullRefresh 下拉刷新 <span class="badge tip">3.4.68</span>

pull-refresh下拉刷新组件，支持自定义下拉刷新状态、结合虚拟列表和上拉加载等功能，适用于各种需要下拉刷新的场景。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| refreshing | 是否正在刷新 | Boolean | false | true/false |
| threshold | 下拉刷新阈值 | Number | 80 |  |
| damping | 阻尼系数 | Number | 0.4 |  |
| maxDistance | 最大下拉距离 | Number | 120 |  |
| showLoadmore | 是否显示加载更多 | Boolean | false | true/false |
| loadmoreProps | u-loadmore 组件的 props 配置 | Object | { status: 'loadmore', loadmoreText: '加载更多', loadingText: '正在加载...', nomoreText: '没有更多了' } |  |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|--------|
| refresh | 下拉刷新时触发 | - |
| loadmore | 上拉加载时触发 | - |
| scroll | 滚动时触发 | 滚动事件对象 |

### Slot

| 名称 | 说明 |
|------|------|
| pull | 下拉状态插槽，参数为 { distance, threshold } |
| release | 释放状态插槽，参数为 { distance, threshold } |
| refreshing | 刷新中状态插槽 |
| default | 内容区域插槽 |