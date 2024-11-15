import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorksUncheckedCreateInputSchema: z.ZodType<Prisma.WorksUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WorksUncheckedCreateInputSchema;
