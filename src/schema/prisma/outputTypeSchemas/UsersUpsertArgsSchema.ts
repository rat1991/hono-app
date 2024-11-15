import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersWhereUniqueInputSchema } from '../inputTypeSchemas/UsersWhereUniqueInputSchema'
import { UsersCreateInputSchema } from '../inputTypeSchemas/UsersCreateInputSchema'
import { UsersUncheckedCreateInputSchema } from '../inputTypeSchemas/UsersUncheckedCreateInputSchema'
import { UsersUpdateInputSchema } from '../inputTypeSchemas/UsersUpdateInputSchema'
import { UsersUncheckedUpdateInputSchema } from '../inputTypeSchemas/UsersUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UsersSelectSchema: z.ZodType<Prisma.UsersSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const UsersUpsertArgsSchema: z.ZodType<Prisma.UsersUpsertArgs> = z.object({
  select: UsersSelectSchema.optional(),
  where: UsersWhereUniqueInputSchema,
  create: z.union([ UsersCreateInputSchema,UsersUncheckedCreateInputSchema ]),
  update: z.union([ UsersUpdateInputSchema,UsersUncheckedUpdateInputSchema ]),
}).strict() ;

export default UsersUpsertArgsSchema;
