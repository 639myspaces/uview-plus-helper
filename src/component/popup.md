# Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否展示弹窗 | Boolean | false | true |
| overlay | 是否显示遮罩 | Boolean | true | false |
| mode | 弹出方向 | String | bottom | top / right / bottom / center |
| duration | 遮罩打开或收起的动画过渡时间，单位ms | String \| Number | 300 | - |
| closeable | 是否显示关闭图标 | Boolean | false | true |
| overlayStyle | 遮罩自定义样式，一般用于修改遮罩颜色，如：{background: 'rgba(3, 100, 219, 0.5)'} | Object \| String | - | - |
| overlayOpacity | 遮罩透明度，`0-1`之间，勿与`overlayStyle`共用 | Number \| String | 0.5 | - |
| closeOnClickOverlay | 点击遮罩是否关闭弹窗（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | Boolean | true | false |
| zIndex | 弹出层的`z-index`值 | Number \| String | 10075 | - |
| safeAreaInsetBottom | 是否为留出[底部安全距离](safeAreaInset.html) | Boolean | true | false |
| safeAreaInsetTop | 是否留出[顶部安全距离](safeAreaInset.html)（状态栏高度） | Boolean | false | true |
| closeIconPos | 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角 | String | top-right | top-left / bottom-left / bottom-right |
| round | 设置圆角值，仅对`mode = top \| bottom \| cener`有效 | Number \| String | 0 | - |
| zoom | 当mode=center时 是否开启缩放 | Boolean | true | false |
| bgColor | 背景色，一般用于特殊弹窗内容场景，设置为`transparent`可去除默认的白色背景 | String | - | - |
| customStyle | 用户自定义样式 | Object | - | - |
| pageInline <span class="badge tip" style="vertical-align:top;">3.5.3</span> | 页面内插入模式 | Boolean | false | true |
| touchable <span class="badge tip" style="vertical-align:top;">3.5.19</span> | 是否开启底部弹窗手势功能 | Boolean | false | true |
| minHeight <span class="badge tip" style="vertical-align:top;">3.5.19</span> | 开启手势功能最小高度 | String | '200px' |  |
| maxHeight <span class="badge tip" style="vertical-align:top;">3.5.19</span> | 开启手势功能最大高度 | String | '500px' |  |

### Event

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| open | 弹出层打开 | - | - |
| close | 弹出层收起 | - | - |

### Slots

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| default | 弹窗内容 | - | - |
| bottom <span class="badge tip" style="vertical-align:top;">3.4.30</span> | 弹窗下方追加内容 | - | - |