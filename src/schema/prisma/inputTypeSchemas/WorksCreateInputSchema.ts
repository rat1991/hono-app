import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorksCreateInputSchema: z.ZodType<Prisma.WorksCreateInput> = z.object({
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WorksCreateInputSchema;
