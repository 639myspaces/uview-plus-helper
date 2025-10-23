基于 [JsBarcode.js (opens new window)](https://github.com/lindell/JsBarcode) 库实现的条形码生成组件，支持多种条形码格式。

## [#](http://118.25.198.98/components/barcode.html#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF) 使用场景

-   商品标签、库存管理等需要条形码的场景
-   会员卡、优惠券等需要条形码标识的场景
-   物流、快递等需要条形码追踪的场景
-   任何需要生成和显示条形码的应用场景


## [#](http://118.25.198.98/components/barcode.html#api) API

### [#](http://118.25.198.98/components/barcode.html#props) Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|value|条形码内容|String|\-|\-|
|format|条形码类型|String|CODE128|CODE128|
|width|条形码宽度|String|Number|2|
|height|条形码高度|String|Number|80|
|color|条形码颜色|String|#000000|\-|
|backgroundColor|背景颜色|String|#ffffff|\-|
|displayValue|是否显示文本|Boolean|true|true|
|textPosition|文本位置|String|bottom|top|
|canvasType|画布类型|String|2d|2d|
|fontOptions|字体选项|String|\-|\-|
|font|字体|String|Arial|\-|
|textAlign|文本对齐方式|String|center|left|
|textMargin|文本边距|Number|5|\-|
|fontSize|字体大小|Number|14|\-|
|customStyle|自定义样式|Object|String|\-|
|mode 3.6.1|生成模式，图片模式不存在层级问题|String|image|canvas|

### [#](http://118.25.198.98/components/barcode.html#%E6%94%AF%E6%8C%81%E7%9A%84%E6%9D%A1%E5%BD%A2%E7%A0%81%E7%B1%BB%E5%9E%8B) 支持的条形码类型

根据 [JsBarcode.js (opens new window)](https://github.com/lindell/JsBarcode) 库，支持以下条形码类型：

|类型|说明|适用场景|字符要求|
|---|---|---|---|
|CODE128|通用条形码，支持所有ASCII字符|商品标签、库存管理|任意ASCII字符|
|CODE39|工业条形码，支持数字、字母和特殊字符|工业标识、物流|数字、字母、特殊字符|
|CODE93|高密度条形码，CODE39的改进版|工业标识、物流|数字、字母、特殊字符|
|EAN13|欧洲商品编码，13位数字|零售商品、超市|13位数字|
|EAN8|欧洲商品编码，8位数字|小型商品|8位数字|
|EAN5|欧洲商品编码，5位数字|图书、杂志|5位数字|
|EAN2|欧洲商品编码，2位数字|图书、杂志|2位数字|
|UPC|美国商品编码，12位数字|北美零售商品|12位数字|
|ITF|交插二五码，仅数字|物流、仓储|数字|
|ITF14|交插二五码，14位数字|物流、仓储|14位数字|
|MSI|MSI条形码，仅数字|库存管理|数字|
|MSI10|MSI条形码，10位数字|库存管理|10位数字|
|MSI11|MSI条形码，11位数字|库存管理|11位数字|
|MSI1010|MSI条形码，10位数字+校验位|库存管理|10位数字|
|MSI1110|MSI条形码，11位数字+校验位|库存管理|11位数字|
|Pharmacode|药品编码，仅数字|药品标识|数字|
|Codabar|库德巴码，支持数字、字母和特殊字符|图书馆、医疗|数字、字母、特殊字符|

上次更新时间: 2025/9/1 13:21:54