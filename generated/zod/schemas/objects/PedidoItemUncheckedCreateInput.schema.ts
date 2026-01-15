import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedidoId: z.bigint(),
  publicacionId: z.bigint()
}).strict();
export const PedidoItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PedidoItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUncheckedCreateInput>;
export const PedidoItemUncheckedCreateInputObjectZodSchema = makeSchema();
