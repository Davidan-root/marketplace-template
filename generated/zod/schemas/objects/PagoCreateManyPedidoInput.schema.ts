import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  metodoPago: z.string(),
  monto: z.number()
}).strict();
export const PagoCreateManyPedidoInputObjectSchema: z.ZodType<Prisma.PagoCreateManyPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoCreateManyPedidoInput>;
export const PagoCreateManyPedidoInputObjectZodSchema = makeSchema();
