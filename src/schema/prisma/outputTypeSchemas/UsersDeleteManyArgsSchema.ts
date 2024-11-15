import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'

export const UsersDeleteManyArgsSchema: z.ZodType<Prisma.UsersDeleteManyArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
}).strict() ;

export default UsersDeleteManyArgsSchema;
