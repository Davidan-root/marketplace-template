import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  publicacionId: z.bigint()
}).strict();
export const PedidoItemCreateManyPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateManyPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateManyPedidoInput>;
export const PedidoItemCreateManyPedidoInputObjectZodSchema = makeSchema();
