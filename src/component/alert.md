# Alert 警告提示

警告提示，展现需要关注的信息。

## 使用场景
- 当某个页面需要向用户显示警告的信息时
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭

## API

## Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 显示的文字 | String | - | - |
| type | 使用预设的颜色 | String | warning | success \| primary \| error \| info |
| description | 辅助性文字，颜色比`title`浅一点，字号也小一点，可选 | String | - | - |
| closable | 关闭按钮(默认为叉号icon图标) | Boolean | false | true |
| showIcon | 是否显示左边的辅助图标 | Boolean | false | true |
| effect | 多图时，图片缩放裁剪的模式 | String | light(浅色) | dark(深色) |
| center | 文字是否居中 | Boolean | false | true |
| fontSize | 字体大小 | String \| Number | 14 | - |
| transitionMode | 过渡动画模式 | String | fade | - |
| duration | 自动关闭延时(毫秒)，设置为0或负数则不自动关闭 | Number | 0 | - |
| icon | 自定义图标名称，优先级高于type默认图标 | String | - | - |
| modelValue/v-model | 绑定值，控制是否显示 | Boolean | true | false |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击组件时触发 | - |
| close | 手动点击关闭件时触发 | - |
| closed | 自动关闭时触发 | - |