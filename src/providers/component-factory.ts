// 导入VSCode API模块，用于实现代码补全和悬停提示等功能
import * as vscode from "vscode";
// 导入组件元数据接口，定义组件的属性、事件等结构
import { ComponentMeta } from "../utils/schema-loader";
// 导入基础组件悬停提供者类，用于扩展悬停提示功能
import { ComponentHoverProvider } from "./../utils/index";
// 导入组件映射表，包含所有支持的组件配置信息
import { COMPONENT_MAP } from "../utils/component_map";
// 导入组件模式加载函数，用于加载组件的元数据
import { loadComponentSchema } from "../utils/schema-loader";

/**
 * 通用组件悬停提供者
 * 负责为组件提供悬停时显示的文档信息
 */
export class GenericComponentHoverProvider extends ComponentHoverProvider {
  /** 组件名称 */
  protected componentName: string;
  /** 组件元数据，包含组件的属性、事件等信息 */
  protected componentMeta: ComponentMeta;

  /**
   * 构造函数
   * @param componentName 组件名称（包含up-前缀）
   * @param componentMeta 组件元数据对象
   */
  constructor(componentName: string, componentMeta: ComponentMeta) {
    super();
    this.componentName = componentName;
    this.componentMeta = componentMeta;
  }
}

/**
 * 统一的组件补全提供者
 * 实现了VSCode的CompletionItemProvider接口，为所有组件提供智能代码补全功能
 * 支持组件标签补全、属性补全、事件补全等
 */
