import * as z from 'zod';
export const EnvioCreateManyResultSchema = z.object({
  count: z.number()
});