import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cantidadPI: z.literal(true).optional(),
  precioUnitario: z.literal(true).optional(),
  subtotalPI: z.literal(true).optional(),
  pedidoId: z.literal(true).optional(),
  publicacionId: z.literal(true).optional()
}).strict();
export const PedidoItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.PedidoItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemAvgAggregateInputType>;
export const PedidoItemAvgAggregateInputObjectZodSchema = makeSchema();
