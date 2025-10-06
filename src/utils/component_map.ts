/**
 * 组件配置接口
 * 
 * 用于定义 uview-plus 组件库中的组件配置信息，包含组件的标签名、模块路径、
 * 触发补全的字符以及文档来源等信息。
 */
interface ComponentConfig {
  /**
   * 组件的标签名，例如：'up-button'
   * 这是组件在模板中使用的标签名称
   */
  tag: string;
  
  /**
   * 可选，组件提供者模块的相对路径
   * 指向实现该组件智能提示功能的 TypeScript 模块
   */
  module?: string;
  
  /**
   * 可选，触发智能补全的字符数组
   * 定义用户输入哪些字符时应该触发该组件的代码补全
   */
  triggers?: string[];
  
  /**
   * 可选，文档来源文件名
   * 用于指定组件文档所在的 Markdown 文件名（不包含扩展名）
   */
  docSource?: string;
}

// 组件映射表
export const COMPONENT_MAP: ComponentConfig[] = [

  //  新增组件列表 24个

  { tag: "up-cate-tab" }, // CateTab 垂直TAB
  // { tag: "up-qrcode" }, // Qrcode 二维码
  // { tag: "up-table" }, // Table 表格
  // { tag: "up-table2" }, // Table 表格2
  // { tag: "up-pagination" }, // Pagination 分页器
  // { tag: "up-tree" }, // Tree 树形组件
  // { tag: "up-city-locate" }, // CityLocate 城市定位选择
  { tag: "up-title" }, // Title 标题
  // { tag: "up-dragsort" }, // Dragsort 拖拽排序
  // { tag: "up-pull-refresh" }, // PullRefresh 下拉刷新
  // { tag: "up-virtual-list" }, // VirtualList 虚拟列表
  // { tag: "u-barcode" }, // Barcode 条形码
  // { tag: "up-cropper" }, // Cropper 图片裁剪
  // { tag: "up-signature" }, // Signature 签名
  // { tag: "up-markdown" }, // Markdown 文本解析
  // { tag: "up-poster" }, // Poster 海报生成
  // { tag: "up-short-video" }, // ShortVideo 短视频
  // { tag: "up-color-picker" }, // ColorPicker 颜色选择器
  // { tag: "up-coupon" }, // Coupon 优惠券
  // { tag: "up-popover" }, // Popover 弹窗提示
  // { tag: "up-pdf-reader" }, // PDF阅读器
  // { tag: "up-goods-sku" }, // GoodsSku 商品规格选择
  // { tag: "up-cascader" }, // Cascader 级联选择器
  // { tag: "up-choose" }, // Choose 选择器

  // 基础组件列表 12个

  //  [Color 色彩](color.html)
  { tag: "up-icon" }, // Icon 图标
  { tag: "up-image" }, // Image 图片
  { tag: "up-button" }, // Button 按钮
  { tag: "up-text" }, // Text 文本
  { tag: "up-row", docSource: "layout" }, // Layout 布局
  { tag: "up-col", docSource: "layout" }, // Layout 布局
  { tag: "up-cell" }, // Cell 单元格
  { tag: "up-badge" }, // Badge 徽标数
  { tag: "up-tag" }, // Tag 标签
  { tag: "up-loading-icon" }, // LoadingIcon 加载动画
  { tag: "up-loading-page" }, // LoadingPage 加载页

  // 表单组件列表 21个

  { tag: "up-form", docSource: "form" }, // Form 表单
  { tag: "up-form-item", docSource: "form" }, // FormItem 表单项

  { tag: "up-calendar" }, // Calendar 日历
  { tag: "up-keyboard" }, // Keyboard 键盘
  { tag: "up-select" }, // Select 经典下拉框
  { tag: "up-picker" }, // Picker 选择器
  { tag: "up-cascader" }, // Cascader 级联选择器
  { tag: "up-choose" }, // Choose 选择器
  { tag: "up-datetime-picker" }, // DatetimePicker 选择器
  { tag: "up-rate" }, // Rate 评分
  { tag: "up-search" }, // Search 搜索
  { tag: "up-number-box" }, // NumberBox 步进器
  { tag: "up-upload" }, // Upload 上传
  { tag: "up-code" }, // Code 验证码输入框
  { tag: "up-input" }, // Input 输入框
  { tag: "up-textarea" }, // Textarea 文本域
  { tag: "up-checkbox-group", docSource: "checkbox" }, // Checkbox 复选框
  { tag: "up-checkbox", docSource: "checkbox" }, // Checkbox 复选框
  { tag: "up-radio-group", docSource: "radio" }, // Radio 单选框
  { tag: "up-radio", docSource: "radio" }, // Radio 单选框
  { tag: "up-switch" }, // Switch 开关选择器
  { tag: "up-slider" }, // Slider 滑动选择器
  { tag: "up-album" }, // Album 相册

  // 数据组件列表 7个

  { tag: "up-list", docSource: "list" }, // List 列表
  { tag: "up-list-item", docSource: "list" }, // ListItem 列表项
  { tag: "up-virtual-list" }, // VirtualList 虚拟列表
  { tag: "up-line-progress" }, // LineProgress 线形进度条
  { tag: "up-table", docSource: "table" }, // Table 表格
  { tag: "up-tr", docSource: "table" }, // Table 表格
  { tag: "up-th", docSource: "table" }, // Table 表格
  { tag: "up-td", docSource: "table" }, // Table 表格
  { tag: "up-table2" }, // Table 表格2
  { tag: "up-count-down" }, // CountDown 倒计时
  { tag: "up-count-to" }, // CountTo 数字滚动

  // 反馈组件列表 12个

  { tag: "up-tooltip" }, // Tooltip 长按提示
  { tag: "up-popover" }, // Popover 弹窗提示
  { tag: "up-action-sheet" }, // ActionSheet 操作菜单
  { tag: "up-alert" }, // Alert 警告提示
  { tag: "up-toast" }, // Toast 消息提示
  { tag: "up-notice-bar" }, // NoticeBar 滚动通知
  { tag: "up-notify" }, // Notify 消息提示
  { tag: "up-swipe-action", docSource: "swipeAction" }, // SwipeAction 滑动单元格 
  { tag: "up-swipe-action-item", docSource: "swipeAction" }, // SwipeActionItem 滑动单元格项
  { tag: "up-collapse" }, // Collapse 折叠面板
  { tag: "up-popup" }, // Popup 弹出层
  { tag: "up-modal" }, // Modal 模态框
  { tag: "up-copy" }, // Copy 复制

  // 布局组件列表 13个

  { tag: "up-scroll-list" }, // ScrollList 横向滚动列表
  { tag: "up-line" }, // Line 线条
  { tag: "up-card" }, // Card 卡片
  { tag: "up-overlay" }, // Overlay 遮罩层
  { tag: "up-no-network" }, // NoNetwork 无网络提示
  { tag: "up-grid" }, // Grid 宫格布局
  { tag: "up-swiper" }, // Swiper 轮播图
  { tag: "up-skeleton" }, // Skeleton 骨架屏
  { tag: "up-sticky" }, // Sticky 吸顶
  { tag: "up-waterfall" }, // Waterfall 瀑布流
  { tag: "up-box" }, // Box 盒子
  { tag: "up-divider" }, // Divider 分割线
  { tag: "up-dragsort" }, // Dragsort 拖拽排序

  // 导航组件列表 13个

  { tag: "up-dropdown", docSource: "dropdown" }, // Dropdown 下拉菜单
  { tag: "up-dropdown-item", docSource: "dropdown" }, // DropdownItem 下拉菜单项
  { tag: "up-tabbar", docSource: "tabbar" }, // Tabbar 底部导航栏
  { tag: "up-tabbar-item", docSource: "tabbar" }, // TabbarItem 底部导航栏项
  { tag: "up-back-top" }, // BackTop 返回顶部
  { tag: "up-navbar" }, // Navbar 自定义导航栏
  { tag: "up-navbar-mini" }, // NavbarMini 迷你导航栏
  { tag: "up-tabs" }, // Tabs 标签
  { tag: "up-subsection" }, // Subsection 分段器
  { tag: "up-index-list" }, // IndexList 索引列表
  { tag: "up-steps", docSource: "steps" }, // Steps 步骤条
  { tag: "up-steps-item", docSource: "steps" }, // StepsItem 步骤条项
  { tag: "up-empty" }, // Empty 内容为空
  { tag: "up-pagination" }, // Pagination 分页器
  { tag: "up-tree" }, // Tree 树形组件
  { tag: "up-city-locate" }, // CityLocate 城市定位选择

  // 其他组件列表 20个

  { tag: "up-parse" }, // Parse 富文本解析器
  { tag: "up-markdown" }, // Markdown 文本解析
  { tag: "up-code-input" }, // CodeInput 验证码输入
  { tag: "up-loadmore" }, // LoadMore 加载更多
  { tag: "up-read-more", docSource: "readMore" }, // ReadMore 展开阅读更多
  { tag: "rich-text", docSource: "readMore" }, // RichText 富文本
  { tag: "up-pull-refresh" }, // PullRefresh 下拉刷新
  { tag: "up-lazy-load" }, // LazyLoad 图片懒加载
  { tag: "up-gap" }, // Gap 间隔槽
  { tag: "up-avatar" }, // Avatar 头像
  { tag: "up-link" }, // Link 超链接
  { tag: "up-transition" }, // Transition 动画
  { tag: "up-qrcode" }, // Qrcode 二维码
  { tag: "u-barcode" }, // Barcode 条形码
  { tag: "up-cropper" }, // Cropper 图片裁剪
  { tag: "up-poster" }, // Poster 海报生成
  { tag: "up-short-video" }, // ShortVideo 短视频
  { tag: "up-color-picker" }, // ColorPicker 颜色选择器
  { tag: "up-coupon" }, // Coupon 优惠券
  { tag: "up-pdf-reader" }, // PDF阅读器
  { tag: "up-goods-sku" }, // GoodsSku 商品规格选择

];

// 默认触发字符
export const DEFAULT_TRIGGERS = ["<", " ", ":", '"', "'"];
