# Cascader 级联选择器

## 组件介绍

级联选择器，用于选择多级关联数据，如省市区、商品分类等。


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| v-model / modelValue | 绑定选中的值 | Array | [] | - |
| v-model:show | 控制组件显示或隐藏 | Boolean | false | true |
| data | 级联数据 | Array | [] | - |
| value-key | 指定选项的值为选项对象中的哪个属性值 | String | 'value' | - |
| label-key | 指定选项标签为选项对象中的哪个属性值 | String | 'label' | - |
| children-key | 指定选项的子选项为选项对象中的哪个属性值 | String | 'children' | - |
| mask-close-able | 是否允许通过点击遮罩关闭 | Boolean | true | false |
| z-index | 弹出时的 z-index 值 | String / Number | 0 | - |
| auto-close | 是否在选择最后一级时自动关闭并触发 confirm | Boolean | false | true |
| headerDirection | 头部项目展示方向 | String | row | column |
| optionsCols | 选项展示列表 | Number | 2 | 1 |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 选中值发生变化时触发 | 选中的值数组 |
| confirm | 点击确认按钮或自动关闭时触发 | 选中的值数组 |

## 源码链接

[查看 uView Plus 级联选择器组件源码](https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/cascader/cascader.nvue)