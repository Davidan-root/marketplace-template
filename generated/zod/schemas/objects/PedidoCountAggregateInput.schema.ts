import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  numeroPedido: z.literal(true).optional(),
  totalPrecio: z.literal(true).optional(),
  usuarioId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PedidoCountAggregateInputObjectSchema: z.ZodType<Prisma.PedidoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCountAggregateInputType>;
export const PedidoCountAggregateInputObjectZodSchema = makeSchema();
