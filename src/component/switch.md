# Switch 开关选择器

选择开关用于在打开和关闭状态之间进行切换。

## API

### Switch Props

注意：需要给`switch`组件通过`v-model`绑定一个布尔值，来初始化`switch`的状态，随后该值被双向绑定，当用打开选择器时，该值在`switch`组件内部被修改为`true`，并反映到父组件，否则为`false`，换言之，您无需监听`switch`的`change`事件，也能知道某一个`switch`是否被选中的状态

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| loading | 是否处于加载中 | Boolean | false | true |
| disabled | 是否禁用 | Boolean | false | true |
| size | 开关尺寸，单位rpx | String \| Number | 25 | - |
| activeColor | 打开时的背景色 | String | #2979ff | - |
| inactiveColor | 关闭时的背景色 | String | #ffffff | - |
| modelValue | 通过v-model双向绑定的值 | Boolean \| String \| Number | false | - |
| activeValue | switch打开时的值 | Boolean \| String \| Number | true | - |
| inactiveValue | switch关闭时的值 | Boolean \| String \| Number | false | - |
| asyncChange | 是否开启异步变更，开启后需要手动控制输入值 | Boolean | false | true |
| space | 圆点与外边框的距离 | String \| Number | 0 | - |

### Switch Event

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 在`switch`打开或关闭时触发 | value：打开时为`activeValue`值，关闭时为`inactiveValue`值 |
| update:modelValue | 在`switch`打开或关闭时触发（没开启异步） | value：打开时为`activeValue`值，关闭时为`inactiveValue`值 |