import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersUpdateManyMutationInputSchema } from '../inputTypeSchemas/UsersUpdateManyMutationInputSchema'
import { UsersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UsersUncheckedUpdateManyInputSchema'
import { UsersWhereInputSchema } from '../inputTypeSchemas/UsersWhereInputSchema'

export const UsersUpdateManyArgsSchema: z.ZodType<Prisma.UsersUpdateManyArgs> = z.object({
  data: z.union([ UsersUpdateManyMutationInputSchema,UsersUncheckedUpdateManyInputSchema ]),
  where: UsersWhereInputSchema.optional(),
}).strict() ;

export default UsersUpdateManyArgsSchema;
