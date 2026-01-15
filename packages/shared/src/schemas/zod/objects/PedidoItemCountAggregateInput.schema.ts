import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cantidadPI: z.literal(true).optional(),
  precioUnitario: z.literal(true).optional(),
  subtotalPI: z.literal(true).optional(),
  pedidoId: z.literal(true).optional(),
  publicacionId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PedidoItemCountAggregateInputObjectSchema: z.ZodType<Prisma.PedidoItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCountAggregateInputType>;
export const PedidoItemCountAggregateInputObjectZodSchema = makeSchema();
