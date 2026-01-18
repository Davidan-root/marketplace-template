import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedidoId: z.bigint()
}).strict();
export const PedidoItemCreateManyPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateManyPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateManyPublicacionInput>;
export const PedidoItemCreateManyPublicacionInputObjectZodSchema = makeSchema();
