该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。


### API

### Steps Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|direction|row-横向，column-竖向|String|row|column|
|current|设置当前处于第几步|Number|String|0|
|activeColor|激活状态颜色|String|#3c9cff|\-|
|inactiveColor|未激活状态颜色|String|#969799|\-|
|activeIcon|激活状态的图标|String|\-|\-|
|inactiveIcon|未激活状态图标|String|\-|\-|
|dot|是否显示点类型|Boolean|false|true|

### Steps Item Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|title|标题文字|String|\-|\-|
|desc|描述文本|String|\-|\-|
|iconSize|图标大小|String|Number|17|
|error|当前步骤是否处于失败状态|Boolean|false|true|

### Slot

|名称|说明|
|---|---|
|\-|自定步骤状态内容|

上次更新时间: 2025/7/31 14:06:20