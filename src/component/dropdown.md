# Dropdown 下拉菜单

下拉菜单组件，点击组件展开一个下拉菜单或面板，用于向下展开菜单及切换多个选项卡的场景。

## API

### Dropdown Props

| 参数               | 说明                                                       | 类型      | 默认值     | 可选值 |
| ------------------ | ---------------------------------------------------------- | --------- | ---------- | ------ |
| active-color       | 选中时的颜色                                               | String    | #1989fa    | -      |
| inactive-color     | 未选中时的颜色                                             | String    | #606266    | -      |
| close-on-click-mask | 点击遮罩层是否关闭下拉菜单                                 | Boolean   | true       | false  |
| close-on-click-outside | 点击外部是否关闭下拉菜单                                   | Boolean   | true       | false  |
| duration           | 动画时长，单位毫秒                                         | String \| Number | 300        | -      |
| direction          | 弹出方向，仅在非菜单模式下有效                             | String    | bottom     | top    |
| disabled           | 是否禁用下拉菜单                                           | Boolean   | false      | true   |
| z-index            | 弹出层的 z-index 值                                        | String \| Number | 1000       | -      |
| show-arrow         | 是否显示下拉箭头                                           | Boolean   | true       | false  |
| menu-mode          | 是否为菜单模式，为`true`时，点击组件展开一个菜单，为`false`时，点击组件展开一个面板 | Boolean   | true       | false  |
| overlay            | 是否显示遮罩层，仅在非菜单模式下有效                       | Boolean   | true       | false  |

### Dropdown Events

| 事件名     | 说明           | 回调参数 |
| ---------- | -------------- | -------- |
| open       | 打开下拉菜单时触发 | -        |
| close      | 关闭下拉菜单时触发 | -        |

### Dropdown-item Props

| 参数     | 说明                   | 类型      | 默认值  | 可选值 |
| -------- | ---------------------- | --------- | ------- | ------ |
| value    | 唯一标识符             | *         | -       | -      |
| label    | 选项的文字内容         | String    | -       | -      |
| disabled | 是否禁用该选项         | Boolean   | false   | true   |
| icon     | 左侧图标名称或图片链接 | String    | -       | -      |
| color    | 选项的颜色             | String    | #606266 | -      |

### Dropdown-item Slot

| 名称    | 说明         |
| ------- | ------------ |
| -       | 自定义内容   |
| icon    | 自定义左侧图标 |

### Dropdown-item Events

| 事件名  | 说明           | 回调参数           |
| ------- | -------------- | ------------------ |
| click   | 点击选项时触发 | item: 选项数据对象 |

### Dropdown-item Methods

| 方法名    | 说明                       | 参数                   |
| --------- | -------------------------- | ---------------------- |
| highlight | 手动高亮指定索引的下拉选项 | index: 要高亮的选项索引 |