# Choose 选择器

## 组件介绍
选择器组件，用于实现一组选项的单选或自定义操作。

## 使用场景
- 从一组选项中选择单个项目
- 时间段选择
- 快递上门时间预约等场景
- 可自定义选项的外观和交互

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----|------|------|-------|-------|
| v-model | 当前选中项的索引，可使用 v-model 双向绑定数据 | Number \| String | - | - |
| options | 选项数据，元素需要包含 id 和 title 字段 | Array | [] | - |
| type | 选择类型，当前只支持 radio | String | radio | radio |
| itemWidth | 选项宽度，如传入 250rpx 这样的值 | String | auto | - |
| itemHeight | 选项高度，如传入 50px 这样的值 | String | 50px | - |
| itemPadding | 选项内边距 | String | 8px | - |
| labelName | 选项显示文字的字段名 | String | title | - |
| valueName | 选项值的字段名 | String | value | - |
| customClick | 是否自定义点击事件，设置为 true 时只触发 custom-click 事件 | Boolean | false | true |
| wrap | 是否换行显示 | Boolean | true | false |

### Events
| 事件名 | 说明 | 回调参数 |
|------|-----|---------|
| update:modelValue | 选中项改变时触发（v-model绑定值改变） | 选中项索引 |
| custom-click | 自定义点击事件，需要设置 customClick 为 true | 点击项索引 |

### Slots
| 名称 | 说明 | slotProps |
|-----|------|----------|
| default | 自定义选项内容 | { item: 选项数据, index: 选项索引 } |