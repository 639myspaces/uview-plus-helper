# LoadingIcon 加载动画

此组件为一个小动画，目前用在uview-plus的loadMore加载更多等组件的正在加载状态场景。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示动画 | Boolean | true | false |
| color | 图标颜色 | String | color['u-tips-color'] | - |
| textColor | 提示文本颜色 | String | color['u-tips-color'] | - |
| vertical | 图标和文字是否垂直排列 | Boolean | false | true |
| mode | 模式选择，见上方说明 | String | circle | circle \ semicircle |
| size | 加载图标的大小，单位px | String \| Number | 24 | - |
| textSize | 加载文字的大小，单位px | String \| Number | 15 | - |
| text | 文字内容 | String | - | - |
| timingFunction | 指定`animation-timing-function`的css属性，但只支持`mode`为`circle`或`semicircle`才有效 | String | ease-in-out | - |
| duration | 动画执行周期时间，单位ms | string \| Number | 1200 | - |
| inactiveColor | 图标的暗边颜色, `mode`为`circle` 模式有效 | String | transparent | - |