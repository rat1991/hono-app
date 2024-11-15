import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksCreateManyInputSchema } from '../inputTypeSchemas/WorksCreateManyInputSchema'

export const WorksCreateManyArgsSchema: z.ZodType<Prisma.WorksCreateManyArgs> = z.object({
  data: z.union([ WorksCreateManyInputSchema,WorksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WorksCreateManyArgsSchema;
