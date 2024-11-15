import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorksAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WorksAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorksAvgOrderByAggregateInputSchema;
