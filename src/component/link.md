# Link 超链接

该组件为超链接组件，在不同平台有不同表现形式：

- 在APP平台会通过`plus`环境打开内置浏览器
- 在小程序中把链接复制到粘贴板，同时提示信息
- 在H5中通过`window.open`打开链接

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| color | 文字颜色 | String | color['up-primary'] | - |
| fontSize | 字体大小，默认单位px | String \| Number | 15 | - |
| underLine | 是否显示下划线 | Boolean | false | true |
| href | 跳转的链接，要带上http(s) | String | - | - |
| mpTips | 各个小程序平台把链接复制到粘贴板后的提示语 | String | 链接已复制，请在浏览器打开 | - |
| lineColor | 下划线颜色，默认同`color`参数颜色 | String | - | - |
| text | 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色 | String | - | - |