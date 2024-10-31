import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Factories from '@/api'
import '../config/index.js'

const port = Number(process.env.PORT) || 3000
export const honoApi = new Factories({
  bootstrap(app) {
    serve({
      fetch: app.fetch,
      port
    })
  }
}).createApi()


console.log(`Server is running on http://localhost:${process.env.PORT}`)
