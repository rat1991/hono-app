import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksWhereInputSchema } from '../inputTypeSchemas/WorksWhereInputSchema'
import { WorksOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorksOrderByWithAggregationInputSchema'
import { WorksScalarFieldEnumSchema } from '../inputTypeSchemas/WorksScalarFieldEnumSchema'
import { WorksScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorksScalarWhereWithAggregatesInputSchema'

export const WorksGroupByArgsSchema: z.ZodType<Prisma.WorksGroupByArgs> = z.object({
  where: WorksWhereInputSchema.optional(),
  orderBy: z.union([ WorksOrderByWithAggregationInputSchema.array(),WorksOrderByWithAggregationInputSchema ]).optional(),
  by: WorksScalarFieldEnumSchema.array(),
  having: WorksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorksGroupByArgsSchema;
