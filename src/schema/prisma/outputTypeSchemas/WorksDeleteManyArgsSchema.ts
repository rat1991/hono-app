import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksWhereInputSchema } from '../inputTypeSchemas/WorksWhereInputSchema'

export const WorksDeleteManyArgsSchema: z.ZodType<Prisma.WorksDeleteManyArgs> = z.object({
  where: WorksWhereInputSchema.optional(),
}).strict() ;

export default WorksDeleteManyArgsSchema;
