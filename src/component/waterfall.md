这是一个瀑布流形式的组件，内容分为多列，结合uView的`懒加载`组件效果更佳。

相较于某些只是奇偶数左右分别，或者没有利用vue作用域插槽的做法，uView的瀑布流实现了真正的 组件化，搭配[LazyLoad 懒加载](http://118.25.198.98/components/lazyLoad.html)和[loadMore 加载更多](http://118.25.198.98/components/loadMore.html)组件，让您开箱即用，眼前一亮。

提示

由于右侧的演示是通过iframe标签引入的，缺少了手机端运行的相关API，或者因为演示区域太小，或者电脑分别率不够高，导致演示可能会有问题，手机端有不会这些问题，请在右上角的"演示"中用手机扫码查看对应的效果。

注意

1.  在微信小程序中，需要hx2.8.11才支持在懒加载中结合其他组件
2.  由于hx的问题，支付宝小程序需要hx2.8.2版本及以上才支持本组件


### [#](http://118.25.198.98/components/waterfall.html#api) API

### [#](http://118.25.198.98/components/waterfall.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|v-model|瀑布流的列数据|Array|\-|\-|
|column|瀑布流的列数，不可动态修改|String|Number|2|
|add-time|单条数据添加到队列的时间间隔，单位ms，见上方注意事项说明|String|Number|200|
|idKey|数据的唯一值的键名，见上方说明|String|id|\-|

### [#](http://118.25.198.98/components/waterfall.html#methods) Methods

这些为组件内部的方法，需要通过`ref`调用

|参数|说明|
|---|---|
|clear|清空列表数据|
|remove(id)|`id`为唯一的"id"值，见上方说明|

上次更新时间: 2025/9/21 12:08:21