## [#](http://118.25.198.98/components/tree.html#tree-%E6%A0%91%E5%BD%A2%E7%BB%84%E4%BB%B6-3-5-23) Tree 树形组件 [![](http://118.25.198.98/common/to_api.png)](http://118.25.198.98/components/tree.html#api)

树形结构组件，支持选择、级联、异步加载、搜索过滤与插槽定制等能力。


### [#](http://118.25.198.98/components/tree.html#api) API

### [#](http://118.25.198.98/components/tree.html#props) Props

|参数|说明|类型|默认值|
|---|---|---|---|
|data|树数据|Array|\[\]|
|label-field|节点文本字段名|String|label|
|children-field|子节点字段名|String|children|
|is-leaf-field|叶子节点字段名|String|isLeaf|
|disabled-field|禁用字段名|String|disabled|
|default-checked-keys|默认选中的 keys|Array|\[\]|
|default-expanded-keys|默认展开的 keys|Array|\[\]|
|checked-keys|受控：选中的 keys|Array|\-|
|expanded-keys|受控：展开的 keys|Array|\-|
|checkable|是否显示复选框|Boolean|false|
|selectable|是否允许选中样式|Boolean|false|
|cascade|勾选是否级联父子|Boolean|false|
|expand-on-click|点击内容是否展开/收起|Boolean|false|
|check-on-click|点击内容是否勾选/取消|Boolean|false|
|load-node|懒加载函数 (node)=>Promise|Function|\-|
|allow-checking-not-loaded|允许勾选未加载节点|Boolean|false|
|pattern|搜索关键字（忽略大小写）|String|''|
|show-irrelevant-nodes|搜索时是否显示无关节点|Boolean|true|
|indent-width|子级缩进宽度|Number/String|24|
|show-switcher|是否显示展开/收起图标|Boolean|true|
|expand-icon|展开图标名|String|arrow-right-fill|
|collapse-icon|收起图标名|String|arrow-down-fill|
|loading-color|加载中图标颜色|String|\-|
|checked-color|复选框选中颜色|String|\-|
|rotatable-switcher|切换图标是否旋转|Boolean|false|
|highlight-bg-color|搜索命中高亮背景|String|''|
|selected-bg-color|选中行背景色|String|''|
|switcher-size|切换图标大小|Number/String|14|
|switcher-color|切换图标颜色|String|#909399|

### [#](http://118.25.198.98/components/tree.html#events) Events

|事件名|说明|回调参数|
|---|---|---|
|checked|勾选状态变更|(checkedKeys: string\[\])|
|expanded|展开状态变更|(expandedKeys: string\[\])|
|update:checked-keys|v-model:checked-keys 同步|(checkedKeys: string\[\])|
|update:expanded-keys|v-model:expanded-keys 同步|(expandedKeys: string\[\])|

### [#](http://118.25.198.98/components/tree.html#slot) Slot

|名称|说明|
|---|---|
|switcher|自定义切换图标区域|
|content|自定义每行内容|

上次更新时间: 2025/9/20 08:47:51