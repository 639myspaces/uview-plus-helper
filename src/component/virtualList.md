# VirtualList 虚拟列表 📎 3.1.80

虚拟列表是一种高性能的列表渲染技术，适用于需要渲染大量数据的场景。它通过只渲染可视区域内的元素，大大减少了DOM节点数量，提升了页面性能。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----|-----|-----|-----|-----|
| listData | 列表数据 | Array | [] | - |
| itemHeight | 列表项高度 | Number | 50 | - |
| height | 列表容器高度 | String \| Number | 100% | - |
| buffer | 缓冲区大小(可视区域外的渲染数量) | Number | 4 | - |
| keyField | 唯一标识字段名 | String | id | - |
| scrollTop | 当前滚动位置 | Number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
|-----|-----|-----|
| update:scrollTop | 滚动时更新scrollTop值 | scrollTop |
| scroll | 滚动时触发 | scrollTop |

### Slots

| 名称 | 说明 | SlotProps |
|-----|-----|-----|
| default | 列表项内容 | { item, index } |

### 方法

通过 ref 可以获取到虚拟列表实例并调用方法：

| 方法名 | 说明 | 参数 |
|-----|-----|-----|
| getVisibleRange() | 获取可见项范围 | - |