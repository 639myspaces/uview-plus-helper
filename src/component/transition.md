# Transition 动画

该组件用于组件的动画过渡效果。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否展示组件 | Boolean | false | true |
| mode | 使用的动画模式 | String | fade | true |
| duration | 动画的执行时间，单位ms | String \| Number | 300 | - |
| timingFunction | 使用的动画过渡函数，见上方说明 | String | ease-out | - |
| customStyle | 自定义样式 | Object | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| beforeEnter | 进入前触发 | - |
| enter | 进入中触发 | - |
| afterEnter | 进入后触发 | - |
| beforeLeave | 离开前触发 | - |
| leave | 离开中触发 | - |
| afterLeave | 离开后触发 | - |