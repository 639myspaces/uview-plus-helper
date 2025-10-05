# Layout 布局

通过基础的 12 分栏，迅速简便地创建布局

**注意**

如需实现类似宫格的布局，请使用uview-plus的[Grid宫格组件]()，可以设置角标，功能更完善和灵活

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| gutter | 栅格间隔，左右各为此值的一半，单位任意 | String \| Number | 0 | - |
| justify | 水平排列方式(微信小程序暂不支持) | String | `start`(或`flex-start`) | `end`(或`flex-end`) / `center` / `around`(或`space-around`) / `between`(或`space-between`) |
| align | 垂直排列方式 | String | center | top / bottom |

### Col Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| span | 栅格占据的列数，总12等分 | String \| Number | 0 | 1-12 |
| offset | 分栏左边偏移，计算方式与`span`相同 | String \| Number | 0 | - |
| justify | 水平排列方式 | String | start | `start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`) |
| align | 垂直对齐方式 | String | stretch | `top`、`center`、`bottom`、`stretch` |
| textAlign | 文字水平对齐方式 | String | left | center / right |

### Row Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | `row`被点击 | - |

### Col Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | `col`被点击，会阻止事件冒泡到`row` | - |