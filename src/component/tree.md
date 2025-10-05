# Tree 树形组件 <sup class="version-badge">3.4.47</sup>

树形组件用于展示具有层级结构的数据，支持复选框、展开/折叠、节点点击等交互行为。

## API

### Props 参数说明

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| data | 树的数据源 | Array | [] | - |
| props | 配置节点字段映射（如 label、children） | Object | { label: 'label', children: 'children', nodeKey: 'id' } | - |
| show-checkbox | 是否显示复选框 | Boolean | false | true / false |
| default-expand-all | 是否默认展开所有节点 | Boolean | false | true / false |
| expand-on-click-node | 是否在点击节点时展开或折叠 | Boolean | true | true / false |
| check-strictly | 是否启用父子节点不关联选择 | Boolean | false | true / false |
| node-key | 每个节点的唯一标识字段名 | String | 'id' | - |

### Events 事件说明

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| @node-click | 点击节点时触发 | node |
| @check-change | 节点勾选状态变化时触发 | node |

### Ref 事件说明

| 方法名 | 说明 | 返回值 |
| --- | --- | --- |
| getCheckedNodes() | 获取当前所有选中的节点列表 | nodes[] |

### 插槽说明（Slot）

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 自定义节点内容插槽 | { node, level } |

### 支持的功能特性

| 功能 | 说明 |
| --- | --- |
| 展开/折叠 | 支持点击箭头或配置 `expand-on-click-node` 控制展开逻辑 |
| 复选框联动 | 父子节点自动同步勾选状态（除非开启 `check-strictly`） |
| 数据初始化 | 自动注入 `expanded` 和 `checked` 字段 |
| 自定义渲染 | 通过插槽实现节点内容高度定制 |
| 获取选中节点 | 提供 `getCheckedNodes()` 方法获取当前选中数据 |