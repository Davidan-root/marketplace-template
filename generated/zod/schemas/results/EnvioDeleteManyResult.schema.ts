import * as z from 'zod';
export const EnvioDeleteManyResultSchema = z.object({
  count: z.number()
});