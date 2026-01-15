import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int(),
  pedidoId: z.bigint()
}).strict();
export const EnvioCreateManyInputObjectSchema: z.ZodType<Prisma.EnvioCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioCreateManyInput>;
export const EnvioCreateManyInputObjectZodSchema = makeSchema();
