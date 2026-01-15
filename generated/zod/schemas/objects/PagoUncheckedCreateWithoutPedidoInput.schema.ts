import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  metodoPago: z.string(),
  monto: z.number()
}).strict();
export const PagoUncheckedCreateWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PagoUncheckedCreateWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUncheckedCreateWithoutPedidoInput>;
export const PagoUncheckedCreateWithoutPedidoInputObjectZodSchema = makeSchema();
