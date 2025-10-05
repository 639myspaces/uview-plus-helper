# Upload 上传

该组件用于上传图片场景

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| accept | 接受的文件类型，`file`只支持`H5`（只有微信小程序才支持把accept配置为all、media） | String | image | all \| media \| image \| file \| video |
| capture | 图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头 | String \| Array | ['album', 'camera'] | - |
| compressed | 当accept为video时生效，是否压缩视频，默认为true | Boolean | true | false |
| camera | 当accept为video时生效，可选值为back或front | String | back | - |
| maxDuration | 当accept为video时生效，拍摄视频最长拍摄时间，单位秒 | Number | 60 | true |
| uploadIcon | 上传区域的图标，只能内置图标 | String | camera-fill | - |
| uploadIconColor | 上传区域的图标的颜色 | String | #D3D4D6 | - |
| useBeforeRead | 是否启用上传事件@beforeRead | Boolean | false | true |
| previewFullImage | previewFullImage | Boolean | true | false |
| maxCount | 最大选择图片的数量 | String \| Number | 52 | - |
| disabled | 是否启用(显示/隐藏)组件 | Boolean | false | true |
| imageMode | 预览上传的图片时的裁剪模式，和image组件mode属性一致 | String | aspectFill | - |
| name | 标识符，可以在回调函数的第二项参数中获取 | String | file | - |
| sizeType | original 原图，compressed 压缩图，默认二者都有，H5无效 | Array<String> | ['original', 'compressed'] | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | Boolean | false | true |
| deletable | 是否显示删除图片的按钮 | Boolean | true | false |
| maxSize | 选择单个文件的最大大小，单位B(byte)，默认不限制 | String \| Number | Number.MAX_VALUE | - |
| fileList | 显示已上传的文件列表 | Array | - | - |
| uploadText | 上传区域的提示文字 | String | - | - |
| width | 内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者`auto` | String \| Number | 80 | - |
| height | 内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者`auto` | String \| Number | 80 | - |
| previewImage | 是否在上传完成后展示预览图 | Boolean | true | false |
| autoDelete<sup class="version-badge">3.4.6</sup> | 自动删除无需手动@delete处理 | Boolean | false | true |
| autoUpload<sup class="version-badge">3.4.6</sup> | 自动上传无需@afterRead中处理 | Boolean | false | true |
| autoUploadApi<sup class="version-badge">3.4.6</sup> | 自动上传的接口 | String | - | |
| autoUploadDriver<sup class="version-badge">3.4.6</sup> | 自动上传驱动 | String | local | oss，支持服务器本机和阿里云OSS上传 |
| autoUploadAuthUrl<sup class="version-badge">3.4.6</sup> | 自动上传OSS模式下，授权接口 | String | - | 阿里云OSS是前端上传方式，需后端提供授权签名接口。 |
| autoUploadHeader<sup class="version-badge">3.4.6</sup> | 自动上传模式下，携带的额外header，一般为比如Authorization等。 | Object | {} | - |
| getVideoThumb<sup class="version-badge">3.4.6</sup> | 视频上传后是否获取封面图(仅支持自动上传OSS模式) | Boolean | false | true |
| customAfterAutoUpload<sup class="version-badge">3.4.20</sup> | 自定义自动上传后处理逻辑配合@afterAutoUpload | Boolean | false | true |
| videoPreviewObjectFit<sup class="version-badge">3.4.46</sup> | 视频预览object-fit | String | cover | contain |

### Methods

此方法如要通过ref手动调用

| 名称 | 说明 |
| --- | --- |
| afterRead | 读取后的处理函数 |
| beforeRead | 读取前的处理函数 |
| afterAutoUpload | 自动上传后处理函数，注意调用callback参数 |

### Slot

slot中您可以内置任何您所需要的样式。

| 名称 | 说明 |
| --- | --- |
| -(default) | 自定义上传样式 |
| -(trigger) | 自定义上传样式 |

### Events

回调参数中的`event`参数，为当前删除元素的所有信息，`index`为当前操作的图片的索引，`name`为删除名称，`file`包含删除的url信息

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| afterRead | 读取后的处理函数 | (file, lists, name)，错误信息 |
| beforeRead | 读取前的处理函数 | (file, lists, name)，错误信息 |
| oversize | 图片大小超出最大允许大小 | (file, lists, name), name为通过`props`传递的`index`参数 |
| clickPreview | 全屏预览图片时触发 | (url, lists, name)，url为当前选中的图片地址，index为通过`props`传递的`index`参数 |
| delete | 删除图片 | 传递`index` 回调 event 参数 包含`index，file，name` |