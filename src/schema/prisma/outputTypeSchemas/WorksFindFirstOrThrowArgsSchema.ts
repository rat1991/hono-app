import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksWhereInputSchema } from '../inputTypeSchemas/WorksWhereInputSchema'
import { WorksOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorksOrderByWithRelationInputSchema'
import { WorksWhereUniqueInputSchema } from '../inputTypeSchemas/WorksWhereUniqueInputSchema'
import { WorksScalarFieldEnumSchema } from '../inputTypeSchemas/WorksScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorksSelectSchema: z.ZodType<Prisma.WorksSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const WorksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WorksFindFirstOrThrowArgs> = z.object({
  select: WorksSelectSchema.optional(),
  where: WorksWhereInputSchema.optional(),
  orderBy: z.union([ WorksOrderByWithRelationInputSchema.array(),WorksOrderByWithRelationInputSchema ]).optional(),
  cursor: WorksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorksScalarFieldEnumSchema,WorksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WorksFindFirstOrThrowArgsSchema;
