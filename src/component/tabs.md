## [#]() Tabs 标签 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/tabs.html#api)

该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。


### [#]() API

### [#]() u-tabs Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|duration|滑块移动一次所需的时间，单位**ms**|String|Number|300|
|list|标签数组，元素为对象，如\[{name: '推荐'}\]|Array|\-|\-|
|lineColor|滑块颜色|String|#3c9cff|\-|
|activeStyle|菜单选择中时的样式|String|Object|{ color: '#303133' }|
|inactiveStyle|菜单非选中时的样式|String|Object|{ color: '#606266' }|
|lineWidth|滑块长度|String|Number|20|
|lineHeight|滑块高度|String|Number|3|
|lineBgSize|滑块背景显示大小，当滑块背景设置为图片时使用|String|cover|\-|
|itemStyle|菜单item的样式|String|Object|{ height: '44px' }|
|scrollable|菜单是否可滚动|Boolean|true|false|
|current|当前选中标签的索引|String|Number|0|
|keyName|从`list`元素对象中读取的键名|String|name|\-|
|animated 3.5.38|是否显示切换转场动画，注意仅子组件方式有效|
|swipeable 3.5.38|是否启用左右滑动切换，注意仅子组件方式有效|
|height 3.5.38|内容高度|

### [#]() u-tabs Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|click|点击标签时触发|index: 标签索引值，item: 传入的其他值|\-|
|change|标签索引改变时触发(`disabled`时不会触发)|index: 标签索引值，item: 传入的其他值|\-|
|longPress|长按标签时触发|index: 标签索引值，item: 传入的其他值|\-|

### [#]() u-tabs-item Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|label|标签显示的文本|String|\-|\-|
|disabled|是否禁用此标签|Boolean|false|true|
|badge|右上角的角标提示信息|String|Number|\-|
|dot|是否显示圆点，将会覆盖badge参数|Boolean|false|true|
|customStyle|定义需要用到的外部样式|Object|{}|\-|

### [#]() u-tabs Slots

|名称|说明|
|---|---|
|default|默认插槽，用于放置u-tabs-item子组件|
|left|tabs左侧的插槽|
|right|tabs右侧的插槽|

上次更新时间: 2025/8/30 23:36:46