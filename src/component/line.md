# Line 线条

此组件一般用于显示一根线条，用于分隔内容块，有横向和竖向两种模式，且能设置0.5px线条，使用也很简单。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| color | 线条的颜色 | String | #d6d7d9 | - |
| length | 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等 | String \| Number | 100% | - |
| direction | 线条的方向，`row`-横向，`col`-竖向 | String | row | col |
| hairline | 是否显示细边框 | Boolean | true | false |
| margin | 线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx 30rpx"，默认单位px | String \| Number | 0 | - |
| dashed | 是否虚线，false-实线，true-虚线 | Boolean | false | true |