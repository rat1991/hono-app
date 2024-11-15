import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UsersCreateManyInputSchema: z.ZodType<Prisma.UsersCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UsersCreateManyInputSchema;
