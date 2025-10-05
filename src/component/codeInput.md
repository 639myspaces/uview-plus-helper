# CodeInput 验证码输入

该组件一般用于验证用户短信验证码的场景，也可以结合uview-plus的[键盘组件](keyboard.html)使用。


## 基本使用
通过`mode`参数设置显示模式，可取如下值：
- `box`(默认)-输入位置位一个方框
- `bottomLine`-底部显示一条横线
- `middleLine`-中部显示一条横线

```html
<up-code-input v-model="value"></up-code-input>
```

## 横线模式
通过`mode="line"`可设置显示为横线模式。

```html
<up-code-input v-model="value2" mode="line"></up-code-input>
```

## 设置长度
通过`maxlength`参数配置可输入的方框个数，如6位验证码，该值设置为6即可。

```html
<up-code-input v-model="value3" :maxlength="6"></up-code-input>
```

## 横线间距
通过`space`可设置显示为横线模式。

```html
<up-code-input v-model="value4" :space="0"></up-code-input>
```

## 细边框
通过`hairline`可设置细边框。

```html
<up-code-input v-model="value5" mode="box" :space="0" :maxlength="4" hairline></up-code-input>
```

## 调整颜色
通过`color`和`borderColor`可设置颜色。

```html
<up-code-input v-model="value6" hairline color="#f56c6c" borderColor="#f56c6c"></up-code-input>
```

## 用"●"替代输入内容
`dot`参数配置后，输入内容将不可见，用点替代，事件回调中会返回真实值。

```html
<up-code-input v-model="value5" mode="box" dot></up-code-input>
```

## 是否自动获取焦点
如果需要一打开页面，就自动弹出键盘获取焦点，请配置`focus`值为true，否则需要用户手动点击输入区域才能唤起键盘。

```html
<up-code-input v-model="value4" :focus="true"></up-code-input>
```

## 禁止唤起系统键盘
uview-plus有[键盘](keyboard.html)组件，如果您想结合键盘组件进行自定义的输入效果，就需要设置`disabled-keyboard`为`true`，来保证点击输入框时不会触发系统自带的键盘，否则会造成冲突。

## 事件回调
- 每当输入内容发生改变，会回调一个`change`事件，内容为当前输入的字符串，如"395"
- 当输入的内容长度(字符个数)达到`maxlength`值后，会触发`finish`事件，同时也会触发`change`事件

### Composition API
```html
<template>
  <view>
    <up-code-input @change="change" @finish="finish"></up-code-input>
  </view>
</template>

<script setup>
// 定义 change 方法
const change = (e) => {
  console.log('内容改变，当前值为：' + e);
};

// 定义 finish 方法
const finish = (e) => {
  console.log('输入结束，当前值为：' + e);
};
</script>
```

### Options API
```html
<template>
  <view>
    <up-code-input @change="change" @finish="finish"></up-code-input>
  </view>
</template>

<script>
export default {
  methods: {
    change(e) {
      console.log('内容改变，当前值为：' + e);
    },
    finish(e) {
      console.log('输入结束，当前值为：' + e);
    }
  }
}
</script>
```

## 右侧演示页面源代码地址
<div class="custom-block tip">
  <p class="custom-block-title">点击以下链接以查看右侧演示页面的源码</p> <br> <a
    href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/codeInput/codeInput.nvue"
    target="_blank" style="display:flex;align-items:center;"><img height="30"
      src="../../vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
      title="github" width="30"> github
  </a> <a
    href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/codeInput/codeInput.nvue"
    target="_blank" style="display:flex;align-items:center;margin-top:10px;"><img height="30"
      src="../../vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
      title="github" width="30"> gitee
  </a> <br>
</div>

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| adjustPosition <span class="badge tip" style="vertical-align:top;">2.0.32</span> | 键盘弹起时，是否自动上推页面 | Boolean | true | false |
| maxlength | 输入字符个数 | String \ Number | 6 | - |
| dot | 是否用圆点填充 | Boolean | false | true |
| mode | 模式选择，见上方"基本使用"说明 | String | box | bottomLine / middleLine |
| hairline | 是否细边框 | Boolean | false | true |
| space | 字符间的距离 | String \ Number | 10 | - |
| modelValue | 预置值 | String \ Number | - | - |
| focus | 是否自动获取焦点 | Boolean | false | false |
| bold | 字体和输入横线是否加粗 | Boolean | false | true |
| color | 字体颜色 | String | #606266 | - |
| fontSize | 字体大小，单位rpx | String \ Number | 18 | - |
| size | 输入框的大小，宽等于高 | String \ Number | 35 | - |
| disabledKeyboard | 禁止点击输入框唤起系统键盘 | Boolean | false | true |
| borderColor | 边框和线条颜色 | String | #c9cacc | - |
| disabledDot | 是否禁止输入"."符号 | Boolean | true | false |

### Events
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入内容发生改变时触发 | value：当前输入的值 |
| finish | 输入字符个数达`maxlength`值时触发 | value：当前输入的值 |