# CountTo 数字滚动

用于滚动数字到递增目标值的场景

## 注意事项
父元素居中可能导致APP端抖动，建议使用flex布局实现内容居中，而不是使用绝对定位元素的父元素居中

## 基本使用
通过`startVal`设置开始值，`endVal`设置结束值

```html
<up-count-to :startVal="30" :endVal="500"></up-count-to>
```

## 设置滚动相关参数
- 通过`duration`设置从开始值到结束值整个滚动过程所需的时间，单位`ms`
- 通过`useEasing`设置滚动快结尾的时候，是否放慢滚动的速度，给用户更好的视觉效果

```html
<up-count-to :start-val="30" :end-val="500" :duration="2000" :useEasing="false"></up-count-to>
```

## 是否显示小数位
通过`decimals`设置显示的小数位，如果设置了，在滚动过程中，小数位会一起变化。如果`startVal`和`endVal`是带小数的，应该设置`decimals`为`startVal`和`endVal`一样的小数位数值，如`endVal`为1200.55，那么`decimals`应该设置为2。

```html
<up-count-to :startVal="30" :endVal="500.55" :decimals="2"></up-count-to>
```

## 千分位分隔符
通过`separator`配置千分位分隔符，默认为空字符串，可以设置英文逗号","，此参数表现为`endVal`值超过1000时，比如为"1257"，那么滚动后会变成"1,245"，在金额数值时，该参数可能会用上。

```html
<up-count-to :endVal="1542" separator=","></up-count-to>
```

## 滚动执行的时机
可以通过`autoplay`设置是否需要初始化时就开始滚动，默认为`true`，如果设置为`false`，可以通过组件的`ref`去控制组件内部的`start()`和`paused()`方法来开始或暂停。

```html
<template>
  <up-count-to ref="uCountToRef" :endVal="endVal" :autoplay="autoplay"></up-count-to>
</template>
```

### Composition API
```js
<script setup>
import { ref } from 'vue';

// 创建响应式数据
const endVal = ref(5000.55);
const autoplay = ref(false);

// 创建对子组件的引用
const uCountToRef = ref(null);

// 定义方法
const start = () => {
  if (uCountToRef.value) {
    uCountToRef.value.start();
  }
};

const paused = () => {
  if (uCountToRef.value) {
    uCountToRef.value.paused();
  }
};

const reStart = () => {
  if (uCountToRef.value) {
    uCountToRef.value.reStart();
  }
};
</script>
```

### Options API
```js
<script>
export default {
  data() {
    return {
      endVal: 5000.55,
      autoplay: false
    };
  },
  methods: {
    start() {
      this.$refs.uCountToRef.start();
    },
    paused() {
      this.$refs.uCountToRef.paused();
    },
    reStart() {
      this.$refs.uCountToRef.reStart();
    },
  }
}
</script>
```

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| startVal | 开始值 | String \| Number | 0 | - |
| endVal | 结束值 | String \| Number | 0 | - |
| duration | 滚动过程所需的时间，单位ms | String \| Number | 2000 | - |
| autoplay | 是否自动开始滚动 | Boolean | true | false |
| decimals | 要显示的小数位数，见上方说明 | String \| Number | 0 | - |
| useEasing | 滚动结束时，是否缓动结尾，见上方说明 | Boolean | true | false |
| decimal | 十进制分割 | String | . | - |
| color | 字体颜色 | String | #606266 | - |
| fontSize | 字体大小，单位px | String \| Number | 22 | - |
| bold | 字体是否加粗 | Boolean | false | true |
| separator | 千位分隔符，见上方说明 | String | - | - |

### Methods
此方法如要通过ref手动调用

| 名称 | 说明 |
| --- | --- |
| start | `autoplay`为`false`时，通过此方法启动滚动 |
| reStart | 暂停后重新开始滚动(从暂停前的值开始滚动) |
| paused | 暂停滚动 |

### Event
| 事件名 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| end | 数值滚动到目标值时触发 | - | - |