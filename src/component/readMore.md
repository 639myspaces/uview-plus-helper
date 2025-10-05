# ReadMore 展开阅读更多

该组件一般用于内容较长，预先收起一部分，点击展开全部内容的场景。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| showHeight | 内容超出此高度才会显示展开全文按钮，单位rpx | String \| Number | 400 | - |
| toggle | 展开后是否显示收起按钮 | Boolean | false | true |
| closeText | 关闭时的提示文字 | String | 展开阅读全文 | - |
| openText | 展开时的提示文字 | String | 收起 | - |
| color | 提示文字的颜色 | String | #2979ff | - |
| fontSize | 提示文字的大小，默认单位px | String \| Number | 14 | - |
| shadowStyle | 对阴影的自定义处理，对象形式 | Object | 见上方说明 | - |
| textIndent | 段落首行缩进的字符个数 | String | 2em | - |
| name | 用于在`open`和`close`事件中当作回调参数返回 | String \| Number | - | - |

### Methods

此方法如要通过ref手动调用

| 名称 | 说明 |
|------|------|
| init | 重新初始化组件内部高度计算过程，如果内嵌[up-parse](parse.html)组件时可能需要用到 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|--------|
| open | 内容被展开时触发 | name - props中传入的`name`参数值 |
| close | 内容被收起时触发 | name - props中传入的`name`参数值 |