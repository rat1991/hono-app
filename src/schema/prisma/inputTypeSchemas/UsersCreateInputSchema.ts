import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UsersCreateInputSchema: z.ZodType<Prisma.UsersCreateInput> = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UsersCreateInputSchema;
