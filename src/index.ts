import { serve } from '@hono/node-server'
import { Hono } from 'hono'
process.env.NODE_ENV = 'development'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000
console.log(`Server is running on http://localhost:${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port
})
