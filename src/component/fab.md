悬浮动作按钮组件，按下可显示一组动作按钮，支持多种位置和拖动模式。


## API

### Fab Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|v-model:active|是否激活|Boolean|false|true / false|
|type|按钮类型|String|primary|primary / success / info / warning / error / default|
|position|悬浮按钮位置|String|right-bottom|left-top / right-top / left-bottom / right-bottom / left-center / right-center / top-center / bottom-center|
|draggable|拖动模式|String|auto|auto / free / none|
|direction|菜单弹出方向|String|top|top / right / bottom / left|
|disabled|是否禁用|Boolean|false|true / false|
|inactive-icon|未展开时的图标|String|plus|\-|
|active-icon|展开时的图标|String|close|\-|
|size|悬浮按钮大小|String / Number|56|\-|
|z-index|层级|String / Number|99|\-|
|gap|与边缘的间距|Object|{top: 16, left: 16, right: 16, bottom: 16}|\-|
|expandable|是否可展开|Boolean|true|true / false|
|custom-style|自定义样式|Object|{}|\-|

### Fab Events

|事件名|说明|回调参数|
|---|---|---|
|click|expandable 为 false 时，点击悬浮按钮触发|\-|
|change|菜单状态改变时触发|\-|
|update:active|激活状态改变时触发|active: Boolean|

### Fab Slots

|名称|说明|
|---|---|
|default|默认插槽，放置菜单按钮|
|trigger|自定义触发器|

上次更新时间: 2025/8/24 23:26:43