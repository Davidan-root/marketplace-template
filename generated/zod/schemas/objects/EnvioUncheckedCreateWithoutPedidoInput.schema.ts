import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  estadoEnvio: z.string(),
  numeroEnvio: z.number().int()
}).strict();
export const EnvioUncheckedCreateWithoutPedidoInputObjectSchema: z.ZodType<Prisma.EnvioUncheckedCreateWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioUncheckedCreateWithoutPedidoInput>;
export const EnvioUncheckedCreateWithoutPedidoInputObjectZodSchema = makeSchema();
