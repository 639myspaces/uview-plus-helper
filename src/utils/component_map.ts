interface ComponentConfig {
  tag: string;
  module?: string;
  triggers?: string[];
  docSource?: string; // 添加文档来源字段
}

// 组件映射表
export const COMPONENT_MAP: ComponentConfig[] = [
  { tag: "up-button" },
  { tag: "up-text" },

  { tag: "up-cate-tab" },
  { tag: "up-qrcode" },
  { tag: "up-table" },
  { tag: "up-tr" },
  { tag: "up-th" },
  { tag: "up-td" },
  { tag: "u-table2" },
  { tag: "up-pagination" },
  { tag: "up-tree" },
  { tag: "up-city-locate" },
  { tag: "u-title" },
  { tag: "up-dragsort" },
  { tag: "up-pull-refresh" },
  { tag: "up-virtual-list" },
  { tag: "u-barcode" },
  { tag: "up-cropper" },
  { tag: "up-signature" },
  { tag: "up-markdown" },
  { tag: "up-poster" },
];

// 默认触发字符
export const DEFAULT_TRIGGERS = ["<", " ", ":", '"', "'"];
