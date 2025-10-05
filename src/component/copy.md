# Copy 复制 <span class="badge tip">3.1.52</span>

## 使用场景
- 点击页面元素复制文字到剪切板


## 基本使用
- 通过`content`设置要复制的文字内容
- 通过`alertStyle`设置提示样式

```html
<template>
  <view>
    <up-copy content="uview-plus is great !">
      <text>点击复制</text>
    </up-copy>
    <up-copy content="uview-plus is great !">
      <up-button type="primary">点击复制</up-button>
    </up-copy>
  </view>
</template>
```

## API

### Props
| 参数       | 说明           | 类型   | 默认值   | 可选值 |
| :--------- | :------------- | :----- | :------- | :----- |
| content    | 待复制文字内容 | String |          | -      |
| alertStyle | 提示样式       | String | toast    | modal  |
| notice     | 提示消息       | String | 复制成功 |        |

### Events
| 事件名  | 说明     | 回调参数 |
| :------ | :------- | :------- |
| success | 复制成功 |          |