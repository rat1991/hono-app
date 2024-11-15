import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'
import { UsersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UsersOrderByWithAggregationInputSchema'
import { UsersScalarFieldEnumSchema } from '../inputTypeSchemas/UsersScalarFieldEnumSchema'
import { UsersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UsersScalarWhereWithAggregatesInputSchema'

export const UsersGroupByArgsSchema: z.ZodType<Prisma.UsersGroupByArgs> = z.object({
  where: UsersWhereInputSchema.optional(),
  orderBy: z.union([ UsersOrderByWithAggregationInputSchema.array(),UsersOrderByWithAggregationInputSchema ]).optional(),
  by: UsersScalarFieldEnumSchema.array(),
  having: UsersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UsersGroupByArgsSchema;
