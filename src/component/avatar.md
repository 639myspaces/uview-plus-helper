# Avatar 头像

本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。

## API

### Avatar Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| src | 头像路径，如加载失败，将会显示默认头像(不能为相对路径) | String | - | - |
| shape | 头像形状 | String | circle | square |
| size | 头像尺寸，可以为指定字符串(large, default, mini)，或者数值 | String \| Number | 40 | - |
| mode | 头像图片的裁剪类型，与uni的`image`组件的`mode`参数一致，如效果达不到需求，可尝试传`widthFix`值 | String | scaleToFill | - |
| text | 用文字替代图片，级别优先于`src` | String | - | - |
| bg-color | 背景颜色，一般显示文字时用 | String | #c0c4cc | - |
| color | 文字颜色 | String | #ffffff | - |
| font-size | 文字大小 | String \| Number | 18 | - |
| icon | 显示的图标 | String | - | - |
| mp-avatar | 显示小程序头像，只对百度，微信，QQ小程序有效 | Boolean | false | true |
| random-bg-color | 是否使用随机背景色 | Boolean | false | true |
| default-url | 加载失败的默认头像(组件有内置默认图片) | String | - | - |
| color-index | 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间 | String \| Number | - | - |
| name | 组件标识符 | String | level | - |

### Avatar Event

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 头像被点击 | index: 用户传递的标识符 |

### AvatarGroup Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| urls | 头像图片组 | Array | [] | - |
| maxCount | 最多展示的头像数量 | String \| Number | 5 | - |
| shape | 头像形状 | String | circle | square |
| mode | 图片裁剪模式 | String | aspectFill | - |
| showMore | 超出maxCount时是否显示查看更多的提示 | Boolean | true | - |
| size | 头像大小 | String \| Number | 40 | - |
| keyName | 指定从数组的对象元素中读取哪个属性作为图片地址 | String | - | - |
| gap | 头像之间的遮挡比例（0.4代表遮挡40%） | String \| Number | 0.5 | - |
| extraValue | 需额外显示的值，如设置则优先于内部的`urls.length - maxCount`值 | String \| Number | - | - |

### AvatarGroup Event

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| showMore | 头像组更多点击 | - |