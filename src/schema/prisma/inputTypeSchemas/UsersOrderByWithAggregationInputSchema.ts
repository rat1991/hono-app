import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UsersCountOrderByAggregateInputSchema } from './UsersCountOrderByAggregateInputSchema';
import { UsersAvgOrderByAggregateInputSchema } from './UsersAvgOrderByAggregateInputSchema';
import { UsersMaxOrderByAggregateInputSchema } from './UsersMaxOrderByAggregateInputSchema';
import { UsersMinOrderByAggregateInputSchema } from './UsersMinOrderByAggregateInputSchema';
import { UsersSumOrderByAggregateInputSchema } from './UsersSumOrderByAggregateInputSchema';

export const UsersOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UsersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UsersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UsersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UsersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UsersSumOrderByAggregateInputSchema).optional()
}).strict();

export default UsersOrderByWithAggregationInputSchema;
