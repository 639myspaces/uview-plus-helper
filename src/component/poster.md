# Poster 海报生成 3.5.10

该组件用于生成海报图片，支持自定义背景、文本、图片、二维码等元素。（部分兼容l-painter组件）。

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| json | 海报配置JSON数据 | Object | - | - |

### json 配置项

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| css | 海报容器样式 | Object | - |
| views | 海报元素列表 | Array | - |

### json.css 容器样式

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 海报宽度 | String | 750rpx |
| height | 海报高度 | String | 1114rpx |
| background | 背景颜色或图片链接 | String | - |

### json.views 元素配置

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 元素类型 | String | - |
| text | 文本内容(仅text类型) | String | - |
| src | 图片地址(仅image/qrcode类型) | String | - |
| css | 元素样式 | Object | - |

### views元素类型

| 类型 | 说明 |
| --- | --- |
| text | 文本元素 |
| image | 图片元素 |
| qrcode | 二维码元素 |
| view | 矩形容器元素 |

### css 样式属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 定位方式 | String | absolute |
| left | 距离左边距离 | String | 0rpx |
| top | 距离顶部距离 | String | 0rpx |
| width | 元素宽度 | String | - |
| height | 元素高度 | String | - |
| color | 文字颜色(仅text类型) | String | #000 |
| fontSize | 文字大小(仅text类型) | String | - |
| fontWeight | 文字粗细(仅text类型) | String | normal |
| lineHeight | 行高(仅text类型) | String | - |
| lineClamp | 最大行数(仅text类型) | Number | - |
| background | 背景颜色(仅view类型) | String | - |
| radius | 圆角大小 | String | - |
| shadow | 阴影效果 | String | - |

### Event

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| export | 海报导出完成时触发 | result |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| exportImage | 导出海报图片 | - | Promise |