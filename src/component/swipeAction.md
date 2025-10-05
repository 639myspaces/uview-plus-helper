# SwipeAction 滑动单元格

该组件一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作。

## 注意
如果把该组件通过v-for用于左滑删除的列表，请保证循环的` :key `是一个唯一值，可以用数据的id或者title替代。不能是数组循环的index，否则删除的时候，可能会出现数据错乱。

## API

### SwipeAction Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| autoClose | 是否自动关闭其他swipe按钮组 | Boolean | true | false |

### SwipeAction Event
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击组件时触发 | (index) |

### SwipeActionItem Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 控制打开或者关闭 | Boolean | false | true |
| closeOnClick | 点击后立即关闭 | Boolean | false | true |
| index | 标识符，如果是v-for，可用index索引 | String \| Number | - | - |
| disabled | 是否禁用 | Boolean | false | true |
| autoClose | 是否自动关闭其他swipe按钮组 | Boolean | true | false |
| threshold | 滑动距离阈值，只有大于此值，才被认为是要打开菜单 | Number | 20 | - |
| options | 右侧按钮内容 | Array | [] | - |
| duration | 动画过渡时间，单位ms | String \| Number | 300 | - |
| name | 标识符，如果是v-for，可用index索引值 | String \| Number | - | - |

### SwipeActionItem Event
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 按钮被点击时触发 | name: props参数`name`的值，index: 第几个按钮被点击 |