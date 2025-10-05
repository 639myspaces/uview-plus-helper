# Subsection 分段器

该分段器一般用于用户从几个选项中选择某一个的场景

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| list | 选项的数组，形式见上方"基本使用" | Array | - | - |
| current | 初始化时默认选中的选项索引值 | String \| Number | 0 | - |
| activeColor | 激活时的颜色 | String | #3c9cff | - |
| inactiveColor | 未激活时的颜色 | String | #303133 | - |
| mode | 模式选择，见上方"模式选择"说明 | String | button | subsection |
| fontSize | 字体大小，单位px | String \| Number | 12 | - |
| bold | 激活选项的字体是否加粗 | Boolean | true | false |
| bgColor | 组件背景颜色，`mode`为`button`时有效 | String | #eeeeef | - |
| keyName | 从`list`元素对象中读取的键名 | String | name | - |
| activeColorKeyName | 从`list`元素对象中读取激活时的颜色 如果存在字段 优先级大于 activeColor | String |  | - |
| inactiveColorKeyName | 从`list`元素对象中读取未激活时的颜色 如果存在字段 优先级大于 inactiveColor | String |  | - |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| change | 分段器选项发生改变时触发 | index：选项的index索引值，从0开始 |