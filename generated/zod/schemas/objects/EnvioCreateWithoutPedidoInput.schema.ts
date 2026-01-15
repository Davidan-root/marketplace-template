import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int()
}).strict();
export const EnvioCreateWithoutPedidoInputObjectSchema: z.ZodType<Prisma.EnvioCreateWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioCreateWithoutPedidoInput>;
export const EnvioCreateWithoutPedidoInputObjectZodSchema = makeSchema();
