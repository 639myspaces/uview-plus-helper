# Radio 单选框

单选框用于有一个选择，用户只能选择其中一个的场景。

## API

### Radio Props

注意：`radio`和`radio-group`二者同名参数中，`radio`的参数优先级更高。

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| name | radio的名称 | String \ Number | - | - |
| shape | 形状，square为方形，circle为圆型 | String | square | circle |
| disabled | 是否禁用 | Boolean | - | - |
| labelDisabled | 是否禁止点击提示语选中复选框 | String \ Boolean | - | - |
| activeColor | 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值 | String | - | - |
| inactiveColor | 未选中的颜色 | String | - | - |
| iconSize | 图标的大小，单位px | String \ Number | - | - |
| labelSize | label的字体大小，px单位 | String \ Number | - | - |
| label | label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式 | String \ Number | - | - |
| size | 整体的大小 | String \ Number | - | - |
| iconColor | 图标颜色 | String | - | - |
| labelColor | label的颜色 | String | - | - |

### radioGroup Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| modelValue | 绑定的值 | String\Number\Boolean | [] | - |
| disabled | 是否禁用全部radio | Boolean | false | true |
| shape | 形状，circle-圆形，square-方形 | String | circle | square |
| activeColor | 选中状态下的颜色，如子`radio`组件设置此值，将会覆盖本值 | String | #2979ff | - |
| inactiveColor | 未选中的颜色 | String | #c8c9cc | - |
| name | 标识符 | String | - | - |
| size | 整个组件的尺寸，默认px | String \ Number | 18 | - |
| placement | 布局方式，row-横向，column-纵向 | String | row | column |
| label | 文本 | String | - | - |
| labelColor | label的字体颜色 | String | #303133 | - |
| labelSize | label的字体大小，px单位 | String \ Number | 14 | - |
| labelDisabled | 是否禁止点击文本操作 | Boolean | false | true |
| iconColor | 图标颜色 | String | #ffffff | - |
| iconSize | 图标的大小，单位px | String \ Number | 12 | - |
| borderBottom | 竖向配列时，是否显示下划线 | Boolean | false | true |
| iconPlacement | 勾选图标的对齐方式，left-左边，right-右边 | String | left | right |

### Radio Slot

| 名称 | 说明 |
|------|------|
| icon <span class="badge tip">3.3.51</span> | 自定义`icon`内容 |
| label <span class="badge tip">3.3.51</span> | 自定义`label`内容 |

### radio Event

| 事件名 | 说明 | 回调参数 | 版本 |
|------|------|--------|------|
| change | 某个`radio`状态发生变化时触发(选中状态) | name: 通过`props`传递的`name`参数 | - |

### radioGroup Event

| 事件名 | 说明 | 回调参数 | 版本 |
|------|------|--------|------|
| change | 任一个`radio`状态发生变化时触发 | name: 值为`radio`通过`props`传递的`name`值 | - |