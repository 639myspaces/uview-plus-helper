# Skeleton 骨架屏

骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。

<div class="custom-block tip">
<p class="custom-block-title">说明</p>
<p>由于<code>VUE</code>和<code>NVUE</code>的特性不同，组件动画在<code>VUE</code>上为由左到右形式，在<code>NVUE</code>上为明暗显隐的形式。</p>
</div>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| loading | 是否显示骨架占位图，设置为<code>false</code>将会展示子组件内容 | Boolean | true | false |
| animate | 是否开启动画效果 | Boolean | true | false |
| rows | 段落占位图行数 | Number \| String | 0 | - |
| rowsWidth | 段落占位图的宽度，可以为百分比，数值，带单位字符串等，可通过数组传入指定每个段落行的宽度 | String \| Array \| Number | 100% | - |
| rowsHeight | 段落的高度 | String \| Array \| Number | 18 | - |
| title | 是否展示标题占位图 | Boolean | true | false |
| titleWidth | 标题的宽度 | String \| Number | 50% | - |
| titleHeight | 标题的高度 | String \| Number | 18 | - |
| avatar | 是否展示头像占位图 | Boolean | false | true |
| avatarSize | 头像占位图大小 | String \| Number | 32 | - |
| avatarShape | 头像占位图的形状，circle-圆形，square-方形 | String | circle | square |