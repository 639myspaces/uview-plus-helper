# IndexList 索引列表
通过折叠面板收纳内容区域

## API

### IndexBar Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| inactiveColor | 右边锚点状态非激活时的颜色 | String | #606266 | - |
| activeColor | 右边锚点状态激活时的颜色 | String | #5677fc | - |
| indexList | 索引字符列表，数组 | Array[string \| number] | A-Z | - |
| sticky | 是否开启锚点自动吸顶 | Boolean | true | false |
| customNavHeight | 自定义导航栏的高度，单位默认px | String \| Number | 0 | - |

### IndexAnchor Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| text | 列表锚点文本内容 | String \| Number | - | - |
| color | 列表锚点文字颜色 | String | #606266 | - |
| size | 列表锚点文字大小，单位默认px | String \| Number | 14 | - |
| bgColor | 列表锚点背景颜色 | String | #dedede | - |
| height | 列表锚点高度，单位默认px | String \| Number | 32 | - |

### IndexBar Events
| 事件名 | 说明 | 回调参数 | 版本 |
| :--- | :--- | :--- | :--- |
| select | 选中右边索引字符时触发 | index: 索引字符 | - |

### IndexItem Slots
| 名称 | 说明 |
| :--- | :--- |
| default | 自定义列表内容 |