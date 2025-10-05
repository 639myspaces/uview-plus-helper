# Toast 消息提示

Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，我们为其提供了多种丰富的API。

<div class="custom-block warning">
  <p class="custom-block-title">注意：</p>
  <p>由于uni中无法通过js创建元素，所以需要在页面中调用<code>&lt;toast /&gt;</code>组件，再通过<code>ref</code>开启</p>
</div>

## API

### Props

这些参数为通过<code>ref</code>调用<code>&lt;toast/&gt;</code>组件内部的<code>show</code>方法时，需要传递参数

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| loading | 是否加载中 | Boolean | false | true |
| message | 显示的文本 | String \| Number | - | - |
| icon | 图标，或者绝对路径的图片 | String | - | - |
| position | toast出现的位置 | String | center | top / bottom |
| type | 主题类型 | String | - | - |
| params | 跳转的参数 | Object | - | - |
| duration | 展示时间，单位ms, 值为-1时不自动关闭 | String \| Number | 2000 | - |
| complete | 执行完后的回调函数 | Function | null | - |

### Methods

方法是通过<code>ref</code>调用的，参见上方说明
注意：所有有关<code>ref</code>的调用，都不能在页面的<code>onLoad</code>生命周期调用，因为此时组件尚未创建完毕，会报错，应该在<code>onReady</code>生命周期调用。

| 方法名 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| show | 显示toast，如需一进入页面就显示toast，请在<code>onReady</code>生命周期调用 | 见上方说明 | - |