# Barcode 条形码

Barcode 组件用于生成和显示各种格式的条形码，支持自定义尺寸、颜色、文本等属性。


## 支持的条码格式

| 格式 | 说明 |
| ---- | ---- |
| CODE128 | 最常用的条形码格式，可编码所有ASCII字符 |
| EAN13 | 国际商品条形码，13位数字 |
| EAN8 | 国际商品条形码，8位数字 |
| CODE39 | 39字符条形码，常用于工业领域 |
| UPC | 统一产品代码 |
| ITF | 交叉二五码，常用于物流行业 |
| MSI | MSI Plessey条码，用于仓库和库存管理 |
| pharmacode | 药品包装上使用的条码 |
| codabar | 医疗和图书馆使用的条码 |

## 注意事项

1. 条形码内容需要符合对应格式的规范，否则会报错
2. 使用Canvas渲染时性能更好，但生成图片可以保存到相册
3. 文本显示时会自动根据条码尺寸调整位置
4. 不同格式的条码对内容要求不同，请根据实际需求选择格式

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| value | 条码值 | string \| number | - | - |
| format | 条码格式 | string | auto | CODE128/CODE128A/CODE128B/CODE128C/EAN13/EAN8/EAN5/EAN2/UPC/UPCA/UPCE/CODE39/ITF/ITF14/MSI/MSI10/MSI11/MSI1010/MSI1110/pharmacode/codabar |
| width | 宽度 | number | 200 | - |
| height | 高度 | number | 80 | - |
| displayValue | 是否显示文本 | boolean | true | false |
| text | 文本内容 | string | - | - |
| fontOptions | 字体选项 | string | - | - |
| font | 字体 | string | monospace | - |
| textAlign | 文本对齐方式 | string | center | left/center/right |
| textPosition | 文本位置 | string | bottom | top/bottom |
| textMargin | 文本边距 | number | 2 | - |
| fontSize | 字体大小 | number | 14 | - |
| background | 背景色 | string | #ffffff | - |
| lineColor | 条码颜色 | string | #000000 | - |
| margin | 边距 | number | 10 | - |
| marginTop | 上边距 | number | undefined | - |
| marginBottom | 下边距 | number | undefined | - |
| marginLeft | 左边距 | number | undefined | - |
| marginRight | 右边距 | number | undefined | - |
| useCanvas | 使用canvas还是生成图片 | boolean | true | false |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | ------- |
| rendered | 渲染完成时触发 | { type: 'canvas' \| 'image', id?: string, value?: string, path?: string } |
| error | 渲染出错时触发 | error |