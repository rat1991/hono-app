import { z } from 'zod';

export const WorksScalarFieldEnumSchema = z.enum(['id','title','content','createdAt','updatedAt']);

export default WorksScalarFieldEnumSchema;
