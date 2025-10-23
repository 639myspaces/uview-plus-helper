本组件提供一个类似相册的功能，让开发者开发起来更加得心应手。减少重复的模板代码。

## [#](http://118.25.198.98/components/album.html#%E5%B9%B3%E5%8F%B0%E5%B7%AE%E5%BC%82%E8%AF%B4%E6%98%8E) 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|---|---|---|---|
|√|√|√|√|

## [#](http://118.25.198.98/components/album.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8) 基本使用

通过 `urls` 设置相册的图片地址，搭配 image 等做出更棒的效果！


## [#](http://118.25.198.98/components/album.html#api) API

### [#](http://118.25.198.98/components/album.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|urls|图片地址列表，支持 Array<String>|Array<Object> 形式|Array|\-|
|keyName|指定从数组的对象元素中读取哪个属性作为图片地址|String|\-|\-|
|singleSize|单图时，图片长边的长度|String|Number|180|
|multipleSize|多图时，图片边长|String|Number|70|
|space|多图时，图片水平和垂直之间的间隔|String|Number|6|
|singleMode|单图时，图片缩放裁剪的模式|String|scaleToFill|\-|
|multipleMode|多图时，图片缩放裁剪的模式|String|aspectFill|\-|
|maxCount|最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量|String|Number|9|
|previewFullImage|是否可以预览图片|Boolean|true|false|
|rowCount|每行展示图片数量，如设置，singleSize 和 multipleSize 将会无效|String|Number|3|
|showMore|超出 maxCount 时是否显示查看更多的提示|Boolean|true|false|

### [#](http://118.25.198.98/components/album.html#events) Events

|事件名|说明|回调参数|
|---|---|---|
|albumWidth|某些特殊的情况下，需要让文字与相册的宽度相等，这里事件的形式对外发送|width|

上次更新时间: 2025/9/11 13:27:54