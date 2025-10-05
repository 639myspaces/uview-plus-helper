# Parse 富文本解析器

该组件一般用于富文本解析场景，比如解析文章内容，商品详情，带原生HTML标签的各类字符串等，此组件和uni-app官方的`rich-text`组件功能有重合之处，但是也有不同的地方。

## 相同点：
- 二者都能解析HTML字符串

## 不同点：
- 对于轻量、简单的字符串，`rich-text`性能更好
- 对于复杂的字符串，使用`parse`组件效果更好，有更多的自定义属性和效果

## 总结：
如果是简单的场景，比如一段简单的文字和图片内容，可以优先使用`rich-text`组件，在文章内容，商品详情等复杂的文本详情，可以优先使用`parse`组件。

> 提示：此组件源于开源的优秀作品[mp-html](https://github.com/jin-yufeng/mp-html)，本文档只对重要的功能进行介绍，如果需要更详细的说明，请参考[mp-html官方文档](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=uni-app)。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| bgColor | 背景颜色，只适用与APP-PLUS-NVUE(已废弃) | String | - | - |
| containerStyle | 样式设置代替bgColor | String | - | - |
| content | 要显示的富文本字符串 | String | - | - |
| copyLink | 是否允许外部链接被点击时自动复制 | Boolean | true | false |
| domain | 主域名，设置后将给链接自动拼接上主域名或协议名 | String | - | - |
| errorImg | 图片出错时的占位图链接 | String | - | - |
| lazyLoad | 是否开启图片懒加载，nvue不支持此属性 | Boolean | true | false |
| loadingImg | 图片加载完成前的占位图，详见 占位图 | String | - | - |
| pauseVideo | 是否在播放一个视频时自动暂停其它视频 | Boolean | true | false |
| previewImg | 是否开启图片被点击时自动预览 | Boolean | true | false |
| scrollTable | 是否自动给 table 添加一个滚动层（使表格可以单独横向滚动） | Boolean | false | true |
| selectable | 是否开启长按复制内容 | Boolean | false | true |
| setTitle | 是否自动将 title 标签的内容设置到页面标题 | Boolean | true | false |
| showImgMenu | 是否开启图片被长按时显示菜单 | Boolean | true | false |
| tagStyle | 设置标签的默认样式 | Object | - | - |
| useAnchor | 是否使用页面内锚点 | Boolean/Number | false | true |

### Event

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| load | dom 加载完成时触发 | 所有节点被添加到节点树中时触发，无返回值，可以调用 api |
| ready | 渲染完成时触发 | 返回 boundingClientRect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长 |
| error | 出错时触发 | 返回一个 object，其中 source 是错误来源，errMsg 为错误信息，target 包含出错标签的具体信息 |
| imgTap | 图片被点击时触发 | 返回一个 object，其中 src 是图片链接，ignore 是一个函数，在事件中调用将不进行预览；可用于阻挡 onShow 的调用 |
| linkTap | 在链接被点击时触发 | 返回一个 object，其中包含了被点击的 a 标签的所有属性，ignore 是一个函数，在事件中调用后将不自动跳转/复制；可在该事件中进行下载文档等进一步操作 |