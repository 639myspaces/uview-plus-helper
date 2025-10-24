宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件([badge](http://118.25.198.98/components/badge.html))，或者图标等，也可以扩展为左右滑动的轮播形式。


### [#]() API

### [#]() Grid Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|col|宫格的列数|String|Number|3|
|border|是否显示宫格的边框|Boolean|true|false|
|align|宫格的对齐方式，用于控制只有一两个宫格时的对齐场景|String|left|center / right|
|gutter 3.6.9|栅格间隔，左右各为此值的一半，单位任意|String|Number|0|
|round 3.6.9|设置圆角值|string|\-|
|bgColor 3.6.9|背景颜色|string|\-|

### [#]() Grid-item Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|name|宫格的name|String|Number|\-|
|bgColor|宫格的背景颜色|String|transparent(背景透明)|\-|

### [#]() Grid Event

注意：请在`<u-grid></u-grid>`上监听此事件

|事件名|说明|回调参数|
|---|---|---|
|click|点击宫格触发|name|

### [#]() Grid-item Event

注意：请在`<u-grid-item></u-grid-item>`上监听此事件

|事件名|说明|回调参数|
|---|---|---|
|click|点击宫格触发|name|

上次更新时间: 2025/9/11 13:27:54