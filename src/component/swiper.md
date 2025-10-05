# Swiper 轮播图

该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：
- 自定义指示器模式，可配置指示器样式
- 3D轮播图效果，满足不同的开发需求
- 可配置显示标题，涵盖不同的应用场景
- 具有设置加载状态和嵌入视频的能力，功能齐全丰富

## API

### Swiper Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|------|------|
| list | 轮播图数据，见上方"基本使用"说明 | Array | - | - |
| indicator | 是否显示面板指示器 | Boolean | false | true |
| indicatorActiveColor | 指示器激活的颜色 | String | #FFFFFF | - |
| indicatorInactiveColor | 指示器非激活颜色 | String | rgba(255, 255, 255, 0.35) | - |
| indicatorStyle | 指示器样式，可通过bottom，left，right进行定位 | String \| Object | - | - |
| indicatorMode | 指示器模式 | String | line | dot |
| autoplay | 是否自动切换 | Boolean | true | false |
| current | 当前所在滑块的 index | Number \| String | 0 | - |
| currentItemId | 当前所在滑块的 item-id ，不能与 current 被同时指定 | String | - | - |
| interval | 滑块自动切换时间间隔（ms） | String \| Number | 3000 | - |
| duration | 滑块切换过程所需时间（ms），nvue不支持 | String \| Number | 300 | - |
| circular | 播放到末尾后是否重新回到开头 | Boolean | false | true |
| previousMargin | 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持 | String \| Number | 0 | - |
| nextMargin | 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持 | String \| Number | 0 | - |
| acceleration | 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持 | Boolean | false | true |
| displayMultipleItems | 同时显示的滑块数量，nvue、支付宝小程序不支持 | Number | 1 | - |
| easingFunction | 指定swiper切换缓动动画类型， 只对微信小程序有效 | String | default | linear、easeInCubic、easeOutCubic、easeInOutCubic |
| keyName | list数组中指定对象的目标属性名 | String | url | - |
| imgMode | 图片的裁剪模式 | String | aspectFill | 详见图片裁剪 |
| height | 组件高度 | String \| Number | 130 | - |
| bgColor | 背景颜色 | String | #f3f4f6 | - |
| radius | 组件圆角，数值或带单位的字符串 | String \| Number | 4 | - |
| loading | 是否加载中 | Boolean | false | true |
| showTitle | 是否显示标题，要求数组对象中有title属性 | Boolean | false | - |

### Swiper Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击轮播图时触发 | index：点击了第几张图片，从0开始 |
| change | 轮播图切换时触发(自动或者手动切换) | index：切换到了第几张图片，从0开始 |

### Swiper Slot

| 名称 | 说明 |
|------|------|
| default | 默认插槽自定义轮播内容 |

### SwiperIndicator Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|------|------|
| length | 轮播的长度 | String \| Number | 0 | - |
| current | 当前处于活动状态的轮播的索引 | String \| Number | 0 | - |
| indicatorActiveColor | 指示器非激活颜色 | String | - | - |
| indicatorInactiveColor | 指示器的激活颜色 | String | - | - |
| indicatorStyle | 指示器的形式 | String | line | dot |