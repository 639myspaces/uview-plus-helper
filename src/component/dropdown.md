该组件一般用于向下展开菜单，同时可切换多个选项卡的场景。


### API

### Dropdown Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|activeColor|标题和选项卡选中的颜色|String|主题主色|\-|
|inactiveColor|标题和选项卡未选中的颜色|String|主题文本色|\-|
|disabledColor 3.6.13|标题和选项卡禁用时的颜色|String|主题禁用色|\-|
|bgColor|标题选项卡背景颜色|String|#ffffff|\-|
|round|标题选项卡圆角值|String|Number|0|
|closeOnClickMask|点击遮罩是否关闭菜单|Boolean|true|false|
|closeOnClickSelf|点击当前激活项标题是否关闭菜单|Boolean|true|false|
|overlay 3.6.13|是否显示遮罩|Boolean|true|false|
|duration|选项卡展开和收起的过渡时间，单位ms|String|Number|220|
|height|标题菜单的高度，单位任意|String|Number|44|
|titleSize|标题的字体大小，单位任意|String|Number|14|
|borderRadius|菜单展开内容下方的圆角值，单位任意|String|Number|10|
|menuIcon|标题菜单右侧的图标|String|caret-down|\-|
|menuIconSize|标题菜单右侧的图标的大小，单位任意|String|Number|16|

### Dropdown Events

|事件名|说明|回调参数|
|---|---|---|
|open|下拉菜单被打开时触发|(index) - 当前被打开菜单的索引|
|close|下拉菜单被关闭时触发|(index) - 当前被关闭菜单的索引|

### Dropdown-item Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|v-model|双向绑定选项卡选择值|String|Number|Array|
|title|菜单项标题|String|Number|\-|
|disabledClick 3.6.13|禁用默认的点击展开/收起行为|Boolean|false|true|
|options|选项数据，如果传入了默认slot，此参数无效，数据结构见上方说明|Array\[Object\]|\[\]|\-|
|disabled|是否禁用此选项卡|Boolean|false|true|
|height|弹窗下拉内容的高度(内容超出将会滚动)，`slot`自定义内容时无效(自行使用`scroll-view`处理)，单位任意|String|Number|auto|

### Dropdown-item Slot

|名称|说明|
|---|---|
|default|自定义选项卡内容|
|label 3.6.13|自定义标题区域内容；插槽参数：`{ active }` 表示当前是否激活|

### Dropdown-item Events

|事件名|说明|回调参数|
|---|---|---|
|change|每个`u-dropdown`均有此回调，点击某个`options`选项时触发|(value) - 点击项绑定的`value`属性值|
|open 3.6.13|打开当前菜单项时触发|\-|
|opened 3.6.13|打开菜单项且动画结束后触发|\-|
|close 3.6.13|关闭当前菜单项时触发|\-|
|closed 3.6.13|关闭菜单项且动画结束后触发|\-|

### Dropdown Methods

这些为组件内部的方法，需要通过`ref`调用

|参数|说明|
|---|---|
|open(index) 3.6.13|打开指定的菜单项|
|close(index) 3.6.13|关闭打开的下拉菜单|
|highlight(index) （已废弃）|index为需要设置高亮的菜单项的索引(从0开始)，不写表示清空内部的高亮|

上次更新时间: 2025/9/20 08:47:51