import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksCreateInputSchema } from '../inputTypeSchemas/WorksCreateInputSchema'
import { WorksUncheckedCreateInputSchema } from '../inputTypeSchemas/WorksUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorksSelectSchema: z.ZodType<Prisma.WorksSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const WorksCreateArgsSchema: z.ZodType<Prisma.WorksCreateArgs> = z.object({
  select: WorksSelectSchema.optional(),
  data: z.union([ WorksCreateInputSchema,WorksUncheckedCreateInputSchema ]),
}).strict() ;

export default WorksCreateArgsSchema;
