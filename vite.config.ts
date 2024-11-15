import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import build from '@hono/vite-build/node'
import path from 'node:path'

export default defineConfig({
  plugins: [
    devServer({
      entry: 'src/main.ts',
      // Cloudflare Adapter
      // adapter,
    }),
    build({
      entry: './src/main.ts',
      output: 'server.js',
      outputDir: './dist',
      external: [
        'prisma',
        "@prisma/client"
      ],
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '~': path.join(__dirname, '')
    },
  },
})