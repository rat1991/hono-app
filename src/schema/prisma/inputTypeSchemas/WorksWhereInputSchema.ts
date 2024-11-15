import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WorksWhereInputSchema: z.ZodType<Prisma.WorksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorksWhereInputSchema),z.lazy(() => WorksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorksWhereInputSchema),z.lazy(() => WorksWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WorksWhereInputSchema;
