# Sticky 吸顶

该组件与CSS中`position: sticky`属性实现的效果一致，当组件达到预设的到顶部距离时，就会固定在指定位置，组件位置大于预设的顶部距离时，会重新按照正常的布局排列。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| offsetTop | 吸顶时与顶部的距离，单位rpx | String \| Number | 0 | - |
| customNavHeight | 导航栏高度，自定义导航栏时，需要传入此值 | String \| Number | 0 | - |
| disabled | 是否禁用吸顶功能 | Boolean | false | true |
| bgColor | 组件背景颜色 | String | #ffffff | - |
| zIndex | 吸顶时的`z-index`值，`NVUE`无效 | String \| Number | - | - |
| index | 自定义标识，用于区分是哪一个组件 | String \| Number | - | - |