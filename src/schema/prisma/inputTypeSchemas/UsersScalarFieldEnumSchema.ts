import { z } from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['id','email','password','name','createdAt','updatedAt']);

export default UsersScalarFieldEnumSchema;
