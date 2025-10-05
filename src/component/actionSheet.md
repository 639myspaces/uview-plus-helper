# ActionSheet 操作菜单

本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。
本组件功能类似于uni的`uni.showActionSheet`API，配置更加灵活，所有平台都表现一致。

## API

### Props

注意：props中没有控制组件弹出与收起的参数，因为这是通过show绑定变量实现的，见上方说明。

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否展示 | Boolean | false | true |
| title | 设置标题 | String | - | - |
| description | 选项上方的描述信息，见上方文档示例 | String | - | - |
| actions | 按钮的文字数组，见上方文档示例 | Array<Object> | [ ] | - |
| cancelText | 取消按钮的文字，不为空时显示按钮 | String | - | - |
| closeOnClickAction | 点击某个菜单项时是否关闭弹窗，见上方文档示例 | String | - | - |
| safeAreaInsetBottom | 是否开启[底部安全区适配](safeAreaInset.html#关于uview某些组件safe-area-inset参数的说明) | Boolean | false | true |
| openType | 小程序的打开方式 | String | - | - |
| closeOnClickOverlay | 点击遮罩是否允许关闭，见上方文档示例（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | Boolean | - | - |
| round | 圆角值，默认无圆角 | String \| Number | 0 |  |
| wrapMaxHeight | 选项列表区域最大高度，支持列表过长滚动。 | String | 600px |  |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | String | en | zh_CN \| zh_TW \| en |
| sessionFrom | 会话来源，open-type="contact"时有效。只微信小程序有效 | String | - | - |
| sendMessageTitle | 会话内消息卡片标题，openType="contact"时有效 | String | - | - |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径，openType="contact"时有效 | String | - | - |
| sendMessageImg | 会话内消息卡片图片，openType="contact"时有效 | String | - | - |
| showMessageCard | 是否显示会话内消息卡片，设置此参数为true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 | Boolean | false | true |
| appParameter | 打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效 | String | - | - |

### Event

| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| select | 点击ActionSheet列表项时触发 | - | - |
| close | 点击取消按钮时触发 | - | - |
| getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo返回的一致，openType="getUserInfo"时有效 | detail | - |
| contact | 客服消息回调，openType="contact"时有效 | - | - |
| getphonenumber | 获取用户手机号回调，openType="getPhoneNumber"时有效 | - | - |
| error | 当使用开放能力时，发生错误的回调，openType="error"时有效 | - | - |
| launchapp | 打开 APP 成功的回调，openType="launchApp"时有效 | - | - |
| opensetting | 在打开授权设置页后回调，openType="openSetting"时有效 | - | - |

