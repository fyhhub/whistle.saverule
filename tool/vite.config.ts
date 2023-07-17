import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import VitePluginStyleInject from 'vite-plugin-style-inject';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  build: {
    target: 'es6',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        dir: path.resolve(__dirname, './dist'),
        globals: {
          vue: 'WhistleVue',
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['umd'],
      fileName: 'whistleSaveRule',
      name: 'whistleSaveRule',
    }
  },
  plugins: [
    vue({
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    VitePluginStyleInject(),
    {
      name: 'xxx',
      writeBundle() {
        fs.writeFileSync(path.resolve(__dirname, '../_values.txt'), JSON.stringify({
          'whistle.saverule/vue.js': `<script src="http://local.whistlejs.com/plugin.saverule/vue.min.js"></script>`,
          'whistle.saverule/index.js': `<script src="http://local.whistlejs.com/plugin.saverule/whistleSaveRule.umd.js"></script>`,
          'security': `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`
        }, null, 2))
      }
    }
  ],
})
