# Overlay 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示遮罩 | Boolean | false | true |
| zIndex | z-index 层级 | String \| Number | 10070 | - |
| duration | 动画时长，单位毫秒 | String \| Number | 300 | - |
| opacity | 不透明度值，当做rgba的第四个参数 | String \| Number | 0.5 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击遮罩发送此事件 | - |

### Slot

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |