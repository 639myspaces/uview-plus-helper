# Slider 滑动选择器

该组件一般用于表单中，手动选择一个区间范围的场景。

<div class="custom-block tip">
<p class="custom-block-title">说明</p>
<p>该组件在<code>H5</code>，<code>微信小程序</code>和<code>APP-VUE</code>等平台上使用了<code>WXS</code>技术，在<code>NVUE</code>平台使用了<code>BindingX</code>技术，故在滑动过程中可以获得细腻流畅的跟随效果。</p>
</div>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| modelValue | 双向绑定滑块选择值 | String \| Number | 0 | - |
| blockSize | 滑块的大小 | String \| Number | 18 | 12 - 28 |
| min | 可选的最小值 | String \| Number | 1 | - |
| max | 可选的最大值 | String \| Number | 100 | - |
| step | 选择的步长 | String \| Number | 1 | - |
| activeColor | 进度条的激活部分颜色 | String | #2979ff | - |
| inactiveColor | 进度条的背景颜色 | String | #c0c4cc | - |
| blockColor | 滑块背景颜色 | String | #ffffff | - |
| showValue | 是否显示当前 value | Boolean | false | true |
| blockStyle | 滑块按钮自定义样式，对象形式 | Object \| String | - | - |
| height | 进度条高度 | String | 2px | - |
| innerStyle <span class="badge tip">3.4.90</span> | 滑快组件内部区域样式 | Object | {} | - |
| isRange <span class="badge tip">3.3.8</span> | 开始其双滑快模式 | Boolen | false | true |
| rangeValue <span class="badge tip">3.3.8</span> | 双滑快双向绑定值，数组形式 | Array | [0,0] | - |
| vertical <span class="badge tip">新增</span> | 是否垂直方向 | Boolean | false | true |
| width <span class="badge tip">新增</span> | 垂直方向时滑块高度 | String \| Number | 300px | - |

### Slider Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 更新v-model的（拖动过程中） | value：当前值 |
| changing | 触发事件（拖动过程中） | value：当前值 |
| update:modelValue | 更新v-model的 | value：当前值 |
| change | 触发事件 | value：当前值 |