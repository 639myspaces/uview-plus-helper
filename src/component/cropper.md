图片剪裁组件，支持图片选择、裁剪、旋转等功能，适用于头像上传、图片编辑等场景。


### [#]() API

### [#]() Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|shape|裁剪框形状|String|square|square / circle|
|autoChoose|每次显示时是否自动打开选择图片|Boolean|false|true / false|
|rectWidth|裁剪框宽度，单位px|String / Number|200|\-|
|rectHeight|裁剪框高度，单位px|String / Number|200|\-|
|width|输出图片宽度，单位px|String / Number|200|\-|
|height|输出图片高度，单位px|String / Number|200|\-|
|fileType|输出图片格式|String|jpg|jpg / png|
|showGrid|是否显示网格线|Boolean|true|true / false|
|openType 3.6.43|微信小程序开放能力，设置为chooseAvatar后，可选择微信头像|String|''|chooseAvatar|
|watermark 3.5.41|水印配置对象|Object|{}|\-|

### [#]() Events

|事件名|说明|回调参数|
|---|---|---|
|change|选择图片时触发|imagePath: 原始图片路径|
|open|打开裁剪弹窗时触发|\-|
|close|关闭裁剪弹窗时触发|\-|
|confirm|确认裁剪时触发|result: 裁剪后的图片临时路径|
|error 3.5.41|出错时触发|message: 错误信息|

上次更新时间: 2025/9/3 10:11:29