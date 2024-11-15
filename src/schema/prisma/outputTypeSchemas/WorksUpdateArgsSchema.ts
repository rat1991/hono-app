import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksUpdateInputSchema } from '../inputTypeSchemas/WorksUpdateInputSchema'
import { WorksUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorksUncheckedUpdateInputSchema'
import { WorksWhereUniqueInputSchema } from '../inputTypeSchemas/WorksWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorksSelectSchema: z.ZodType<Prisma.WorksSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const WorksUpdateArgsSchema: z.ZodType<Prisma.WorksUpdateArgs> = z.object({
  select: WorksSelectSchema.optional(),
  data: z.union([ WorksUpdateInputSchema,WorksUncheckedUpdateInputSchema ]),
  where: WorksWhereUniqueInputSchema,
}).strict() ;

export default WorksUpdateArgsSchema;
