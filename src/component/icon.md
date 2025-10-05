# Icon 图标

基于字体的图标集，包含了大多数常见场景的图标。

## 新版本全局加载兼容性
默认不再加载一次，需要只加载一次可以配置如下参数：

```javascript
app.use(store)
  .use(i18n)
  .use(uviewPlus, () => {
    return {
      options: {
        // 修改config对象的属性
        config: {
          // 只加载一次字体图标
          loadFontOnce: true
        }
      }
    }
  })
```

## 自定义默认字体图标自托管资源
受限于uni.loadFontFace，目前仅在APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台支持自定义。
因公共CDN存在不稳定等问题，建议将图标放在自己的服务器上，然后在uview-plus初始化时如下配置加载字体图标：

Tips：字体链接需要是下载类型、返回正确的content-type、必须是https、建议格式为TTF和WOFF、必须是同源下的或开启了cors支持。

```javascript
app.use(store)
  .use(i18n)
  .use(uviewPlus, () => {
    return {
      options: {
        // 修改config对象的属性
        config: {
          // 默认字体图标自托管资源地址
          iconUrl: 'https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf'
        }
      }
    }
  })
```

## 扩充自定义字体图标
如果内置图标不够用可以使用如下方式扩展

APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台如下示例：

```javascript
app.use(store)
  .use(i18n)
  .use(uviewPlus, () => {
    return {
      options: {
        // 修改config对象的属性
        config: {
          customIcon: {
            family: 'xyicon',
            url: 'https://at.alicdn.com/t/c/font_1305928_egvk3tbr3fs.ttf?t=1744189362601'
          },
          customIcons: {
            'light-mode': '\ue66c'
          }
        }
      }
    }
  })
```

其他平台如抖音/QQ/百度小程序请直接在App.vue定一个一个css示例如下：

```html
@font-face {
    font-family: 'xyicon';
    src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
}
```

扩展图标使用方式

```html
<up-icon customPrefix="xyicon" name="light-mode"></up-icon>
```

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ---- | ---- | ---- | ------ | ------ |
| name | 图标名称，见示例图标集，如名称带有`/`，会被认为是图片图标 | String | - | - |
| color | 图标颜色 | String | color['up-content-color'] | - |
| size | 图标字体大小，单位默认px | String \| Number | 16px | - |
| bold | 是否显示粗体 | Boolean | false | - |
| index | 一个用于区分多个图标的值，点击图标时通过`click`事件传出 | String \| Number | - | - |
| hoverClass | 图标按下去的样式类，用法同uni的`view`组件的`hover-class`参数 | String | - | - |
| customPrefix（3.4.16以上支持） | 自定义字体图标库时，需要写上此值 | String | uicon | - |
| label | 图标右侧/下方的label文字 | String \| Number | - | - |
| labelPos | `label`相对于图标的位置 | String | right | bottom / top / left |
| labelSize | `label`字体大小，单位默认px | String \| Number | 15px | - |
| labelColor | `label`字体颜色 | String | color['up-content-color'] | - |
| space | `label`与图标的距离，单位默认px | String \| Number | 3px | - |
| imgMode | 图片裁剪、缩放的模式，image组件原生属性 | String | - | - |
| width | `name`为图片路径时图片的宽度，单位默认px | String \| Number | - | - |
| height | `name`为图片路径时图片的高度，单位默认px | String \| Number | - | - |
| top | 图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位默认px | String \| Number | 0 | - |
| stop | 是否阻止事件传播 | Boolean | false | - |

### Events
| 事件名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| click | 点击图标时触发 | index: 通过`props`传递的`index`值 | - |

### 图标集
（此处包含大量图标展示，详见原文档）