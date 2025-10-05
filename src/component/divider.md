# Divider 分割线

用于区隔内容的分割线，有时也用于页面底部"没有更多"的提示。

## 基本使用

分割线组件可以添加文字、设置文字位置、设置虚线模式等。

### 多种属性设置

可以设置虚线、细线、用点代替文字、文本位置、颜色等属性。

## API

### Props

| 参数          | 说明                               | 类型            | 默认值    | 可选值               |
| ------------- | ---------------------------------- | --------------- | --------- | -------------------- |
| dashed        | 是否使用虚线                       | Boolean         | false     | true                 |
| hairline      | 是否使用细线                       | Boolean         | true      | false                |
| dot           | 是否使用点代替文字                 | Boolean         | false     | true                 |
| textPosition  | 文本位置                           | String          | center    | left, right          |
| text          | 分割线文字内容                     | String          | -         | -                    |
| textSize      | 文字大小                           | String \| Number | 14        | -                    |
| textColor     | 文字颜色                           | String          | #c0c4cc   | -                    |
| lineColor     | 分割线颜色                         | String          | #ebedf0   | -                    |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| click  | 点击分割线时触发 | -        |