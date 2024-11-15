import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorksWhereInputSchema } from './WorksWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WorksWhereUniqueInputSchema: z.ZodType<Prisma.WorksWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => WorksWhereInputSchema),z.lazy(() => WorksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorksWhereInputSchema),z.lazy(() => WorksWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default WorksWhereUniqueInputSchema;
