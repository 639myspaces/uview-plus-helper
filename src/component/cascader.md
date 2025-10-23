级联选择器，用于多级数据的选择，常用于省市区选择、商品分类选择等场景。


## [#](http://118.25.198.98/components/cascader.html#api) API

### [#](http://118.25.198.98/components/cascader.html#props) Props

|参数|说明|类型|默认值|
|---|---|---|---|
|show|是否显示级联选择器|Boolean|false|
|title|选择器标题|String|请选择|
|titleStyle 3.5.1|自定义样式弹窗标题样式|Object|String|
|options|选项数据|Array|\[\]|
|modelValue/value|当前选中值|String / Number / Array|\-|
|placeholder|占位符文本|String|请选择|
|field|自定义字段名|Object|{label: 'label', value: 'value', children: 'children'}|
|closeable|是否显示关闭按钮|Boolean|true|
|closeOnClickOverlay|是否点击遮罩关闭|Boolean|true|
|bgColor|背景色|String|#ffffff|
|activeColor|主题色|String|#3c9cff|
|activeBgColor|选中背景色|String|\-|
|activeBold|选中文本是否加粗|Boolean|false|
|iconColor|图标颜色|String|\-|
|color|文本颜色|String|#303133|
|fontSize|字体大小|String|16px|
|titleFontSize|标题字体大小|String|18px|
|titleColor|标题颜色|String|#303133|
|round|圆角|String / Number|12px|
|zIndex|层级|String / Number|10075|
|safeAreaInsetBottom|是否开启底部安全区适配|Boolean|true|
|itemHeight|选项高度|String|50px|

### [#](http://118.25.198.98/components/cascader.html#events) Events

|事件名|说明|回调参数|
|---|---|---|
|change|选择改变时触发|{value: 选中值数组, label: 选中标签数组, selectedItems: 选中项数组}|
|close|关闭时触发|\-|
|confirm|确认选择时触发（选择到最后一级时）|{value: 选中值数组, label: 选中标签数组, selectedItems: 选中项数组}|
|selected|选择某一项时触发|{item: 选中项, level: 当前层级, selectedPath: 选择路径}|

### [#](http://118.25.198.98/components/cascader.html#options-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84) Options 数据结构

每个选项应包含以下字段（可通过 `field` 属性自定义）：

## [#](http://118.25.198.98/components/cascader.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9) 注意事项

1.  `options` 数据必须是树形结构，每个节点可以包含 `children` 字段
2.  选中值 `v-model` 可以是单个值或数组，数组表示从根到叶子的完整路径
3.  当选择到最后一级（没有子项）时，会自动触发 `confirm` 事件并关闭选择器
4.  可以通过 `field` 属性自定义数据字段名，适配不同的数据结构

上次更新时间: 2025/8/24 23:26:43