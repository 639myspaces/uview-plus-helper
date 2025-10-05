# Select 经典下拉框

本组件用于从底部弹出一个操作菜单，类似传统Web上的select下拉框组件, 供用户选择并返回结果。<br> <span class="badge tip" style="vertical-align:top;">3.4.10</span>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| label | 选项名 | String | '选项' | true |
| options | 下拉选项列表 | Array | [] | - |
| current | 当前选中项目值v-model:current | String \| Number | '' | - |
| keyName | 选中时获取列表字段 | String | 'ud' | - |
| labelName | 文案字段显示名称 | String | name | - |
| overlay | 点击后显示蒙版 | Boolean | true | false |
| overlayOpacity | 蒙版透明度 | Number | 0.01 | - |
| overlayStyle | 蒙版样式 | Object | {} | - |
| duration | 动画时间ms | Number | 300 | - |
| showOptionsLabel | 是否显示选中项目名称 | Boolean | false | true |
| zIndex | 渲染层级 | Number | 11000 | - |
| itemColor | 下拉项目颜色 | String | #333333 | - |
| iconColor | 下拉箭头图标颜色 | String | #333333 | - |
| iconSize | 下拉箭头图标大小 | String | 13px | - |

### Event

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| select | 点击列表项时触发 | - | - |

### Slot

| 名称 | 说明 |
| --- | --- |
| -(text) | 触发区域显示文案插槽 |
| -(icon) | 右侧下拉箭头图标插槽 |
| -(options) | 自定义下拉框插槽 |