export class UnifiedComponentCompletionProvider
  implements vscode.CompletionItemProvider
{
  /** 组件映射表，保存组件名称到元数据的映射关系 */
  private componentMap: Map<string, any> = new Map();

  /**
   * 构造函数
   * 初始化所有组件的元数据并存储到componentMap中
   */
  constructor() {
    // 遍历组件映射表，为每个组件加载元数据
    for (const { tag, docSource } of COMPONENT_MAP) {
      try {
        // 提取组件名称（去掉up-或u-前缀）
        const componentName = tag.replace("u-", "");
        // 加载组件的元数据，包含属性、事件等信息
        const componentMeta = loadComponentSchema(componentName, docSource);
        // 存储原始标签名和组件名（支持不带前缀的形式）
        this.componentMap.set(tag, componentMeta);
        this.componentMap.set(componentName, componentMeta); // 同时支持驼峰式
      } catch (error) {
        console.error(`加载 ${tag}失败:`, error);
      }
    }
  }

  /**
   * VSCode智能补全接口实现
   * 根据当前编辑上下文提供相应的代码补全项
   * 
   * @param document 当前编辑的文档对象
   * @param position 光标位置
   * @returns 补全项数组或null/undefined
   */
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.ProviderResult<vscode.CompletionItem[]> {
    // 获取光标所在行的前缀文本
    const linePrefix = document
      .lineAt(position)
      .text.substring(0, position.character);

    // 1. 检查是否是标签补全上下文（如 <up-bu）
    const tagCompletionMatch = linePrefix.match(/<([a-zA-Z0-9-]*)$/);
    if (tagCompletionMatch) {
      // 提取已输入的标签前缀并提供标签补全
      return this.provideTagCompletionItems(tagCompletionMatch[1] || "");
    }

    // 2. 检查是否是属性补全上下文
    const currentTagName = this.getCurrentTagName(document, position);
    if (currentTagName) {
      // 尝试匹配完整标签名（支持up-button或button等多种形式）
      const componentMeta = 
        this.componentMap.get(currentTagName) ||
        this.componentMap.get(`u-${currentTagName}`) ||
        this.componentMap.get(currentTagName.replace(/^u-/, ""));
      if (componentMeta) {
        // 提供该组件的属性、事件等补全项
        return this.provideAttributeCompletionItems(
          componentMeta,
          document,
          position
        );
      }
    }
    // 没有匹配到任何补全上下文时返回空数组
    return [];
  }

  /**
   * 提供组件标签的补全项
   * 根据用户输入的前缀过滤并返回匹配的组件标签
   * 
   * @param filter 用户已输入的标签前缀
   * @returns 匹配的标签补全项数组
   */
  private provideTagCompletionItems(filter: string): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];

    // 遍历所有注册的组件
    for (const [tagName, componentMeta] of this.componentMap.entries()) {
      // 只处理 up- 或 u- 前缀的标签名，并根据filter过滤
      if (tagName.startsWith("u-") && (!filter || tagName.includes(filter))) {
        // 创建补全项
        const item = new vscode.CompletionItem(
          tagName,
          vscode.CompletionItemKind.Class
        );
        // 设置文档信息
        item.documentation = new vscode.MarkdownString(
          componentMeta.documentation
        );
        item.documentation.isTrusted = true;
        // 设置插入文本为完整的标签对，并在中间留光标位置
        item.insertText = new vscode.SnippetString(
          `${tagName}$0></${tagName}>`
        );
        // 设置标签显示信息
        item.label = {
          label: tagName,
          description: "uView Next 助手",
        };
        // 设置排序优先级，使其在补全列表顶部显示
        item.sortText = "0";
        item.preselect = true;
        item.kind = vscode.CompletionItemKind.Snippet;
        // 设置插入后触发新的补全提示
        item.command = {
          command: "editor.action.triggerSuggest",
          title: "",
        };
        items.push(item);
      }
    }
    return items;
  }

  /**
   * 提供组件属性、事件和外部样式类的补全项
   * 根据组件元数据生成相应的补全信息
   * 
   * @param componentMeta 组件元数据对象
   * @param document 当前编辑的文档对象
   * @param position 光标位置
   * @returns 属性、事件和样式类的补全项数组
   */
  private provideAttributeCompletionItems(
    componentMeta: any,
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] {
    // 检查是否在属性上下文中（如在标签内）
    if (!this.isInAttributeContext(document, position)) {
      return [];
    }

    const items: vscode.CompletionItem[] = [];

    // 静态属性补全
    componentMeta.props.forEach((prop: any) => {
      // 将驼峰式属性名转换为短横线式（例如：modelValue -> model-value）
      const kebabName = prop.name.replace(/([A-Z])/g, "-$1").toLowerCase();
      const kebabItem = new vscode.CompletionItem(
        kebabName,
        vscode.CompletionItemKind.Property
      );
      // 生成属性文档信息
      let mdContent = this.generateDocumentation(componentMeta, prop);
      kebabItem.documentation = new vscode.MarkdownString(mdContent);
      kebabItem.documentation.isTrusted = true;
      // 根据属性类型设置不同的插入文本
      if (prop.type === "enum") {
        // 枚举类型提供值选项
        kebabItem.insertText = new vscode.SnippetString(
          `${kebabName}="\${1|${prop.values!.join(",")}|}"`
        );
      } else if (prop.type === "boolean") {
        // 布尔类型提供true/false选项
        kebabItem.insertText = new vscode.SnippetString(
          `${kebabName}="\${1|true,false|}"`
        );
      } else {
        // 其他类型提供普通属性格式
        kebabItem.insertText = new vscode.SnippetString(`${kebabName}="$1"`);
      }
      // 设置标签显示信息
      kebabItem.label = {
        label: kebabName,
        description: "Props uView Next",
      };
      // 设置排序优先级
      kebabItem.sortText = "0";
      kebabItem.preselect = true;
      kebabItem.kind = vscode.CompletionItemKind.Snippet;
      // 设置插入后触发新的补全提示
      kebabItem.command = {
        command: "editor.action.triggerSuggest",
        title: "",
      };
      items.push(kebabItem);
    });

    // 事件补全
    componentMeta.events?.forEach((event: any) => {
      // 生成事件文档信息
      let mdContent = this.generateDocumentation(componentMeta, event);

      // 提供驼峰式事件补全（如 @click）
      const eventItem = new vscode.CompletionItem(
        `@${event.name}`,
        vscode.CompletionItemKind.Event
      );
      eventItem.documentation = new vscode.MarkdownString(mdContent);
      eventItem.documentation.isTrusted = true;
      eventItem.insertText = new vscode.SnippetString(`@${event.name}="$1"`);
      items.push(eventItem);

      // 提供短横线式事件补全（如 @click-event）
      const kebabEventName = event.name
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase();
      const kebabEventItem = new vscode.CompletionItem(
        `@${kebabEventName}`,
        vscode.CompletionItemKind.Event
      );
      kebabEventItem.documentation = new vscode.MarkdownString(mdContent);
      kebabEventItem.documentation.isTrusted = true;
      kebabEventItem.insertText = new vscode.SnippetString(
        `@${kebabEventName}="$1"`
      );
      kebabEventItem.label = {
        label: `@${kebabEventName}`,
        description: "Events uView Next",
      };
      kebabEventItem.sortText = "0";
      kebabEventItem.preselect = true;
      kebabEventItem.kind = vscode.CompletionItemKind.Snippet;
      kebabEventItem.command = {
        command: "editor.action.triggerSuggest",
        title: "",
      };
      items.push(kebabEventItem);
    });

    // 自定义样式类补全
    componentMeta.externalClasses?.forEach((externalClass: any) => {
      // 将驼峰式样式名转换为短横线式（例如：customClass -> custom-class）
      const kebabClassName = externalClass.name
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase();
      const kebabClassItem = new vscode.CompletionItem(
        `${kebabClassName}`,
        vscode.CompletionItemKind.Property
      );
      // 生成样式类文档信息
      let mdContent = this.generateDocumentation(componentMeta, externalClass);
      kebabClassItem.documentation = new vscode.MarkdownString(mdContent);
      kebabClassItem.documentation.isTrusted = true;
      kebabClassItem.insertText = new vscode.SnippetString(
        `${kebabClassName}="$1"`
      );
      kebabClassItem.label = {
        label: `${kebabClassName}`,
        description: "uView Next 提示助手4",
      };
      kebabClassItem.sortText = "0";
      kebabClassItem.preselect = true;
      kebabClassItem.kind = vscode.CompletionItemKind.Snippet;
      kebabClassItem.command = {
        command: "editor.action.triggerSuggest",
        title: "",
      };
      items.push(kebabClassItem);
    });

    return items;
  }

  /**
   * 获取光标所在位置的组件标签名
   * 通过分析文档内容，查找光标位置所在的未闭合标签
   * 
   * @param document 当前编辑的文档对象
   * @param position 光标位置
   * @returns 标签名字符串或null（如果不在标签内）
   */
  private getCurrentTagName(
    document: vscode.TextDocument,
    position: vscode.Position
  ): string | null {
    // 获取从文档开始到光标位置的所有文本
    const textBeforeCursor = document.getText(
      new vscode.Range(new vscode.Position(0, 0), position)
    );

    // 从光标位置向前查找最近的未闭合标签
    let tagStartIndex = -1;  // 记录标签开始的索引（< 字符的位置）
    let tagEndIndex = -1;    // 记录标签结束的索引（> 字符的位置）

    // 从后向前查找最近的 < 和 >
    for (let i = textBeforeCursor.length - 1; i >= 0; i--) {
      const char = textBeforeCursor[i];
      if (char === ">") {
        tagEndIndex = i;
        break;
      } else if (char === "<") {
        tagStartIndex = i;
        break;
      }
    }

    // 如果找到了开始标签但没有找到结束标签，说明光标在标签内部
    if (
      tagStartIndex !== -1 &&
      (tagEndIndex === -1 || tagEndIndex < tagStartIndex)
    ) {
      // 提取标签内容并获取标签名
      const tagContent = textBeforeCursor.substring(tagStartIndex + 1);
      const tagNameMatch = tagContent.match(/^([a-zA-Z0-9-]+)/);
      if (tagNameMatch) {
        return tagNameMatch[1];
      }
    }

    return null;
  }

  /**
   * 判断光标是否在标签的属性上下文中
   * 用于确定是否应该触发属性补全
   * 
   * @param document 当前编辑的文档对象
   * @param position 光标位置
   * @returns 如果在属性上下文中返回true，否则返回false
   */
  private isInAttributeContext(
    document: vscode.TextDocument,
    position: vscode.Position
  ): boolean {
    // 获取从文档开始到光标位置的所有文本
    const textBeforeCursor = document.getText(
      new vscode.Range(new vscode.Position(0, 0), position)
    );

    // 从光标位置向前查找最近的未闭合标签
    let tagStartIndex = -1;  // 记录标签开始的索引（< 字符的位置）
    let tagEndIndex = -1;    // 记录标签结束的索引（> 字符的位置）

    // 从后向前查找最近的 < 和 >
    for (let i = textBeforeCursor.length - 1; i >= 0; i--) {
      const char = textBeforeCursor[i];
      if (char === ">") {
        tagEndIndex = i;
        break;
      } else if (char === "<") {
        tagStartIndex = i;
        break;
      }
    }

    // 如果找到了开始标签但没有找到结束标签，说明光标在标签内部
    if (
      tagStartIndex !== -1 &&
      (tagEndIndex === -1 || tagEndIndex < tagStartIndex)
    ) {
      // 检查标签内的引号是否闭合，避免在属性值内部触发补全
      const textInTag = textBeforeCursor.substring(tagStartIndex);
      const quoteCount = (textInTag.match(/["']/g) || []).length;

      // 还需要检查当前位置是否在属性值内部
      const textFromTagStart = textBeforeCursor.substring(tagStartIndex);
      const lastEqualsIndex = textFromTagStart.lastIndexOf("="); // 最后一个等号的位置
      const lastQuoteIndex = Math.max(
        textFromTagStart.lastIndexOf('"'),
        textFromTagStart.lastIndexOf("'")
      ); // 最后一个引号的位置

      // 如果等号在引号之后，说明光标不在属性值内部
      if (lastEqualsIndex > lastQuoteIndex) {
        return quoteCount % 2 === 1; // 等号后缺少闭合引号，表示正在输入属性值
      }

      // 引号数量为偶数表示引号闭合，适合触发属性补全
      return quoteCount % 2 === 0;
    }

    return false;
  }
  /**
   * 生成组件属性或事件的Markdown文档
   * @param componentMeta 组件元数据，包含组件的基本信息
   * @param item 组件属性或事件对象，包含名称、描述、类型等信息
   * @returns 格式化的Markdown文档字符串，包含组件名称、属性/事件类型、描述、版本和文档链接
   */
  private generateDocumentation(componentMeta: any, item: any): string {
    const comLinkName =
      COMPONENT_MAP.find((item) => item.tag === componentMeta.name)
        ?.docSource || componentMeta.name.replace("u-", "");
    const link = `http://118.25.198.98/components//${comLinkName}.html`;

    return [
    ` _${componentMeta.name}_\n\n`,
    `🏷️ 类型: ${item.type || "string"}\n\n`,
    `📝 描述: ${item.description || "-"}\n\n`,
    `📌 版本: ${item.version || "-"}\n\n`,
    `🔗 [查看文档](${link})`,
  ].join("");
  }
}
