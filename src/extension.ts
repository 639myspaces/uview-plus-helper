import * as vscode from 'vscode';
import { registerAll } from './providers/index';

export async function activate(context: vscode.ExtensionContext) {
  console.log('🚀 uview-plus helper 插件已激活!');
  console.log('正在注册组件...');
  
  await registerAll(context);
  
  console.log('✅ uview-plus helper 插件注册完成!');
}
export async function deactivate() {
  console.log('🚫 uview-plus helper 插件已停用!');
}
