# NavbarMini 迷你导航栏

此组件一般用于在全屏页面中，典型的比如微信小程序左上角。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| safeAreaInsetTop | 是否开启顶部安全区适配 | Boolean | true | false |
| fixed | 导航栏是否固定在顶部 | Boolean | true | false |
| leftIcon | 左边返回图标的名称，只能为uview-plus自带的图标 | String | arrow-left | - |
| bgColor | 导航栏背景设置 | String | #ffffff | - |
| height | 导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px | String \| Number | 44px | - |
| iconSize | 左侧返回图标的大小 | String \| Number | 20px | - |
| iconColor | 左侧返回图标的颜色 | String | #303133 | - |
| autoBack | 点击左侧区域(返回图标)，是否自动返回上一页 | Boolean | false | true |

### Event

| 名称 | 说明 | 类型 |
|------|------|------|
| leftClick | 点击左侧区域 | Handler |

### Slot

| 名称 | 说明 |
|------|------|
| left | 自定义左侧部分内容 |
| center | 自定义中部内容 |