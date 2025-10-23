## [#](http://118.25.198.98/components/feedback.html#feedback-%E5%85%A8%E5%B1%80%E5%8F%8D%E9%A6%88-3-6-25) Feedback 全局反馈 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/feedback.html#api)

提供 Toast 消息提示、Modal 弹窗、Loading 加载、ActionSheet 无需引入组件，即可全局调用

注意

该功能仅支持 Vue3，Vue2 暂不支持


## [#](http://118.25.198.98/components/feedback.html#api) API

### [#](http://118.25.198.98/components/feedback.html#showtoast-%E5%8F%82%E6%95%B0) showToast 参数

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|显示的文字内容|String|\-|\-|
|type|主题类型|String|default|default|
|duration|显示时长，单位 ms|Number|2000|\-|
|position|位置|String|center|top|
|mask|是否显示遮罩(不可用)|Boolean|false|true|
|success|完成回调函数|Function|\-|\-|
|更多属性参考 toast 组件|\-|\-|

### [#](http://118.25.198.98/components/feedback.html#showloading-%E5%8F%82%E6%95%B0) showLoading 参数

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|显示的文字内容|String|加载中...|\-|
|mask|是否显示遮罩|Boolean|false|true|
|duration|显示时长，0 表示不自动隐藏|Number|0|\-|
|更多属性参考 toast 组件|\-|\-|

### [#](http://118.25.198.98/components/feedback.html#showmodal-%E5%8F%82%E6%95%B0) showModal 参数

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|弹窗标题|String|\-|\-|
|content|弹窗内容|String|\-|\-|
|showCancelButton|是否显示取消按钮|Boolean|false|true|
|confirmText|确认按钮文字|String|确定|\-|
|cancelText|取消按钮文字|String|取消|\-|
|confirmColor|确认按钮颜色|String|#007aff|\-|
|cancelColor|取消按钮颜色|String|#999999|\-|
|buttonModel|按钮样式|String|\-|button|
|success|用户选择回调函数|Function|\-|\-|
|更多属性参考 modal 组件|\-|\-|

### [#](http://118.25.198.98/components/feedback.html#showactionsheet-%E5%8F%82%E6%95%B0) showActionSheet 参数

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|操作菜单标题|String|\-|\-|
|description|选项上方的描述信息|String|\-|\-|
|actions|按钮的文字数组|Array<Object>|\[ \]|\-|
|cancelText|取消按钮的文字|String|\-|\-|
|closeOnClickAction|点击菜单项时是否关闭弹窗|Boolean|true|true|
|closeOnClickOverlay|点击遮罩是否允许关闭|Boolean|true|true|
|safeAreaInsetBottom|是否开启底部安全区适配|Boolean|true|true|
|round|圆角值|String|Number|0|
|height|设置高度|String|Number|\-|
|success|成功回调函数|Function|\-|\-|
|cancel|取消回调函数|Function|\-|\-|
|更多属性参考 actionSheet 组件|\-|\-|

### [#](http://118.25.198.98/components/feedback.html#%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0) 回调参数

#### [#](http://118.25.198.98/components/feedback.html#showmodal-success-%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0) showModal success 回调参数

|参数|说明|类型|
|---|---|---|
|confirm|用户是否点击确定|Boolean|
|cancel|用户是否点击取消|Boolean|

#### [#](http://118.25.198.98/components/feedback.html#showactionsheet-success-%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0) showActionSheet success 回调参数

|参数|说明|类型|
|---|---|---|
|name|选中项的名称|String|
|value|选中项的值|Any|
|index|选中项的索引|Number|

#### [#](http://118.25.198.98/components/feedback.html#showactionsheet-cancel-%E5%9B%9E%E8%B0%83%E5%8F%82%E6%95%B0) showActionSheet cancel 回调参数

|参数|说明|类型|
|---|---|---|
|\-|无参数|\-|

上次更新时间: 2025/9/20 08:47:51