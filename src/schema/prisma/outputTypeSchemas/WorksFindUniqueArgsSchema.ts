import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const WorksFindUniqueArgsSchema: z.ZodType<Prisma.WorksFindUniqueArgs> = z.object({
  select: WorksSelectSchema.optional(),
  where: WorksWhereUniqueInputSchema,
}).strict() ;

export default WorksFindUniqueArgsSchema;
