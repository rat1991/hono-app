import { z } from 'zod';

/////////////////////////////////////////
// WORKS SCHEMA
/////////////////////////////////////////

export const WorksSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Works = z.infer<typeof WorksSchema>

export default WorksSchema;
