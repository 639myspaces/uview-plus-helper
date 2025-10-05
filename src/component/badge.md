# Badge 徽标数

### 功能说明

Badge 组件一般用于显示消息数量提示、状态提醒等，支持自定义颜色、形状、内容等属性。

# API

## Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| isDot | 不展示数字，只有一个小点 | Boolean | false | true |
| value | 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为`0`且`show-zero`为`false`时隐藏 | String \| Number | - | - |
| show | 组件是否显示 | Boolean | true | false |
| max | 最大值，超过最大值会显示 '{max}+' | String \| Number | 999 | - |
| type | 主题类型 | String | error | warning / success / primary / info |
| showZero | 当数值为 0 时，是否展示 Badge | Boolean | false | true |
| bgColor | 背景颜色，优先级比`type`高，如设置，`type`参数会失效 | String | - | - |
| color | 字体颜色 | String | #ffffff | - |
| shape | 徽标形状，circle-四角均为圆角，horn-左下角为直角 | String | circle | horn |
| numberType | 置数字的显示方式，详细见上方文档 | String | overflow | ellipsis / limit |
| offset | 设置badge的位置偏移，格式为 [x, y]，也即设置的为`top`和`right`的值，`absolute`为`true`时有效 | Array | - | - |
| inverted | 是否反转背景和字体颜色 | Boolean | false | true |
| absolute | 组件是否绝对定位，为`true`时，`offset`参数才有效 | Boolean | false | true |