import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import nodeAdapter from '@hono/vite-dev-server/node'
import build from '@hono/vite-build/node'
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'node:path'

const port = Number(process.env.PORT) ?? 3300
export default defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: (i) => `__tla_${i}`
    }),
    devServer({
      entry: 'src/main.ts',
      adapter: nodeAdapter,
      // Cloudflare Adapter
      // adapter,
    }),
    build({
      entry: './src/main.ts',
      output: 'server.js',
      outputDir: './dist',
      external: [
        'prisma',
        "@prisma/client",
      ],
      minify: false,
      
    })
  ],
  build: {
    // 添加构建入口配置
    rollupOptions: {
      input: './src/main.ts'
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '~': path.join(__dirname, '')
    },
  },
})