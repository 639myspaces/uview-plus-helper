# Steps 步骤条

该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| direction | row-横向，column-竖向 | String | row | column |
| current | 设置当前处于第几步 | Number \| String | 0 | - |
| activeColor | 激活状态颜色 | String | #3c9cff | - |
| inactiveColor | 未激活状态颜色 | String | #969799 | - |
| activeIcon | 激活状态的图标 | String | - | - |
| inactiveIcon | 未激活状态图标 | String | - | - |
| dot | 是否显示点类型 | Boolean | false | true |

### Steps Item Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 标题文字 | String | - | - |
| current | 描述文本 | String | - | - |
| iconSize | 图标大小 | String \| Number | 17 | - |
| error | 当前步骤是否处于失败状态 | Boolean | false | true |
| itemStyle | 当前步骤自定义样式 | Objct | {} | - |

### Slot

| 名称 | 说明 |
| --- | --- |
| - | 自定步骤状态内容 |
| icon | 自定步骤图标 |
| title<span class="badge tip">3.4.2</span> | 自定步骤标题 |
| desc | 自定步骤描述 |
| content | 自定步骤整体内容 |