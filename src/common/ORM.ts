import { PrismaClient } from '@prisma/client';
import type { MiddlewareHandler } from 'hono/types';
import { createMiddleware } from 'hono/factory';

const prisma = new PrismaClient({
  omit: {
    users: {
      password: true
    }
  },
  log: [
    {
      emit: 'stdout',
      level: 'query'
    }
  ]
});
if (process.env.NODE_ENV !== 'production') {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: typeof prisma;
  };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = prisma
  }
}

export const middlewarePrisma = createMiddleware<{
  Variables: {
    prisma: typeof prisma;
  }
}>(async (ctx, next) => {
  ctx.set('prisma', prisma)
  await next();
})

export default prisma;