# LazyLoad 图片懒加载

懒加载使用的场景为：页面有很多图片时，APP会同时加载所有的图片，导致页面卡顿，各个位置的图片出现前后不一致等
本组件高度封装和集成，创新性地使用`uni.createIntersectionObserver`接口，保证高性能的同时，还有其他友好的可配置参数，比如预加载占位图，加载错误占位图，加载位置参数(threshold)，各种事件等。

**提示**

由于右侧的演示是通过iframe标签引入的，缺少了手机端运行的相关API，或者因为演示区域太小，或者电脑分别率不够高，导致演示可能会有问题，手机端有不会这些问题，请在右上角的"演示"中用手机扫码查看对应的效果。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| index | 用户自定义值，在事件触发时回调，用以区分是哪个图片 | String \| Number | - | - |
| image | 图片路径 | String | - | - |
| loading-img | 预加载时的占位图 | String | - | - |
| error-img | 图片加载出错时的占位图 | String | - | - |
| threshold | 触发加载时的位置，见上方说明，单位 rpx | String | 100 | - |
| duration | 图片加载成功时，淡入淡出时间，单位ms | String \| Number | 500 | - |
| effect | 图片加载成功时，淡入淡出的css动画效果 | String | ease-in-out | linear / ease / ease-in / ease-out |
| is-effect | 图片加载成功时，是否启用淡入淡出效果 | Boolean | true | false |
| border-radius | 图片圆角值，单位rpx | String \| Number | 0 | - |
| height | 图片高度，注意：实际高度可能受`img-mode`参数影响 | String \| Number | 450 | - |
| img-mode | 图片的裁剪模式，详见[image组件裁剪模式]() | String \| Number | widthFix | - |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| click | 点击图片时触发 | index：用户通过props传递的`index`值 | - |
| load | 图片加载成功时触发 | index：用户通过props传递的`index`值 | - |
| error | 图片加载失败时触发 | index：用户通过props传递的`index`值 | - |