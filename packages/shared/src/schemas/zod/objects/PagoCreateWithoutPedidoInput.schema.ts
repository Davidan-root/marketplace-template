import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  metodoPago: z.string(),
  monto: z.number()
}).strict();
export const PagoCreateWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PagoCreateWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoCreateWithoutPedidoInput>;
export const PagoCreateWithoutPedidoInputObjectZodSchema = makeSchema();
