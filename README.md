# remove_version

## 简介

用于删除项目中打包后 `/dist/index.html` 显示的 umi 版本信息。

## 使用

```
yarn add @alitajs/remove_version

or

npm install @alitajs/remove_version
```

`config/config.ts` 或 `/umirc.ts`：

```js
import { defineConfig } from 'alita';

export default defineConfig({
  ... // 此处隐藏部分内容
  plugins: ['@alitajs/remove_version'],
});
```
