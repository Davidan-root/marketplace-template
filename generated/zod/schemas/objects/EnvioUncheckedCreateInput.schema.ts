import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int(),
  pedidoId: z.bigint()
}).strict();
export const EnvioUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EnvioUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioUncheckedCreateInput>;
export const EnvioUncheckedCreateInputObjectZodSchema = makeSchema();
