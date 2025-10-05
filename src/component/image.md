# Image 图片

此组件为uni-app的`image`组件的加强版，在继承了原有功能外，还支持淡入动画、加载中、加载失败提示、圆角值和形状等。
**我们推荐您在任何使用图片场景的地方，都优先考虑使用这个小巧，精致而实用的组件。**

<div class="custom-block danger">
  <p class="custom-block-title">注意：</p>
  <p>由于在<code>nvue</code>下，<code>u-image</code>名称被uni-app官方占用，在uview2中官方使用<code>u--image</code>的方式解决，uview-plus则统一将前缀改为形如<code>up-image</code>既兼容nvue也兼容vue，同时仍然保持<code>u--</code>和<code>u-</code>前缀的兼容。</p>
</div>

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| src | 图片地址，<strong>强烈建议</strong>使用绝对或者网络路径 | String | - | - |
| mode | 裁剪模式，见上方说明 | String | aspectFill | - |
| width | 宽度，单位任意，如果为数值，默认单位px | String \| Number | 300 | - |
| height | 高度，单位任意，如果为数值，默认单位px | String \| Number | 225 | - |
| shape | 图片形状，circle-圆形，square-方形 | String | square | square |
| radius | 圆角，默认单位px | String \| Number | 0 | - |
| lazyLoad | 是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效 | Boolean | true | - |
| showMenuByLongpress | 是否开启长按图片显示识别小程序码菜单，仅微信小程序有效 | Boolean | true | - |
| loadingIcon | 加载中的图标，或者小图片 | String | photo | - |
| errorIcon | 加载失败的图标，或者小图片 | String | error-circle | - |
| showLoading | 是否显示加载中的图标或者自定义的slot | Boolean | true | false |
| showError | 是否显示加载错误的图标或者自定义的slot | Boolean | true | false |
| fade | 是否需要淡入效果 | Boolean | true | false |
| webp | 只支持网络资源，只对微信小程序有效 | Boolean | false | true |
| duration | 搭配<code>fade</code>参数的过渡时间，单位ms | String \| Number | 500 | - |
| bgColor | 背景颜色，用于深色页面加载图片时，为了和背景色融合 | String | #f3f4f6 | - |

### Slot
| 名称 | 说明 |
| ---- | ---- |
| loading | 自定义加载中的提示内容 |
| error | 自定义失败的提示内容 |

### CellItem Events
| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| click | 点击图片时触发 | - |
| error | 图片加载失败时触发 | err: 错误信息 |
| load | 图片加载成功时触发 | - |