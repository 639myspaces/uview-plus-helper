该组件基于 `pdf.js` 库实现，通过webview嵌入HTML页面实现预览PDF文件。


重要提示

此组件目前处于内测阶段，仅支持H5端使用。由于组件体积较大，为避免影响框架整体包大小，默认未包含在框架中。如需使用，请加入QQ群获取组件包并手动安装。

## [#](http://118.25.198.98/components/pdfViewer.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8) 基本使用

通过 `url` 属性传入PDF文件的地址来显示PDF内容：

```
<template>
  <view>
    <u-pdf-viewer :url="pdfUrl"></u-pdf-viewer>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: 'https://example.com/sample.pdf'
    };
  }
};
</script>

<style scoped>
</style>
```

## [#](http://118.25.198.98/components/pdfViewer.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9) 注意事项

1.  **文件格式**：确保传入的URL指向有效的PDF文件
2.  **网络访问**：PDF文件需要能够通过网络访问
3.  **跨域问题**：某些情况下可能需要处理跨域访问问题

## [#](http://118.25.198.98/components/pdfViewer.html#%E9%A1%B5%E9%9D%A2%E6%BA%90%E7%A0%81%E5%9C%B0%E5%9D%80) 页面源码地址

## [#](http://118.25.198.98/components/pdfViewer.html#api) API

### [#](http://118.25.198.98/components/pdfViewer.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|url|PDF文件的URL地址|String|''|\-|

上次更新时间: 2025/8/24 23:26:43