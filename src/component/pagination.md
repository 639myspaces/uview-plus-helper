# Pagination 分页器 <sup style="color: #1989fa;">3.4.30</sup>

分页器组件主要用于数据分页场景

## API

### Props 参数说明

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| currentPage | 当前页码 | `Number` | `1` | - |
| pageSize | 每页条目数 | `Number` | `10` | - |
| total | 总数据条目数 | `Number` | `0` | - |
| prevText | 上一页按钮自定义文本 | `String` | `''` | - |
| nextText | 下一页按钮自定义文本 | `String` | `''` | - |
| buttonBgColor | 分页按钮的背景颜色 | `String` | `#f5f7fa` | - |
| buttonBorderColor | 分页按钮的边框颜色 | `String` | `#dcdfe6` | - |
| pageSizes | 每页显示条目个数选择器的选项 | `Array` | `[10, 20, 30, 40, 50]` | - |
| layout | 组件布局，子组件名用逗号分隔。支持：`prev`, `pager`, `next`, `total` | `String` | `'prev, pager, next'` | - |
| hideOnSinglePage | 是否在只有一页时隐藏分页器 | `Boolean` | `false` | `true / false` |

### Events 事件说明

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| @update:currentPage | 页码改变时触发（v-model） | `page` |
| @update:pageSize | 每页数量改变时触发（v-model） | `size` |
| @current-change | 页码改变时触发 | `page` |
| @size-change | 每页条目数改变时触发 | `size` |

### 插槽说明（Slot）

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 默认插槽（暂未使用） | - |

### 支持的 layout 项

| layout 项 | 说明 |
| --- | --- |
| `prev` | 上一页按钮 |
| `pager` | 页码列表 |
| `next` | 下一页按钮 |
| `total` | 显示总页数信息 |