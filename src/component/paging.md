一个轻量级的分页组件，在一些基础简单的场景中，可代替 `z-paging` 组件，API设计和使用方法上和`z-paging` 组件保持一致

支持下拉刷新和下滑加载更多，在app-vue、h5、微信小程序、QQ小程序上使用wxs+renderjs在视图层实现下拉刷新，提供了更性能。


## [#]() API

### [#]() Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|value/modelValue|数据列表（v-model 绑定值，Vue2 使用 value，Vue3 使用 modelValue）|Array|\[\]|\-|
|bgColor|背景颜色，支持颜色名称、十六进制、rgb 等格式|String|''|\-|
|height|组件高度，支持字符串或数字类型，如'100px'或 100|String|Number|''|
|fixed|是否使用fixed布局，若使用fixed布局，则父view无需固定高度，组件高度默认铺满屏幕，需要固定在顶部的view使用slot="top"包住，需要固定在底部的view使用slot="bottom"包住。(若不需要组件铺满全屏，如希望在弹窗内使用，请设置:fixed="false"，同时必须指定高度属性，否则列表无法显示)|Boolean|true|false|
|usePageScroll|是否使用页面滚动，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，必须在页面的onReachBottom事件中调用this.$refs.paging.pageReachBottom() 方法|Boolean|false|true|
|refresherEnabled|是否启用下拉刷新功能|Boolean|true|false|
|refresherThreshold|下拉刷新触发距离，单位 px|Number|String|40|
|refresherDefaultText|下拉刷新前的提示文字|String|'继续下拉刷新'|\-|
|refresherPullingText|下拉刷新释放时的提示文字|String|'松开立即刷新'|\-|
|refresherRefreshingText|下拉刷新进行中的提示文字|String|'正在刷新'|\-|
|refresherCompleteText|下拉刷新完成后的提示文字|String|'刷新成功'|\-|
|loadingMoreEnabled|是否启用上拉加载更多功能|Boolean|true|false|
|lowerThreshold|上拉加载更多的触发距离，距离底部多少 px 时触发|Number|String|50|
|loadingMoreDefaultText|上拉加载更多时的默认提示文字|String|'加载更多...'|\-|
|loadingMoreNoMoreText|没有更多数据时的提示文字|String|'没有更多数据了'|\-|

### [#]() Events

|事件名|说明|回调参数|
|---|---|---|
|query|查询事件，用于加载数据|(pageNo, pageSize)|
|reload|刷新事件，无参数|\-|
|complete|完成加载事件|(data, hasMore)|
|clear|重置状态事件，无参数|\-|

### [#]() Methods

|方法名|说明|参数|
|---|---|---|
|complete|完成加载，用于手动触发加载完成|(data, hasMore)|
|clear|清空数据列表|\-|
|reload|重新加载数据|\-|

### [#]() Slots

|插槽名|说明|
|---|---|
|default|主要内容区域|
|top|顶部插槽，在分页组件上方显示内容|

上次更新时间: 2025/8/24 23:26:43