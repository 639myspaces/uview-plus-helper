# Tabbar 底部导航栏

## 优点

此组件提供了自定义tabbar的能力，具有如下特点：
- 图标可以使用字体图标(内置图标和扩展图标)或者图片
- 可以动态切换菜单的数量以及配置
- 切换菜单之前，可以进行回调鉴权
- 可以设置角标或数字化提示
- 有效防止组件区域高度塌陷，无需给父元素额外的内边距或者外边距来避开导航的区域

## API

### TableBar Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 当前匹配项的name | String \| Number | null | - |
| safeAreaInsetBottom | 是否为iPhoneX留出底部安全距离 | Boolean | true | false |
| border | 是否显示上方边框 | Boolean | true | false |
| zIndex | 元素层级z-index | String \| Number | 1 | - |
| activeColor | 选中标签的颜色 | String | #1989fa | - |
| inactiveColor | 未选中标签的颜色 | String | #7d7e80 | - |
| fixed | 是否固定在底部 | Boolean | true | false |
| placeholder | fixed定位固定在底部时，是否生成一个等高元素防止塌陷 | Boolean | true | false |
| backgroundColor | Tabbar整体背景色 | String | #fff | - |
| borderColor | 上方边框颜色 | String | #dadbde | - |

### TableBarItem Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | item标签的名称，作为与up-tabbar的value参数匹配的标识符 | String \| Number | null | - |
| icon | uview-plus内置图标或者绝对路径的图片 | String | - | - |
| badge | 右上角的角标提示信息 | String \| Number | null | - |
| dot | 是否显示圆点，将会覆盖badge参数 | Boolean | false | true |
| text | 描述文本 | String | - | - |
| badgeStyle | 控制徽标的位置，对象或者字符串形式，可以设置top和right属性 | Object \| String | 'top: 6px;right:2px;' | - |

### TableBarItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换选项时触发 | index：当前要切换项的name |
| click | 切换选项时触发 | index：当前要切换项的name |