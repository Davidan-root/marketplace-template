import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  numeroPedido: SortOrderSchema.optional(),
  totalPrecio: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional()
}).strict();
export const PedidoMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PedidoMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoMaxOrderByAggregateInput>;
export const PedidoMaxOrderByAggregateInputObjectZodSchema = makeSchema();
