import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorksSumOrderByAggregateInputSchema: z.ZodType<Prisma.WorksSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorksSumOrderByAggregateInputSchema;
