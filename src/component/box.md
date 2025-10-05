# Box 盒子

## 组件介绍

box盒子一般为左边一个盒子，右侧两个等高的半盒组成，常用于App首页座位重点突出。


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----|-----|-----|-----|-----|
| height | 高度 | String | 160px |  |
| bgCorlors | 盒子背景色 | String | ['#EEFCFF', '#FCF8FF', '#FDF8F2'] |  |
| borderRadius | 圆角 | String | 6px |  |
| gap | 间隔 | String | 15px |  |

### Slot

| 名称 | 说明 |
|-----|-----|
| left | 左侧 |
| rightTop | 右上 |
| rightBottom | 右下 |