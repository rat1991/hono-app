import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'
import { UsersOrderByWithRelationInputSchema } from '../inputTypeSchemas/UsersOrderByWithRelationInputSchema'
import { UsersWhereUniqueInputSchema } from '../inputTypeSchemas/UsersWhereUniqueInputSchema'

export const UsersAggregateArgsSchema: z.ZodType<Prisma.UsersAggregateArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithRelationInputSchema.array(),UsersOrderByWithRelationInputSchema ]).optional(),
  cursor: UsersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UsersAggregateArgsSchema;
