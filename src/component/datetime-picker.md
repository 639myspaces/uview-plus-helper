此选择器用于时间日期


## API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|show|用于控制选择器的弹出与收起|Boolean|false|true|
|showToolbar|是否显示顶部的操作栏|Boolean|true|false|
|v-model|绑定值(必须是时间戳或者有效的格式化时间)|String|Number|\-|
|title|顶部标题|String|\-|\-|
|mode|展示格式|String|datetime|date为日期选择，time为时间选择，year-month为年月选择，year为年选择，month为年选择|
|maxDate|可选的最大时间（时间戳毫秒）|Number|最大默认值为后10年|\-|
|minDate|可选的最小时间（时间戳毫秒）|Number|最小默认值为前10年|\-|
|minHour|可选的最小小时，仅mode=time有效|Number|0|\-|
|maxHour|可选的最大小时，仅mode=time有效|Number|23|\-|
|minMinute|可选的最小分钟，仅mode=time有效|Number|0|\-|
|maxMinute|可选的最大分钟，仅mode=time有效|Number|59|\-|
|filter|选项过滤函数|Function|null|\-|
|formatter|输入过滤或格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法)|Function|null|\-|
|loading|是否显示加载中状态|Boolean|false|true|
|itemHeight|各列中，单个选项的高度|String|Number|44|
|cancelText|取消按钮的文字|String|取消|\-|
|confirmText|确认按钮的文字|String|确认|\-|
|cancelColor|取消按钮的颜色|String|#909193|\-|
|confirmColor|确认按钮的颜色|String|#3c9cff|\-|
|visibleItemCount|每列中可见选项的数量|String|Number|5|
|closeOnClickOverlay|是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）|Boolean|true|false|
|defaultIndex|各列的默认索引|Array|\[\]|\-|
|immediateChange 2.0.38|是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件|Boolean|false|true|
|round 3.0.1|圆角值，默认无圆角|String|Number|0|
|format 3.2.5|显示在输入框中的格式|String|YYYY-MM-DD|
|valueFormat 3.2.5|绑定值的格式|String|\-|\-|
|showInput 3.2.5|是否显示input输入框|Boolean|false|true|
|inputProps 3.2.5|input属性，参考input组件|Object|\-|\-|

### Slot 3.0.1

|名称|说明|
|---|---|
|trigger|自定义触发|

### Events

|事件名|说明|回调参数|版本|
|---|---|---|---|
|close|关闭选择器时触发|\-|\-|
|confirm|点击确定按钮时触发|value:返回所选时间戳，mode:当前模式|\-|
|change|当选择值变化时触发|value:返回所选时间戳，mode:当前模式|\-|
|cancel|点击取消按钮|\-|\-|

### Methods

|方法名|说明|
|---|---|
|setFormatter|为兼容微信小程序而暴露的内部方法，见上方说明|

上次更新时间: 2025/7/31 14:06:20