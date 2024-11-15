import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { WorksCountOrderByAggregateInputSchema } from './WorksCountOrderByAggregateInputSchema';
import { WorksAvgOrderByAggregateInputSchema } from './WorksAvgOrderByAggregateInputSchema';
import { WorksMaxOrderByAggregateInputSchema } from './WorksMaxOrderByAggregateInputSchema';
import { WorksMinOrderByAggregateInputSchema } from './WorksMinOrderByAggregateInputSchema';
import { WorksSumOrderByAggregateInputSchema } from './WorksSumOrderByAggregateInputSchema';

export const WorksOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorksOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WorksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WorksSumOrderByAggregateInputSchema).optional()
}).strict();

export default WorksOrderByWithAggregationInputSchema;
