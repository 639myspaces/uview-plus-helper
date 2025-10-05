# ShortVideo 短视频 <span class="badge tip" style="vertical-align:top;">3.5.11</span>

短视频组件通常用于App中实现上下滑动切换短视频的功能，类似抖音等短视频应用的效果。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| tabsList | tabs标签列表 | Array | [ { name: '推荐' }, { name: '关注' }, { name: '朋友' }, { name: '本地' } ] | - |
| videoList | 视频列表数据 | Array | [] | - |
| currentTab | 当前选中的tab索引 | Number | 0 | - |
| currentVideo | 当前播放的视频索引 | Number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| tabChange | tab切换时触发 | index: 当前tab索引 |
| videoChange | 视频切换时触发 | index: 当前视频索引 |
| like | 点赞时触发 | { item, index } |
| comment | 评论时触发 | { item, index } |
| share | 分享时触发 | { item, index } |
| collect | 收藏时触发 | { item, index } |
| progressChanging | 进度条拖动中触发 | { progress, index } |
| progressChange | 进度条值改变时触发 | { progress, index } |
| videoPlay | 视频播放时触发 | { index, event } |
| videoPause | 视频暂停时触发 | { index, event } |
| videoEnded | 视频结束时触发 | { index, event } |
| timeUpdate | 视频时间更新时触发 | { index, event } |
| loadedMetadata | 视频元数据加载完成时触发 | { index, event } |

### Slot

| 名称 | 说明 |
| --- | --- |
| menu | 顶部菜单区域 |
| search | 顶部搜索区域 |
| actions | 右侧操作区域 |
| tabbar | 底部导航栏区域 |