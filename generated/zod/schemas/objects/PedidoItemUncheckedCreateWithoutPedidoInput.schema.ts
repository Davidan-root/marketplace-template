import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  publicacionId: z.bigint()
}).strict();
export const PedidoItemUncheckedCreateWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemUncheckedCreateWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUncheckedCreateWithoutPedidoInput>;
export const PedidoItemUncheckedCreateWithoutPedidoInputObjectZodSchema = makeSchema();
