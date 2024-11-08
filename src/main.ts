import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Factories from '@/api'
import '../config/index.js'

const port = Number(process.env.PORT) || 3000

const app = new Hono()
const honoApi = new Factories(app).createApi()

console.log('ENV::',process.env.DATABASE_URL);
app.get('/', (c) => c.text('Hono App success!!!'))

serve({
  fetch: app.fetch,
  port
})

console.log(`Server is running on http://localhost:${process.env.PORT}`)
