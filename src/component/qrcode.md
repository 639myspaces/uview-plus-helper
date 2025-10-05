# Qrcode 二维码 <span class="badge tip">3.1.51</span>

根据提供的字符串前端JS生成二维码展示

<div class="custom-block warning">
  <p class="custom-block-title">注意</p>
  <p>需要uview-plus版本v3.1.50以上版本</p>
</div>

## 使用场景

- 展示二维码场景

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|------|------|------|--------|--------|
| cid | 实例ID字符串(必须) | String |  | - |
| size | 二维码大小 | Intger | 200 | - |
| val | 二维码内容 | String |  |  |
| background | 背景色 | String | #ffffff | - |
| foreground | 前景色 | String | #000000 |  |
| icon | 二维码中间图标 | String |  |  |
| showLoading | 显示加载状态 | Boolean | true | false |
| loadingText | 加载中提示语 | String | 二维码生成中 |  |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|--------|
| result | 二维码生成成功 |  |
| longpress | 长按事件 |  |