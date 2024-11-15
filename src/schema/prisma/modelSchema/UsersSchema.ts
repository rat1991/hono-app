import { z } from 'zod';

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const UsersSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  name: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Users = z.infer<typeof UsersSchema>

export default UsersSchema;
