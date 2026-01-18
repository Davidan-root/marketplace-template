import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numeroPedido: SortOrderSchema.optional(),
  totalPrecio: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional()
}).strict();
export const PedidoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PedidoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoSumOrderByAggregateInput>;
export const PedidoSumOrderByAggregateInputObjectZodSchema = makeSchema();
