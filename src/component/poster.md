## Poster 海报生成器 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/poster.html#api)

海报生成组件，提供了强大的海报生成能力，支持文字、图片、二维码，可以轻松生成各种精美的海报。

## 使用场景

-   生成商品海报、活动海报、分享图片等
-   动态生成包含文字、图片、矩形、二维码的复杂布局
-   支持渐变背景、阴影效果、圆角边框等样式
-   适用于电商、社交、营销等需要生成图片的场景
-   配合可视化设计工具，实现所见即所得的海报设计


## API

### Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|showPreview|是否显示预览|Boolean|true|true|
|width|预览宽度|Number|String|375|
|height|预览高度|Number|String|\-|
|mode|预览模式|String|"widthFix"|widthFix|
|palette|海报配置对象|Object|() => \[\]|\-|
|scaleRatio|缩放比，会在传入的palette中统一乘以该缩放比|Number|1|\-|
|widthPixels|宽度像素，设置后会覆盖scaleRatio|Number|0|\-|
|dirty|启用脏检查，默认false|Boolean|false|true|
|fileType|文件类型|String|"jpg"|jpg|
|quality|质量|Number|1|0-1|

### Events

|事件名|说明|回调参数|
|---|---|---|
|success|图片生成成功时触发|(path: String) 生成的图片路径|
|error|图片生成失败时触发|(error: Object) 错误信息|

### Methods

|方法名|说明|参数|
|---|---|---|
|render|手动触发渲染|(data?: Object) 海报数据|

## 注意事项

1.  **图片资源**：确保图片URL可访问，建议使用HTTPS链接
2.  **字体支持**：某些字体在小程序环境下可能不支持，建议使用系统默认字体
3.  **性能优化**：大量元素时建议合理设置zindex，避免频繁重绘
4.  **尺寸单位**：支持px、rpx、%等CSS单位
5.  **渐变支持**：支持linear-gradient和radial-gradient语法
6.  **阴影限制**：不支持spread参数，格式为"x y blur color"

上次更新时间: 2025/9/20 08:47:51