# CityLocate 城市定位选择 <Badge type="tip" text="3.4.55" vertical="top" />

`city-locate` 是一个城市定位与选择组件，集成了城市定位、热门城市展示和城市列表索引功能，适用于需要城市选择功能的场景。

## API

### Props 属性

| 属性名 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| indexList | 索引列表，用于右侧字母导航 | Array | `['城市']` | - |
| cityList | 城市数据列表，数组第一项为热门城市 | Array | `[[{name: '北京', value: 'beijing'}, ...]]` | - |
| locationType | 定位类型 | String | `'wgs84'` | `gcj02` 等 |
| currentCity | 当前城市名称（外部传入） | String | `''` | - |
| nameKey | 城市对象中用于显示名称的键名 | String | `'name'` | - |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| location-success | 定位成功时触发 | `{...res, locationCity: string}` |
| select-city | 用户选择城市时触发 | `{locationCity: string}` |

### Slots 插槽

| 插槽名 | 说明 |
| :--- | :--- |
| header | 组件顶部自定义内容 |
| footer | 组件底部自定义内容 |

## 基本使用

```html
<template>
  <up-city-locate 
    :indexList="['热', 'A', 'B']"
    :cityList="cityData"
    @location-success="handleLocation"
    @select-city="handleSelectCity"
  />
</template>
```

### Composition API 示例

```js
<script setup>
import { ref } from 'vue';

const cityData = ref([
  // 热门城市
  [
    { name: '北京', value: 'beijing' },
    { name: '上海', value: 'shanghai' }
  ],
  // A字母城市
  [
    { name: '安庆', value: 'anqing' },
    { name: '安阳', value: 'anyang' }
  ]
]);

const handleLocation = (res) => {
  console.log('定位结果:', res);
};

const handleSelectCity = (city) => {
  console.log('选中城市:', city);
};
</script>
```

### Options API 示例

```js
<script>
export default {
  data() {
    return {
      cityData: [
        // 热门城市
        [
          { name: '北京', value: 'beijing' },
          { name: '上海', value: 'shanghai' }
        ],
        // A字母城市
        [
          { name: '安庆', value: 'anqing' },
          { name: '安阳', value: 'anyang' }
        ]
      ]
    }
  },
  methods: {
    handleLocation(res) {
      console.log('定位结果:', res);
    },
    handleSelectCity(city) {
      console.log('选中城市:', city);
    }
  }
};
</script>
```

## 组件特性

- **自动定位**：组件加载后自动获取用户当前位置
- **热门城市展示**：支持自定义热门城市列表
- **字母索引**：支持右侧字母导航快速定位
- **自定义数据结构**：灵活适配不同后端数据格式
- **多平台支持**：兼容uni-app所有平台

## 使用示例

### 自定义数据结构

```html
<template>
  <up-city-locate 
    :cityList="customData"
    nameKey="cityName"
  />
</template>
```

#### Composition API

```js
<script setup>
import { ref } from 'vue';

const customData = ref([
  [
    { cityName: '北京', value: 'beijing' },
    { cityName: '上海', value: 'shanghai' }
  ]
]);
</script>
```

#### Options API

```js
<script>
export default {
  data() {
    return {
      customData: [
        [
          { cityName: '北京', value: 'beijing' },
          { cityName: '上海', value: 'shanghai' }
        ]
      ]
    }
  }
};
</script>
```

### 外部控制当前城市

```html
<template>
  <up-city-locate 
    :currentCity="userCity"
  />
</template>
```

#### Composition API

```js
<script setup>
import { ref } from 'vue';

const userCity = ref('北京');
</script>
```

#### Options API

```js
<script>
export default {
  data() {
    return {
      userCity: '北京'
    }
  }
};
</script>
```

### 设置定位类型

```html
<template>
  <up-city-locate 
    locationType="gcj02"
  />
</template>
```

#### Composition API

```js
<script setup>
import { ref } from 'vue';
// 组件将使用 gcj02 定位类型
</script>
```

#### Options API

```js
<script>
export default {
  data() {
    return {
      // 组件将使用 gcj02 定位类型
    }
  }
};
</script>
```

### 监听定位结果

```html
<template>
  <up-city-locate 
    @location-success="handleLocationResult"
  />
</template>
```

#### Composition API

```js
<script setup>
const handleLocationResult = (res) => {
  console.log('定位结果:', res);
};
</script>
```

#### Options API

```js
<script>
export default {
  methods: {
    handleLocationResult(res) {
      console.log('定位结果:', res);
    }
  }
};
</script>
```


## 注意事项

1. 组件会在 mounted 生命周期自动触发定位功能
2. 定位失败时会显示"定位失败，请点击重试"，用户可以点击重试
3. 城市列表数据结构：
   - 第一维数组：字母分类
   - 第二维数组：该分类下的城市列表
   - 第一项（index=0）为热门城市

## 常见问题

### 如何获取用户选择的城市？

通过监听 `select-city` 事件获取用户选择的城市：

#### Composition API

```js
<script setup>
const handleSelectCity = (city) => {
  console.log('用户选择的城市:', city.locationCity);
}
</script>
```

#### Options API

```js
<script>
export default {
  methods: {
    handleSelectCity(city) {
      console.log('用户选择的城市:', city.locationCity);
    }
  }
}
</script>
```

### 定位不准确怎么办？

1. 尝试更换定位类型：`locationType="gcj02"`
2. 确保用户已授权定位权限
3. 在失败回调中提供手动选择功能

### 如何自定义热门城市？

通过 `cityList` 属性传入第一个数组就是热门城市列表：

#### Composition API

```js
<script setup>
import { ref } from 'vue';

const cityList = ref([[
  { name: '北京', value: 'beijing' },
  { name: '上海', value: 'shanghai' },
  { name: '广州', value: 'guangzhou' }
]]);
</script>
```

#### Options API

```js
<script>
export default {
  data() {
    return {
      cityList: [[
        { name: '北京', value: 'beijing' },
        { name: '上海', value: 'shanghai' },
        { name: '广州', value: 'guangzhou' }
      ]]
    }
  }
}
</script>
```