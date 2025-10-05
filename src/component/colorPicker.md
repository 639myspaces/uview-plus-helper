# ColorPicker 颜色选择器 <span class="badge tip" style="vertical-align:top;">3.5.15</span>

颜色选择器组件，支持纯色和渐变色选择，可自定义常用颜色。


## 基本使用
通过`v-model`绑定颜色值，支持纯色和渐变色。

### Composition API
```html
<template>
  <view class="p-4 bg-white">
    <up-color-picker 
        v-model="color" 
        @confirm="confirm"
    >
        <view class="color-preview">
            <view class="color-block" :style="{ backgroundColor: color }"></view>
            <text class="color-text">{{ color }}</text>
        </view>
    </up-color-picker>
  </view>
</template>

<script setup>
import { ref } from 'vue';
const color = ref('#ff0000');
const confirm = (selectedColor) => {
  console.log('选择的颜色：', selectedColor);
};
</script>
```

### Options API
```html
<template>
  <view class="p-4 bg-white">
    <up-color-picker 
        v-model="color" 
        @confirm="confirm"
    >
        <view class="color-preview">
            <view class="color-block" :style="{ backgroundColor: color }"></view>
            <text class="color-text">{{ color }}</text>
        </view>
    </up-color-picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      color: '#ff0000'
    }
  },
  methods: {
    confirm(color) {
      console.log('选择的颜色：', color);
    }
  }
}
</script>
```

## 带常用颜色的使用
通过`commonColors`属性设置常用颜色列表。

### Composition API
```html
<template>
  <view class="p-4 bg-white">
    <up-color-picker 
        v-model="color" 
        :commonColors="commonColors" 
        @confirm="confirm"
    >
        <view class="color-preview">
            <view class="color-block" :style="{ backgroundColor: color }"></view>
            <text class="color-text">{{ color }}</text>
        </view>
    </up-color-picker>
  </view>
</template>

<script setup>
import { ref } from 'vue';
const color = ref('#ff0000');
const commonColors = ref([
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
  '#00ffff',
  '#ff00ff',
  '#ffffff',
  '#000000'
]);
const confirm = (selectedColor) => {
  console.log('选择的颜色：', selectedColor);
};
</script>
```

### Options API
```html
<template>
  <view class="p-4 bg-white">
    <up-color-picker 
        v-model="color" 
        :commonColors="commonColors" 
        @confirm="confirm"
    >
        <view class="color-preview">
            <view class="color-block" :style="{ backgroundColor: color }"></view>
            <text class="color-text">{{ color }}</text>
        </view>
    </up-color-picker>
  </view>
</template>

<script>
export default {
  data() {
    return {
      color: '#ff0000',
      commonColors: [
          '#ff0000',
          '#00ff00',
          '#0000ff',
          '#ffff00',
          '#00ffff',
          '#ff00ff',
          '#ffffff',
          '#000000'
      ]
    }
  },
  methods: {
    confirm(color) {
      console.log('选择的颜色：', color);
    }
  }
}
</script>
```

## 示例演示页面源代码地址
<div class="custom-block tip">
  <p class="custom-block-title">点击以下链接以查看演示页面的源码</p> <br> <a
    href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/colorPicker/colorPicker.nvue"
    target="_blank" style="display:flex;align-items:center;"><img height="30"
      src="../../vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
      title="github" width="30"> github
  </a> <a href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/colorPicker/colorPicker.nvue"
    target="_blank" style="display:flex;align-items:center;margin-top:10px;"><img height="30"
      src="../../vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
      title="github" width="30"> gitee
  </a> <br>
</div>

## API

### Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定的颜色值，支持纯色和渐变色 | String | `#ff0000` | - |
| commonColors | 常用颜色列表 | Array | `[]` | - |

### Events
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 确认选择颜色时触发 | `color` (String) |
| close | 关闭选择器时触发 | - |

### Slot
| 名称 | 说明 |
| --- | --- |
| default | 触发颜色选择器的内容区域 |