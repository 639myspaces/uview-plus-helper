复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便。


## API

### Checkbox Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|name|checkbox 的名称|String|Number|Boolean|
|shape|形状，square 为方形，circle 为圆型，button 为按钮|String|square|circle|
|size|整体的大小|String|Number|\-|
|checked|是否默认选中|Boolean|false|true|
|indeterminate|设置不确定状态，仅负责样式控制|Boolean|false|true|
|disabled|是否禁用|String|Boolean|\-|
|activeColor|选中状态下的颜色，如设置此值，将会覆盖 parent 的 activeColor 值|String|\-|\-|
|inactiveColor|未选中的颜色|String|\-|\-|
|iconSize|图标的大小，单位 px|String|Number|\-|
|iconColor|图标颜色|String|\-|\-|
|label|label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式|String \\ Number|\-|\-|
|labelSize|label的字体大小，px单位|String \\ Number|\-|\-|
|labelColor|label的颜色|String|\-|\-|
|labelDisabled|是否禁止点击提示语选中复选框|String \\ Boolean|\-|\-|
|activeLabelColor|选中状态下label的颜色|String|\-|\-|
|plain|镂空样式|Boolean|true|false|


### CheckboxGroup Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|name|标识符|String|\-|\-|
|v-model / modeValue / value|绑定的值|Array|\[\]|\-|
|shape|形状，circle-圆形，square-方形, button为按钮|String|square|circle|
|disabled|是否禁用全部checkbox|Boolean|false|true|
|activeColor|选中状态下的颜色，如子`Checkbox`组件设置此值，将会覆盖本值|String|#2979ff|\-|
|inactiveColor|未选中的颜色|String|#c8c9cc|\-|
|size|整个组件的尺寸，默认px|String|18|\-|
|placement|布局方式，row-横向，column-纵向|String|row|column|
|labelSize|label的字体大小，px单位|String \\ Number|14|\-|
|labelColor|label的字体颜色|String|#303133|\-|
|labelDisabled|是否禁止点击文本操作|Boolean|false|true|
|icon|图标|String|\-|\-|
|iconColor|图标颜色|String|#ffffff|\-|
|iconSize|图标的大小，单位px|String \\ Number|12|\-|
|iconPlacement|勾选图标的对齐方式，left-左边，right-右边|String|left|right|
|borderBottom|竖向配列时，是否显示下划线|Boolean|false|true|
|activeLabelColor|选中状态下label的颜色|String|\-|\-|
|plain|镂空样式|Boolean|true|false|


### Checkbox Slot

|名称|说明|
|---|---|
|\-(default)|自定义label样式|
|icon|自定义icon图标|


### CheckboxGroup Event

|事件名|说明|回调参数|版本|
|---|---|---|---|
|change|任一个`checkbox`状态发生变化时触发，回调为一个对象|detail = array( \[元素为被选中的`checkbox`的`name`\] )|\-|


上次更新时间: 2025/8/30 23:36:46