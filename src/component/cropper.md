# Cropper 图片裁剪 📎 3.4.85

图片裁剪组件，支持手势操作、旋转、缩放、裁剪等功能，适用于头像裁剪等场景。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----|-----|-----|-----|-----|
| canChangeSize | 是否允许调整裁剪区域大小 | boolean | false | true/false |
| areaWidth | 裁剪区域宽度 | string | 300rpx | - |
| areaHeight | 裁剪区域高度 | string | 300rpx | - |
| exportWidth | 导出图片宽度 | string | 260rpx | - |
| exportHeight | 导出图片高度 | string | 260rpx | - |
| minScale | 最小缩放比例 | number | 0.3 | - |
| maxScale | 最大缩放比例 | number | 4 | - |
| canScale | 是否允许缩放 | boolean | true | true/false |
| canRotate | 是否允许旋转 | boolean | true | true/false |
| quality | 图片质量 | number | 0.9 | 0-1 |
| noTab | 是否隐藏底部操作栏 | boolean | true | true/false |

### Events

| 事件名 | 说明 | 回调参数 |
|-----|-----|-----|
| confirm | 裁剪完成时触发 | { avatar, path, index, data } |
| avtinit | 组件初始化完成时触发 | - |

### Slots

| 名称 | 说明 |
|-----|-----|
| default | 触发裁剪的元素，点击该插槽内容时会打开裁剪界面 |

### 方法

| 方法名 | 说明 | 参数 |
|-----|-----|-----|
| chooseImage | 打开图片选择器并开始裁剪 | (index, params, data)<br>index: 索引标识<br>params: 配置参数对象<br>data: 自定义数据 |
| close | 关闭裁剪界面 | - |
| rotate | 旋转图片 | - |
| preview | 预览裁剪结果 | - |