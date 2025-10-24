#### 优点：

此组件提供了自定义 tabbar 的能力，具有如下特点：

-   图标可以使用字体图标(内置图标和扩展图标)或者图片
-   可以动态切换菜单的数量以及配置
-   切换菜单之前，可以进行回调鉴权
-   可以设置角标或数字化提示
-   有效防止组件区域高度塌陷，无需给父元素额外的内边距或者外边距来避开导航的区域


### API

### TabBar Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|value|当前匹配项的 name|String|Number|null|
|safeAreaInsetBottom|是否为 iPhoneX 留出底部安全距离，注意：胶囊模式不支持|Boolean|true|false|
|border|是否显示上方边框|Boolean|true|false|
|borderColor|边框颜色|String|\-|\-|
|bgColor|背景颜色|String|#ffffff|\-|
|zIndex|元素层级 z-index|String|Number|1|
|activeColor|选中标签的颜色|String|#1989fa|\-|
|inactiveColor|未选中标签的颜色|String|#7d7e80|\-|
|fixed|是否固定在底部|Boolean|true|false|
|placeholder|fixed 定位固定在底部时，是否生成一个等高元素防止塌陷|Boolean|true|false|
|shape|标签栏的形状|String|normal|normal, circle|
|height|标签栏的高度|String|Number|50|
|fit|是否自适应宽度|Boolean|false|true|
|bottom|胶囊标签栏底部边距|String|Number|\-|
|mode|标签模式|String|normal|normal, tag|

### TabBarItem Props

|参数|说明|类型|默认值|可选值|
|---|---|---|---|---|
|name|item 标签的名称，作为与 u-tabbar 的 value 参数匹配的标识符|String|Number|null|
|icon|uView 内置图标或者绝对路径的图片|String|\-|\-|
|iconSize|图标大小|String|Number|20|
|iconBgColor|图标背景颜色，仅中间凸起按钮有效|String|theme.primary|\-|
|iconColor|图标颜色 ，仅中间凸起按钮有效|String|#fff|\-|
|badge|右上角的角标提示信息|String|Number|null|
|dot|是否显示圆点，将会覆盖 badge 参数|Boolean|false|true|
|text|描述文本|String|\-|\-|
|badgeStyle|控制徽标的位置，对象或者字符串形式，可以设置 top 和 right 属性|Object|String|'top: 6px;right:2px;'|
|middle|是否为中间凸起按钮|Boolean|false|true|
|url|点击后跳转的URL地址|String|\-|\-|
|linkType|链接跳转的方式|String|redirectTo|navigateTo,switchTab,reLaunch|

### TabBarItem Events

|事件名|说明|回调参数|
|---|---|---|
|change|切换选项时触发|index：当前要切换项的 name|
|click|切换选项时触发|index：当前要切换项的 name|

### Methods

|方法名|说明|
|---|---|
|getRect|获取当前tabbar节点信息，包括height,width,bottom,top,left,right等|

上次更新时间: 2025/9/11 13:27:54