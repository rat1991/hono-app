import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorksUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorksUpdateManyMutationInputSchema'
import { WorksUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorksUncheckedUpdateManyInputSchema'
import { WorksWhereInputSchema } from '../inputTypeSchemas/WorksWhereInputSchema'

export const WorksUpdateManyArgsSchema: z.ZodType<Prisma.WorksUpdateManyArgs> = z.object({
  data: z.union([ WorksUpdateManyMutationInputSchema,WorksUncheckedUpdateManyInputSchema ]),
  where: WorksWhereInputSchema.optional(),
}).strict() ;

export default WorksUpdateManyArgsSchema;
