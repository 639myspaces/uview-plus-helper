/**
 * uview-plus-helper VS Code 扩展的主入口文件
 * 负责扩展的激活和停用生命周期管理，以及组件相关功能的注册
 */
import * as vscode from 'vscode';
import { registerAll } from './providers/index';

/**
 * VS Code 扩展激活函数
 * 当扩展被激活时（首次加载扩展或编辑器启动时）调用
 * @param context VS Code 扩展上下文，包含扩展的订阅、存储等功能
 * @returns Promise<void> 激活过程的异步结果
 */
export async function activate(context: vscode.ExtensionContext) {
  // 记录扩展激活日志
  console.log('🚀 uview-plus 提示助手 已激活!');
  
  // 开始注册组件相关功能
  console.log('正在注册组件...');
  
  // 调用统一的注册函数，注册所有组件提供者
  await registerAll(context);
  
  // 记录注册完成日志
  console.log('✅ uview-plus 提示助手 注册完成!');
}

/**
 * VS Code 扩展停用函数
 * 当扩展被停用时（编辑器关闭或手动禁用扩展时）调用
 * @returns Promise<void> 停用过程的异步结果
 * @note 当前实现仅记录日志，无实际清理操作
 */
export async function deactivate() {
  // 记录扩展停用日志
  console.log('🚫 uview-plus 提示助手  已停用!');
}
