import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  fechaHoraAlta: z.literal(true).optional(),
  numeroPedido: z.literal(true).optional(),
  totalPrecio: z.literal(true).optional(),
  usuarioId: z.literal(true).optional()
}).strict();
export const PedidoMaxAggregateInputObjectSchema: z.ZodType<Prisma.PedidoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PedidoMaxAggregateInputType>;
export const PedidoMaxAggregateInputObjectZodSchema = makeSchema();
