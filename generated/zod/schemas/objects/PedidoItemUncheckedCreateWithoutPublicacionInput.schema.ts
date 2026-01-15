import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedidoId: z.bigint()
}).strict();
export const PedidoItemUncheckedCreateWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemUncheckedCreateWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUncheckedCreateWithoutPublicacionInput>;
export const PedidoItemUncheckedCreateWithoutPublicacionInputObjectZodSchema = makeSchema();
