# CateTab 垂直TAB

## 组件介绍

CateTab 垂直TAB组件，常用于电商、外卖、商超等商品分类场景，提供左右分栏的分类浏览体验。


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| current <span class="badge tip">3.3.73</span> | 当前Tab索引，支持v-model:current | Number | 0 | - |
| tabList | tab列表 | Array | - | - |
| tabKeyName | tab切换key名称 | String | name | - |
| itemKeyName | 内容key名称 | String | name | - |

### Slots

| 名称 | 说明 |
|------|------|
| tabItem | 自定义左侧侧TAB切换，scope={item} |
| pageItem | 自定义右侧TAB内容区域，scope={pageItem} |

### Event

| 事件名 | 说明 | 回调参数 | 版本 |
|--------|------|----------|------|

## 源码链接

[查看 uView Plus 垂直TAB组件源码](https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/cateTab/cateTab.nvue)