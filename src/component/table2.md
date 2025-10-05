# Table 表格2

表格2组件主要为了实现一个兼容element-plus表格API风格的多用途表格，方便开发者使用【部分功能暂未完全实现】。

注意传递Function类型的参数在小程序环境下由于不支持，必须通过setXXX方法手动设置，比如cellStyle对应setCellStyle。

## API

### 📄 Props 参数说明

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| data | 表格的数据源，为一个数组 | `Array` | `[]` | - |
| columns | 列定义配置，详见下文列属性说明 | `Array` | `[]` | - |
| stripe | 是否显示斑马纹 | `Boolean` | `false` | `true / false` |
| border | 是否显示边框 | `Boolean` | `false` | `true / false` |
| height | 表格的高度，单位 px 或 auto | `String / Number` | `null` | - |
| maxHeight | 表格的最大高度，单位 px 或 auto | `String / Number` | `null` | - |
| showHeader | 是否显示表头 | `Boolean` | `true` | `true / false` |
| highlightCurrentRow | 是否高亮当前行 | `Boolean` | `false` | `true / false` |
| rowKey | 行数据唯一标识字段名（用于树形结构和复选框） | `String` | `'id'` | - |
| currentRowKey | 控制当前高亮行的 key 值 | `String / Number` | `null` | - |
| rowStyle | 行内联样式，可以是对象或函数 | `Object / Function` | `{}` | - |
| cellClassName | 单元格 class 名称，可以是字符串 | `String` | `null` | - |
| cellStyle | 单元格 style 样式，函数 | `Function` | `null` | - |
| headerCellClassName | 表头单元格 class 名称，可以是字符串或函数 | `Function` | `null` | - |
| rowClassName | 行的 class 名称，可以是字符串或函数 | `Function` | `null` | - |
| context | 插槽上下文对象 | `Object` | `null` | - |
| showOverflowTooltip | 是否在内容过长时显示省略号并展示 tooltip | `Boolean` | `false` | `true / false` |
| lazy | 是否懒加载子节点 | `Boolean` | `false` | `true / false` |
| load | 懒加载子节点的方法 | `Function` | `null` | - |
| treeProps | 树形结构配置项 | `Object` | `{ children: 'children', hasChildren: 'hasChildren' }` | - |
| defaultExpandAll | 是否默认展开所有树节点 | `Boolean` | `false` | `true / false` |
| expandRowKeys | 控制展开的行 keys 数组 | `Array` | `[]` | - |
| sortOrders | 排序顺序，默认支持 ascending 和 descending | `Array` | `['ascending', 'descending']` | - |
| sortable | 是否可排序，也可以设置为 custom 表示自定义排序 | `Boolean / String` | `false` | `true / false / 'custom'` |
| multiSort | 是否允许多列排序 | `Boolean` | `false` | `true / false` |
| sortBy | 默认排序字段 | `String` | `null` | - |
| sortMethod | 自定义排序方法 | `Function` | `null` | - |
| filters | 筛选条件对象 | `Object` | `{}` | - |
| fixedHeader | 是否固定表头(注意需要指定height参数) | `Boolean` | `true` | `true / false` |

### 🧩 `columns` 列定义参数说明

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| type | 列类型 | `String` | `'default'` | `'default' / 'selection' / 'expand'` |
| title | 列标题 | `String` | - | - |
| key | 对应数据源中的字段名 | `String` | - | - |
| align | 对齐方式 | `String` | `'center'` | `'left' / 'center' / 'right'` |
| headerAlign | 表头对齐方式，不设置默认使用align | `String` | `'center'` | `'left' / 'center' / 'right'` |
| width | 列宽度（px） | `Number / String` | `auto` | - |
| fixed | 固定位置 | `String` | - | `'left' / 'right'` |
| sortable | 是否可排序 | `Boolean / String` | `false` | `true / false / 'custom'` |

### 🎨 样式相关 props（新增）

你可以通过以下 props 设置表格样式风格：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| borderColor | 表格边框的颜色 | `String` | `#e4e7ed` |
| bgColor | 表格的背景颜色 | `String` | `#ffffff` |
| align | 单元格的内容对齐方式，作用类似 CSS 的 `text-align` | `String` | `center` |
| padding | 单元格的内边距，同 CSS 的 `padding` 写法 | `String` | `10rpx 0` |
| fontSize | 单元格字体大小，单位 rpx | `String` | `14px` |
| color | 单元格字体颜色 | `String` | `#606266` |
| thStyle | `th` 单元格的样式，对象形式（统一设置在 table 上） | `Object` | `{}` |

### 📢 Events 事件说明

| 事件名 | 说明 | 参数 |
|--------|------|------|
| @select | 当用户勾选某一行时触发 | `selection` |
| @select-all | 用户勾选全选时触发 | `selection` |
| @selection-change | 选中项发生变化时触发 | `selection` |
| @cell-click | 单元格点击事件 | `row, column, cell, event` |
| @row-click | 行点击事件 | `row, event` |
| @row-dblclick | 行双击事件 | `row, event` |
| @header-click | 表头点击事件 | `column, event` |
| @sort-change | 排序改变时触发 | `conditions` |
| @filter-change | 筛选条件变化时触发 | `filters` |
| @current-change | 当前行改变时触发 | `currentRow, oldRow` |
| @expand-change | 展开/收起行时触发 | `keys` |

### 🧱 插槽说明

| 插槽名 | 说明 |
|--------|------|
| cell | 单元格插槽，用于定义表格列与单元格内容 |
| header | 自定义表头内容 |
| append | 在表格最后插入额外内容（如分页） |
| empty | 数据为空时显示的内容 |

### 🧩 单元格合并说明

使用 `span-method` 属性可以实现单元格的合并功能。该属性接受一个函数，函数返回一个数组，数组格式为 `[rowspan, colspan]`，分别表示行合并数和列合并数。

- 当 `rowspan` 或 `colspan` 为 0 时，表示该单元格被其他单元格合并，将不会显示
- 当 `rowspan` 或 `colspan` 大于 1 时，表示该单元格需要合并多个行或列