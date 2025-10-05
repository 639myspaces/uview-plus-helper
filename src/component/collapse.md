# Collapse 折叠面板

Collapse 组件用于通过折叠面板收纳内容区域，可以有效地节省页面空间并提高信息展示的层次感。

## 使用场景
- 需要展示大量信息但希望保持页面简洁时
- 信息内容存在层级关系时
- 需要用户主动展开查看详情的场景


## API

### Collapse Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 当前激活面板的 name | String \| Array \| Number | - | - |
| accordion | 是否为手风琴模式 | Boolean | false | true |
| border | 是否显示外边框 | Boolean | true | false |

### Collapse Item Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 面板标题 | String | - | - |
| value | 标题右侧内容 | String | - | - |
| label | 标题下方的描述信息 | String | - | - |
| disabled | 面板是否可以打开或收起 | Boolean | false | true |
| isLink | 是否展示右侧箭头并开启点击反馈 | Boolean | true | false |
| clickable | 是否开启点击反馈 | Boolean | true | false |
| border | 是否显示内边框 | Boolean | true | false |
| align | 标题的对齐方式 | String | left | - |
| name | 唯一标识符，如不设置，默认用当前`collapse-item`的索引值 | String \| Number | - | - |
| icon | 标题左侧图片，可为绝对路径的图片或内置图标 | String | - | - |
| duration | 面板展开收起的过渡时间，单位`ms` | Number | 300 | - |
| titleStyle <span class="badge tip">3.3.71</span> | 标题的样式 | Object \| String | - | - |
| iconStyle <span class="badge tip">3.3.71</span> | 左侧图标样式 | Object \| String | - | - |
| rightIconStyle <span class="badge tip">3.3.71</span> | 右侧箭头图标的样式 | Object \| String | - | - |
| cellCustomClass <span class="badge tip">3.3.71</span> | 用户自定义Class，如'my-class' | String | - | - |
| cellCustomStyle <span class="badge tip">3.3.71</span> | 用户自定义外部样式，对象形式，如{'fontSize': '12px'} | Object | - | - |

### Collapse Event
注意：请在`<up-collapse></up-collapse>`上监听此事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array) | activeNames: String \| Array |
| open | 当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array) | activeNames: String \| Array |
| close | 当前激活面板关闭时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array) | activeNames: String \| Array |

### Collapse Methods
注意：此方法需要通过`ref`调用

| 方法 | 说明 |
| --- | --- |
| init | 重新初始化内部高度计算，用于异步获取内容的情形，请结合`this.$nextTick()`使用 |

### Slot
微信小程序不支持`slot`写法

| 名称 | 说明 |
| --- | --- |
| - | 主体部分的内容 |
| title | 标题内容 |
| icon | icon |
| value | 右侧value |
| right-icon | 右侧icon |