# Coupon 优惠券 <span class="badge tip">3.5.18</span>

优惠券组件，用于展示各种类型的优惠券信息。

## 使用场景
- 在电商或营销场景中展示优惠券信息
- 展示折扣、满减等促销活动
- 用户领取或使用优惠券的界面展示


## 基本使用
- 通过`amount`设置优惠券金额
- 通过`title`设置优惠券标题
- 通过`limit`设置使用条件
- 通过`time`设置有效期

### Composition API
```js
<script setup>
import { ref } from 'vue';

// 响应式数据
const amount = ref(100);
const title = ref('满减券');
const limit = ref('满200可用');
const time = ref('2023-12-31前使用');

</script>
```

### Options API
```js
<script>
export default {
  data() {
    return {
      amount: 100,
      title: '满减券',
      limit: '满200可用',
      time: '2023-12-31前使用'
    };
  },
  onLoad() {},
  methods: {
  }
};
</script>
```

## 尺寸
通过`size`参数设置优惠券尺寸，可选值为`small`、`medium`(默认)、`large`。

```html
<up-coupon 
  :amount="20" 
  title="满减券" 
  size="small"
  action-text="去使用">
</up-coupon>
```

## 自定义样式
通过`type`参数设置优惠券主题类型，可选值为`primary`、`success`、`error`、`warning`、`info`。

```html
<up-coupon 
  :amount="200" 
  unit="￥" 
  title="大额优惠券" 
  desc="仅限VIP用户" 
  limit="满500可用" 
  time="有效期至2023-12-31"
  size="large"
  type="error">
</up-coupon>
```

## 形状
通过`shape`参数设置优惠券形状，可选值为`round`、`square`、`envelope`、`card`。

```html
<up-coupon 
  :amount="50" 
  unit="元" 
  title="新人红包" 
  desc="限时专享" 
  shape="envelope"
  type="warning">
</up-coupon>
```

## 禁用状态
通过`disabled`参数设置优惠券是否禁用。

```html
<up-coupon 
  :amount="50" 
  title="已过期" 
  desc="活动已结束"
  time="2023-01-01至2023-01-31"
  :disabled="true">
</up-coupon>
```

## 插槽使用
通过插槽可以自定义优惠券的各个部分。

```html
<up-coupon 
  :amount="66" 
  title="自定义样式" 
  desc="通过插槽自定义内容"
  shape="card">
  <template #amount="{ amount }">
    <text class="custom-amount">{{ amount }}</text>
  </template>
  <template #title="{ title }">
    <text class="custom-title">{{ title }}</text>
  </template>
  <template #action="{ circle }">
    <up-button type="success" size="mini" :hairline="false" :custom-style="{ borderRadius: circle ? '50rpx' : '6rpx' }">
      立即使用
    </up-button>
  </template>
</up-coupon>
```

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| amount | 优惠券金额 | String \| Number | - | - |
| unit | 金额单位 | String | - | - |
| title | 优惠券标题 | String | - | - |
| desc | 优惠券描述 | String | - | - |
| limit | 使用条件 | String | - | - |
| time | 有效期 | String | - | - |
| size | 优惠券尺寸 | String | medium | small \| medium \| large |
| type | 主题类型 | String | primary | primary \| success \| error \| warning \| info |
| shape | 优惠券形状 | String | round | round \| square \| envelope \| card |
| color | 字体颜色 | String | #333 | - |
| circle | 按钮是否圆形 | Boolean | false | true |
| disabled | 是否禁用 | Boolean | false | true |
| actionText | 操作按钮文字 | String | 立即使用 | - |

### Slots
| 名称 | 说明 | SlotProps |
| --- | --- | --- |
| amount | 自定义金额区域 | { amount } |
| unit | 自定义单位区域 | { unit } |
| title | 自定义标题区域 | { title } |
| desc | 自定义描述区域 | { desc } |
| limit | 自定义条件区域 | { limit } |
| time | 自定义时间区域 | { time } |
| action | 自定义操作区域 | { circle } |