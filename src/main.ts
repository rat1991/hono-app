import { serve } from '@hono/node-server'
import { Hono, type Env } from 'hono'
import useApiModule from '@/api'
import prisma, { middlewarePrisma } from '@/common/ORM'

export interface HonoEnv extends Env {
  HOST: string
  PORT: string
  Variables: {
    prisma: typeof prisma
  }
}
export type AppHono = Hono<HonoEnv>

const app:AppHono = new Hono()

app.use(middlewarePrisma)
await useApiModule(app)
app.get('/', (c) => c.text('Hono App success!!!'))

// 只在生产环境使用 node-server
if (process.env.NODE_ENV === 'production') {
  const port = Number(process.env.PORT) || 3300
  serve({
    fetch: app.fetch,
    port
  })

  console.log(`
    Hono App is successfully started.
    Server is running on http://localhost:${port}  
  `)
}

export default app