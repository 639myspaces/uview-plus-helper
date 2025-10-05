# PDF阅读器 <sup style="color: #1989fa;">3.5.14</sup>

基于pdf.js的PDF阅读器组件，可以在移动端直接查看PDF文件，目前支持H5。

## 说明

组件默认提供的pdfjs资源仅供测试，速度较慢，建议参考下面章节自托管PDFJS资源。

## 使用场景

- 需要在应用内直接查看PDF文件
- 不希望跳转到外部应用查看PDF
- 需要在不同平台提供一致的PDF阅读体验

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| src | PDF文件地址 | String | - | - |
| height | 组件高度 | String | 700px | - |
| baseUrl | pdf.js资源域名 | String | https://uview-plus.jiangruyi.com/h5 | - |