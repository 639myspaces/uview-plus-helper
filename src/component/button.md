# Button 按钮

## 组件介绍

该组件内部实现以uni-app`button`组件为基础，进行二次封装，主要区别在于：

- 按钮`type`值有更多的主题颜色
- 按钮`size`值有更多的尺寸可选

## 注意事项

1. 此组件内部使用uni-app`button`组件为基础，除了增加的功能外，另外暴露出来的props属性和官方组件的属性完全一致。
2. 由于微信小程序的限制，在微信小程序中设置了`form-type`的`up-button`无法触发`form`组件的`submit`事件(H5和APP正常)。


## API

### Props

| 属性名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异说明 |
|-----|-----|-----|-----|-----|-----|
| hairline | 是否显示按钮的细边框 | Boolean | true | false | - |
| type | 按钮的样式类型 | String | info | info / primary / error/ warning / success | - |
| size | 按钮的大小 | String | normal | large / mini | - |
| shape | 按钮外观形状 | String | square | circle | - |
| plain | 按钮是否镂空，背景色透明 | Boolean | false | true | - |
| disabled | 是否禁用 | Boolean | false | true | - |
| loading | 按钮名称前是否带 loading 图标 | Boolean | false | true | App-nvue 平台，在 ios 上为雪花，Android上为圆圈 |
| loadingText | 加载中提示文字 | String | - | - | - |
| loadingMode | 加载状态图标类型 | String | spinner | - | - |
| loadingSize | 加载图标大小 | String \| Number | 15 | - | - |
| openType | 开放能力，具体请看uniapp稳定关于button组件部分说明 | String | - | - | - |
| formType | 用于 &lt;form&gt; 组件，点击分别会触发 &lt;form&gt; 组件的 submit/reset 事件 | String | - | - | - |
| appParameter | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效（注：只微信小程序、QQ小程序有效） | String | - | - | - |
| hoverStopPropagation | 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true） | Boolean | true | false | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | String | en | - | - |
| sessionFrom | 会话来源，openType="contact"时有效 | String | - | - | - |
| sendMessageTitle | 会话内消息卡片标题，openType="contact"时有效 | String | - | - | - |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径，openType="contact"时有效 | String | - | - | - |
| sendMessageImg | 会话内消息卡片图片，openType="contact"时有效 | String | - | - | - |
| showMessageCard | 是否显示会话内消息卡片，设置此参数为true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 | String | - | - | - |
| dataName | 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取 | String | - | - | - |
| throttleTime | 节流，一定时间内只能触发一次，单位毫秒 | String \| Number | 0 | - | - |
| hoverStartTime | 按住后多久出现点击态，单位毫秒 | String \| Number | 0 | - | - |
| hoverStayTime | 手指松开后点击态保留时间，单位毫秒 | String \| Number | 200 | - | - |
| text | 按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式） | String \| Number | - | - | - |
| icon | 按钮图标 | String | - | - | - |
| iconColor | 按钮颜色 | String | 在`plain=true`镂空状态下，颜色与边框保持一致，否则为白色（主题为info时为黑色#000000） | - | - |
| color | 按钮颜色，支持传入linear-gradient渐变色 | String | - | - | - |
| customStyle | 定义需要用到的外部样式 | Object | - | - | - |

### Events

**说明**：目前经测试，在H5，APP，可以直接对组件监听`tap`事件，等同组件内部发出的`click`事件效果，某些HX版本上，微信小程序对组件使用`tap`事件可能无效，故建议对按钮组件的点击事件监听统一使用组件内部发出的`click`事件。

| 属性名 | 说明 | 类型 | 默认值 | 可选值 | 平台差异说明 |
|-----|-----|-----|-----|-----|-----|
| click | 按钮点击，请勿使用`@tap`点击事件，微信小程序无效，返回值为点击事件及参数 | Handler | - | - | - |
| getphonenumber | open-type="getPhoneNumber"时有效 | Handler | 微信小程序 | - | - |
| getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo | Handler | 微信小程序 | - | - |
| error | 当使用开放能力时，发生错误的回调 | Handler | 微信小程序 | - | - |
| opensetting | 在打开授权设置页并关闭后回调 | Handler | 微信小程序 | - | - |
| launchapp | 打开 APP 成功的回调 | Handler | 微信小程序 | - | - |