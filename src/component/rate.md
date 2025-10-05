# Rate 评分

该组件一般用于满意度调查，星型评分的场景。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| modelValue | 双向绑定选择星星的数量 | String \| Number | 1 | - |
| count | 最多可选的星星数量 | String \| Number | 5 | - |
| disabled | 是否禁止用户操作 | Boolean | false | true |
| readonly <span class="badge tip">2.0.30</span> | 是否只读 | Boolean | false | true |
| size | 星星的大小，单位rpx | String \| Number | 18 | - |
| inactiveColor | 未选中星星的颜色 | String | #b2b2b2 | - |
| activeColor | 选中的星星颜色 | String | #FA3534 | - |
| gutter | 星星之间的距离 | String \| Number | 4 | - |
| minCount | 最少选中星星的个数 | String \| Number | 1 | - |
| allowHalf | 是否允许半星选择 | Boolean | false | true |
| activeIcon | 选中时的图标名，只能为uview-plus的内置图标 | String | star-fill | - |
| inactiveIcon | 未选中时的图标名，只能为uview-plus的内置图标 | String | star | - |
| touchable | 是否可以通过滑动手势选择评分 | Boolean | true | false |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|--------|
| change | 选中的星星发生变化时触发 | value：当前选中的星星的数量，如果使用`v-model`双向绑定方式，无需监听此事件 |