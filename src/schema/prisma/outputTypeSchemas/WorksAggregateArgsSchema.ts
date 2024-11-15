import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksWhereInputSchema } from '../inputTypeSchemas/WorksWhereInputSchema'
import { WorksOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorksOrderByWithRelationInputSchema'
import { WorksWhereUniqueInputSchema } from '../inputTypeSchemas/WorksWhereUniqueInputSchema'

export const WorksAggregateArgsSchema: z.ZodType<Prisma.WorksAggregateArgs> = z.object({
  where: WorksWhereInputSchema.optional(),
  orderBy: z.union([ WorksOrderByWithRelationInputSchema.array(),WorksOrderByWithRelationInputSchema ]).optional(),
  cursor: WorksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorksAggregateArgsSchema;
