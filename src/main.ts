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

const port = Number(process.env.PORT) || 3300
const app:AppHono = new Hono()

app.use(middlewarePrisma)
useApiModule(app)
app.get('/', (c) => c.text('Hono App success!!!'))

serve({
  fetch: app.fetch,
  port
})

console.log(`
  Hono App is successfully started.
  Server is running on http://localhost:${port}  
`)

export default app