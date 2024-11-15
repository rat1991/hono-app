import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksWhereUniqueInputSchema } from '../inputTypeSchemas/WorksWhereUniqueInputSchema'
import { WorksCreateInputSchema } from '../inputTypeSchemas/WorksCreateInputSchema'
import { WorksUncheckedCreateInputSchema } from '../inputTypeSchemas/WorksUncheckedCreateInputSchema'
import { WorksUpdateInputSchema } from '../inputTypeSchemas/WorksUpdateInputSchema'
import { WorksUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorksUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorksSelectSchema: z.ZodType<Prisma.WorksSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const WorksUpsertArgsSchema: z.ZodType<Prisma.WorksUpsertArgs> = z.object({
  select: WorksSelectSchema.optional(),
  where: WorksWhereUniqueInputSchema,
  create: z.union([ WorksCreateInputSchema,WorksUncheckedCreateInputSchema ]),
  update: z.union([ WorksUpdateInputSchema,WorksUncheckedUpdateInputSchema ]),
}).strict() ;

export default WorksUpsertArgsSchema;
