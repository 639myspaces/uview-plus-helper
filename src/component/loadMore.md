# LoadMore 加载更多

此组件一般用于标识页面底部加载数据时的状态，共有三种状态：

- 加载前，显示"加载更多"，加入点击可选，是因为数据不够一页时，无法触发页面的`onReachBottom`生命周期
- 加载中，显示"正在加载..."，2种动画可选
- 加载后，如果还有数据，回到"加载前"状态，否则加载结束，显示"没有更多了"

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| status | 组件状态 | String | loadmore | loading / nomore |
| bgColor | 组件背景颜色，在页面是非白色时会用到(默认为transparent) | String | transparent | - |
| icon | 加载中时是否显示图标 | Boolean | true | false |
| fontSize | 字体大小，单位rpx | String \| Number | 14 | - |
| iconSize | 图标大小，单位px | String \| Number | 17 | - |
| color | 字体颜色 | String | #606266 | - |
| loadingIcon | 加载中状态的图标 | String | circle | spinner / semicircle |
| loadmoreText | 加载前的提示语 | String | 加载更多 | - |
| loadingText | 加载中提示语 | String | 正在加载... | - |
| nomoreText | 没有更多的提示语 | String | 没有更多了 | - |
| isDot | `status`为`nomore`时，内容显示为一个"●" | Boolean | false | true |
| iconColor | 加载中的动画图标的颜色 | String | #b7b7b7 | - |
| lineColor <span class="badge tip" style="vertical-align:top;">2.0.32</span> | 线条颜色 | String | #E6E8EB | - |
| dashed <span class="badge tip" style="vertical-align:top;">2.0.32</span> | 是否虚线，false-实线，true-虚线 | Boolean | false | true |
| marginTop | 与前一个元素的距离，单位rpx | String \| Number | 10 | - |
| marginBottom | 与后一个元素的距离，单位rpx | String \| Number | 10 | - |
| height | 高度 | String \| Number | auto | - |
| line | 是否显示左边分割线 | Boolean | false | true |

### Event

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| loadmore | `status`为`loadmore`时，点击组件会发出此事件 | - | - |