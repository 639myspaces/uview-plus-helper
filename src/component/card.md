# Card 卡片

## 组件介绍

卡片组件一般用于多个列表条目，且风格统一的场景。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----|-----|-----|-----|-----|
| full | 卡片与屏幕两侧是否留空隙 | Boolean | fasle | true |
| title | 头部左边的标题 | String | - | - |
| title-color | 标题颜色 | String | #303133 | - |
| title-size | 标题字体大小，单位rpx | String \| Number | 30 | - |
| sub-title | 头部右边的副标题 | String | - | - |
| sub-title-color | 副标题颜色 | String | #909399 | - |
| sub-title-size | 副标题字体大小 | String \| Number | 26 | - |
| border | 是否显示边框 | Boolean | true | false |
| index | 用于标识点击了第几个卡片 | String \| Number | - | - |
| margin | 卡片与屏幕两边和上下元素的间距，需带单位，如"30rpx 20rpx" | String | 30rpx | - |
| border-radius | 卡片整体的圆角值，单位rpx | String \| Number | 16 | - |
| head-style | 头部自定义样式，对象形式 | Object | - | - |
| body-style | 主体自定义样式，对象形式 | Object | - | - |
| foot-style | 底部自定义样式，对象形式 | Object | - | - |
| head-border-bottom | 是否显示头部的下边框 | Boolean | true | false |
| foot-border-top | 是否显示底部的上边框 | Boolean | true | false |
| thumb | 缩略图路径，如设置将显示在标题的左边，不建议使用相对路径 | String | - | - |
| thumb-width | 缩略图的宽度，高等于宽，单位rpx | String \| Number | 60 | - |
| thumb-circle | 缩略图是否为圆形 | Boolean | false | true |
| padding | 给head，body，foot部的内边距，单位rpx | String \| Number | 30 | - |
| show-head <span class="badge tip" style="vertical-align:top;">1.3.5</span> | 是否显示头部 | Boolean | true | false |
| show-foot <span class="badge tip" style="vertical-align:top;">1.3.5</span> | 是否显示尾部 | Boolean | true | false |
| box-shadow <span class="badge tip" style="vertical-align:top;">1.6.2</span> | 卡片外围阴影，字符串形式 | String | none | - |

### Slot

| 名称 | 说明 |
|-----|-----|
| head | 自定义卡片头部内容 |
| body | 自定义卡片主体部分内容 |
| foot | 自定义卡片底部部分内容 |

### Event

| 事件名 | 说明 | 回调参数 |
|-----|-----|-----|
| click | 整个卡片任意位置被点击时触发 | index: 用户传递的标识符 |
| head-click | 卡片头部被点击时触发 | index: 用户传递的标识符 |
| body-click | 卡片主体部分被点击时触发 | index: 用户传递的标识符 |
| foot-click | 卡片底部部分被点击时触发 | index: 用户传递的标识符 |