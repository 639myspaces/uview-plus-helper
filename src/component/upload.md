该组件用于上传图片场景


### [#](http://118.25.198.98/components/upload.html#api) API

### [#](http://118.25.198.98/components/upload.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|v-model 3.6.24|已上传的文件列表|Array|String|\[\]|
|action 3.6.24|上传请求的 URL|String|''|\-|
|data 3.6.24|上传时附带的额外参数|object|{}|\-|
|headers 3.6.24|设置上传的请求头部|object|{}|\-|
|accept|接受的文件类型，`file`只支持`H5`（只有微信小程序才支持把 accept 配置为 all、media）|String|image|all|
|capture|图片或视频拾取模式，当 accept 为 image 类型时，设置 capture 为 camera 可以直接调起摄像头|String|Array|\['album', 'camera'\]|
|extension|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。例如\['.zip','.exe','.js'\]，不支持 application/msword 等类似值|Array|\[\]|\-|
|compressed|当 accept 为 video 时生效，是否压缩视频，默认为 true|Boolean|true|false|
|compressImage|当 accept 为 image 时生效，图片压缩参数，值为 false 不压缩。详见下面说明|Boolean|Objcet|开启压缩|
|camera|当 accept 为 video 时生效，可选值为 back 或 front|String|back|\-|
|maxDuration|当 accept 为 video 时生效，拍摄视频最长拍摄时间，单位秒|Number|60|true|
|uploadIcon|上传区域的图标，只能内置图标|String|camera-fill|\-|
|uploadIconColor|上传区域的图标的颜色|String|#D3D4D6|\-|
|useBeforeRead|是否启用(显示/隐藏)组件|Boolean|false|true|
|previewFullImage|previewFullImage|Boolean|true|false|
|maxCount|最大选择图片的数量|String|Number|52|
|disabled|是否启用(显示/隐藏)组件|Boolean|false|true|
|imageMode|预览上传的图片时的裁剪模式，和 image 组件 mode 属性一致|String|aspectFill|\-|
|name|标识符，可以在回调函数的第二项参数中获取|String|file|\-|
|sizeType|original 原图，compressed 压缩图，默认二者都有，H5 无效|Array<String>|\['original', 'compressed'\]|\-|
|multiple|是否开启图片多选，部分安卓机型不支持|Boolean|false|true|
|deletable|是否显示删除图片的按钮|Boolean|true|false|
|maxSize|选择单个文件的最大大小，单位 B(byte)，默认不限制|String|Number|Number.MAX\_VALUE|
|fileList|显示已上传的文件列表|Array|\-|\-|
|uploadText|上传区域的提示文字|String|\-|\-|
|width|内部预览图片区域和选择图片按钮的区域宽度，单位 rpx，不能是百分比，或者`auto`|String|Number|80|
|height|内部预览图片区域和选择图片按钮的区域高度，单位 rpx，不能是百分比，或者`auto`|String|Number|80|
|previewImage|是否在上传完成后展示预览图|Boolean|true|false|
|round|设置圆角值|String|Number|0|

WARNING

在H5端，由于图片压缩采用`canvas`实现，压缩后使用 `URL.createObjectURL` 方法转换为 `tempFilePath`，若直接使用 `filePath` 参数进行上传，会导致后端无法正常获取上传文件的原始名称，因此建议使用 `file` 属性进行上传。

### [#](http://118.25.198.98/components/upload.html#methods) Methods

此方法如要通过 ref 手动调用

|名称|说明|
|---|---|
|afterRead|读取后的处理函数|
|beforeRead|读取前的处理函数|

### [#](http://118.25.198.98/components/upload.html#slot) Slot

slot 中您可以内置任何您所需要的样式。

|名称|说明|
|---|---|
|\-(default)|自定义上传样式|

### [#](http://118.25.198.98/components/upload.html#events) Events

回调参数中的`event`参数，为当前删除元素的所有信息，`index`为当前操作的图片的索引，`name`为删除名称，`file`包含删除的 url 信息

|事件名|说明|回调参数|
|---|---|---|
|afterRead|读取后的处理函数|(file, lists, name)，错误信息|
|beforeRead|读取前的处理函数|(file, lists, name)，错误信息|
|change|文件上传后触发,成功和上传失败时都会被调用|(response), 接口响应信息|
|oversize|图片大小超出最大允许大小|(file, lists, name), name 为通过`props`传递的`index`参数|
|clickPreview|全屏预览图片时触发|(url, lists, name)，url 为当前选中的图片地址，index 为通过`props`传递的`index`参数|
|delete|删除图片|(event), 回调 event 中包含`index，file，name`|

上次更新时间: 2025/9/21 12:08:21