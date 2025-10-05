# GoodsSku 商品规格选择

商品规格选择组件，用于电商场景中选择商品的不同规格和数量。

## 使用场景
- 电商商品详情页中选择商品规格（如颜色、尺寸等）
- 展示商品不同规格对应的价格和库存
- 控制商品购买数量

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| goodsInfo | 商品信息，包含图片、价格、库存等 | Object | {} | - |
| skuTree | SKU树形结构，定义规格分类和选项 | Array | [] | - |
| skuList | SKU列表，包含各规格组合的价格、库存等信息 | Array | [] | - |
| maxBuy | 最大购买数量 | Number | 999 | - |
| confirmText | 确认按钮文字 | String | 确定 | - |
| closeable | 是否显示关闭弹窗按钮 | Boolean | true | false |
| pageInline | 是否页面内联模式 | Boolean | false | true |

### Events
| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| open | 弹窗打开时触发 | - |
| close | 弹窗关闭时触发 | - |
| confirm | 点击确认按钮时触发 | { sku: Object, goodsInfo: Object, num: Number, selectedText: String } |

### Slots
| 名称 | 说明 |
| ---- | ---- |
| trigger | 触发弹窗的元素 |
| header | 弹窗头部区域 |