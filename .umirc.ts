import { defineConfig } from '@umijs/max';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  chainWebpack: (memo) => {
    // 更多配置 https://github.com/Microsoft/monaco-editor-webpack-plugin#options
    memo.plugin('monaco-editor-webpack-plugin').use(MonacoWebpackPlugin);
    return memo;
  },
  mfsu: false,
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'npm',
});
