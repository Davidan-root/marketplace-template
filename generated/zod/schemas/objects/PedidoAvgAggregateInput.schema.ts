import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numeroPedido: z.literal(true).optional(),
  totalPrecio: z.literal(true).optional(),
  usuarioId: z.literal(true).optional()
}).strict();
export const PedidoAvgAggregateInputObjectSchema: z.ZodType<Prisma.PedidoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PedidoAvgAggregateInputType>;
export const PedidoAvgAggregateInputObjectZodSchema = makeSchema();
