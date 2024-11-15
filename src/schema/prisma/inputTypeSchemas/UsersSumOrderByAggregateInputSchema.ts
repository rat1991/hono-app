import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UsersSumOrderByAggregateInputSchema: z.ZodType<Prisma.UsersSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UsersSumOrderByAggregateInputSchema;
