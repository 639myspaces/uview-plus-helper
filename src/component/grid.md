# Grid 宫格布局

宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(badge)，或者图标等，也可以扩展为左右滑动的轮播形式。

## API

### Grid Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| col | 宫格的列数 | String \| Number | 3 | - |
| border | 是否显示宫格的边框 | Boolean | false | true |
| align | 宫格的对齐方式，用于控制只有一两个宫格时的对齐场景 | String | left | center / right |
| gap | 宫格间隔（暂不支持nvue) | String | 0px | - |

### Grid-item Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| name | 宫格的name | String \| Number | - | - |
| bgColor | 宫格的背景颜色 | String | transparent(背景透明) | - |

### Grid Event
注意：请在`<up-grid></up-grid>`上监听此事件

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| click | 点击宫格触发 | name |

### Grid-item Event
注意：请在`<up-grid-item></up-grid-item>`上监听此事件

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| click | 点击宫格触发 | name |