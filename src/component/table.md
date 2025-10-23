表格组件一般用于展示大量结构化数据的场景，支持数据排序、自定义列内容、行列样式等功能。


### [#](http://118.25.198.98/components/table.html#api) API

### [#](http://118.25.198.98/components/table.html#table-props) Table Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|data|显示的数据|Array|\[\]|\-|
|border|是否带有边框|Boolean|true|false|
|scrollX|是否允许横向滚动|Boolean|true|false|
|stripe|是否为斑马纹表格|Boolean|false|true|
|height|Table的高度，单位px|String|Number|null|
|rowHeight|行高，单位px|String|Number|50|
|showHeader|是否显示表头|Boolean|true|false|
|headerCellStyle 3.3.9|表头单元格的样式|Object|{}|\-|
|cellStyle 3.3.9|单元格的样式|Object|{}|\-|
|ellipsis|单元格是否超出隐藏|Boolean|true|false|
|emptyText|空数据时显示的文本|String|暂无数据|\-|
|emptyHeight|空数据区域高度，单位px|String|Number|200|
|rowKey|行数据的Key，用于优化Table的渲染和多选功能|String|id|\-|
|defaultSelection|默认选中的行数据|Array|\[\]|\-|
|round|设置圆角值|String|Number|0|
|customClass|自定义类名|String|\-|\-|
|customStyle|定义需要用到的外部样式|Object|String|{}|
|spanMethod|合并单元格的方法|Function|null|\-|
|mergeConfig|合并配置数组（简化版）|Array|\[\]|\-|
|showSummary|是否显示表尾合计行|Boolean|false|true|
|sumText|表尾合计行第一列的文本|String|合计|\-|
|summaryMethod|自定义的合计计算方法|Function|null|\-|
|summaryColumns|需要合计的列（prop数组）|Array|\[\]|\-|

### [#](http://118.25.198.98/components/table.html#table-events) Table Events

|事件名称|说明|回调参数|
|---|---|---|
|sort-change|排序变化事件|{ column, prop, order }|
|cell-click|单元格点击事件|{ row, column, rowIndex, columnIndex, value }|
|selection-change|选择项发生变化时会触发该事件|selection（当前选中行数据的数组）|
|select|用户手动勾选数据行的 Checkbox 时触发的事件|selection（当前选中行数据的数组）, row（当前行数据）|
|select-all|用户手动勾选全选 Checkbox 时触发的事件|selection（当前选中行数据的数组）|

### [#](http://118.25.198.98/components/table.html#table-slots) Table Slots

|插槽名称|说明|
|---|---|
|default|表格列内容|
|empty|空数据时的内容|

### [#](http://118.25.198.98/components/table.html#table-methods) Table Methods

|方法名|说明|参数|
|---|---|---|
|toggleRowSelection|用于多选表格，切换某一行的选中状态|row（行数据）, selected（是否选中，不传则切换当前状态）|
|clearSelection|用于多选表格，清空用户的选择|\-|
|getSelectionRows|用于多选表格，返回当前选中的行|\-|

### [#](http://118.25.198.98/components/table.html#table-column-props) Table Column Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|prop|字段名称，对应列内容的字段名|String|\-|\-|
|label|显示的标题|String|\-|\-|
|width|列宽度|String|Number|auto|
|minWidth|列最小宽度|String|Number|\-|
|align|对齐方式|String|left|left / center / right|
|sortable|是否可排序|Boolean|false|true|
|type|列类型|String|\-|index / selection|
|formatter|格式化函数|Function|null|\-|
|show|是否显示|Boolean|true|false|
|className|列的类名|String|\-|\-|
|headerEllipsis 3.3.9|表头是否超出隐藏|Boolean|true|false|
|headerAlign 3.3.9|表头对齐方式|String|left|left|
|customStyle|定义需要用到的外部样式|Object|{}|\-|

### [#](http://118.25.198.98/components/table.html#table-column-events) Table Column Events

|事件名称|说明|回调参数|
|---|---|---|
|cell-click|单元格点击事件|{ row, column, rowIndex, columnIndex, value }|

### [#](http://118.25.198.98/components/table.html#table-column-slots) Table Column Slots

|插槽名称|说明|参数|
|---|---|---|
|default|自定义列的内容|{ row, column, index, value }|

### [#](http://118.25.198.98/components/table.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9) 注意事项

1.  `u-table-column`组件必须作为`u-table`的直接子组件使用
2.  表格数据更新时会自动重新渲染
3.  在小程序中使用时，建议合理设置表格高度以获得更好的性能
4.  合并单元格功能注意事项：
    -   `spanMethod` 函数的返回值中，`rowspan` 和 `colspan` 为 0 时表示隐藏该单元格
    -   合并的单元格会自动调整高度，无需手动设置样式
    -   建议按从上到下、从左到右的顺序进行合并配置
    -   被合并隐藏的单元格无法触发点击事件
    -   合并功能与排序、选择等功能完全兼容
5.  表尾合计行功能注意事项：
    -   合计行只在有数据时显示，空数据状态下不显示
    -   `summaryMethod` 函数优先级高于 `summaryColumns` 配置
    -   如果 `summaryColumns` 为空数组，则自动合计所有数字列
    -   合计行会自动适配表格的布局和样式
    -   合计功能与排序、多选、合并单元格等功能完全兼容
    -   当表格设置了固定高度时，合计行会自动调整表体的滚动区域

上次更新时间: 2025/8/8 09:08:49