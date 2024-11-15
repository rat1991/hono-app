import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WorksSelectSchema: z.ZodType<Prisma.WorksSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default WorksSelectSchema;
