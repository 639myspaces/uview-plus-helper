日期横条组件，用于展示周日历或一组日历信息，支持多种展示模式和自定义样式。

## 使用场景

-   在应用中展示日期选择器，如日历、日程安排等
-   需要横向展示一周或多天日期信息
-   支持日期范围限制和禁用特定日期
-   可显示农历信息


## API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|v-model/modelValue|选中的日期时间戳|Number|\-|\-|
|defaultDate|默认选中的日期时间戳|Number|\-|\-|
|mode|切换模式|String|week|week|
|activeMode|高亮模式|String|both|both|
|minDate|可选择的最小日期时间戳|Number|\-|\-|
|maxDate|可选择的最大日期时间戳|Number|\-|\-|
|height|组件高度|String|86px|\-|
|itemWidth|每格日期宽度|String|50px|\-|
|itemRound|每格日期圆角|String|6px|\-|
|activeBgColor|选中框背景色|String|\-|\-|
|activeColor|选中框文本色|String|\-|\-|
|activeStyle|选中框样式|Object|\-|\-|
|bgColor|横条背景色|String|\-|\-|
|round|选中框圆角|String|\-|\-|
|firstDayOfWeek|第一天从星期几开始|Number|0|0-6|
|monthNum|最多展示月份数量|Number|String|3|
|disabledDate|禁止选择的日期|Array|String|\-|
|disabledFun|一个用来判断该日期是否被禁用的函数，接受一个 day 对象作为参数。应该返回一个 Boolean 值或数组 \[Boolean, String\]。返回数组时，第一个元素为是否禁用，第二个元素为自定义显示文本|Function|\-|\-|
|disabledColor|禁用日期的文字颜色|String|\-|\-|
|showLunar|是否显示农历|Boolean|false|true|
|padZero|是否对小于10的数字补0|Boolean|false|true|
|formatter|日期格式化函数|Function|\-|\-|

### Events

|事件名|说明|回调参数|
|---|---|---|
|change|点击日期时触发|timestamp: 选中的时间戳|

### Methods

|方法名|说明|参数|
|---|---|---|
|setFormatter|设置格式化函数|formatter: Function|

上次更新时间: 2025/8/24 23:26:43