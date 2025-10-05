# Table 表格

表格组件一般用于展示结构化数据的场景

## API

### Table Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| borderColor | 表格边框的颜色 | String | #e4e7ed | - |
| bgColor | 表格的背景颜色 | String | #ffffff | - |
| align | 单元格的内容对齐方式，作用类似css的`text-align` | String | center | left / right |
| padding | 单元格的内边距，同css的`padding`写法 | String | 10rpx 0 | - |
| fontSize | 单元格字体大小，单位rpx | String | 14px | - |
| color | 单元格字体颜色 | String | #606266 | - |
| thStyle | `th`单元格的样式，对象形式(将`th`所需参数放在`table`组件，是为了避免每一个`th`组件要写一遍) | Object | {} | - |

### Td Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分`tr`的长度 | String | auto | - |

### Th Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 标题单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分`tr`的长度 | String | - | - |