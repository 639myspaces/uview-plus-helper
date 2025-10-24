此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。

提示

由于右侧的演示是通过iframe标签引入的，缺少了手机端运行的相关API，或者因为演示区域太小，或者电脑分别率不够高，导致演示可能会有问题，手机端有不会这些问题，请在右上角的"演示"中用手机扫码查看对应的效果。


### API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|safeAreaInsetTop|是否开启顶部安全区适配|Boolean|true|false|
|placeholder|固定在顶部时，是否生成一个等高元素，以防止塌陷|Boolean|false|true|
|fixed|导航栏是否固定在顶部|Boolean|true|false|
|border|导航栏底部是否显示下边框|Boolean|false|true|
|leftIcon|左边返回图标的名称，只能为uView自带的图标|String|arrow-left|\-|
|leftText|左边的提示文字|String|\-|\-|
|rightText|右边的提示文字|String|\-|\-|
|rightIcon|右边返回图标的名称，只能为uView自带的图标|String|\-|\-|
|title|导航栏标题，如设置为空字符，将会隐藏标题占位区域|String|\-|\-|
|bgColor|导航栏背景设置|String|#ffffff|\-|
|titleWidth|导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx|String|Number|400rpx|
|height|导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px|String|Number|44px|
|leftIconSize|左侧返回图标的大小|String|Number|20px|
|leftIconColor|左侧返回图标的颜色|String|#303133|\-|
|autoBack|点击左侧区域(返回图标)，是否自动返回上一页|Boolean|false|true|
|titleStyle|标题的样式，对象或字符串形式|String|Object|\-|

### Event

|名称|说明|类型|
|---|---|---|
|leftClick|点击左侧区域|Handler|
|rightClick|点击右侧区域|Handler|

注意

App端不存在$slots,插槽`slot`使用前,需要满足`rightIcon`或者`rightText`不为空。

### Slot

|名称|说明|
|---|---|
|left|自定义左侧部分内容|
|right|自定义右侧部分内容|
|center|自定义中部内容|

上次更新时间: 2025/9/21 12:08:21