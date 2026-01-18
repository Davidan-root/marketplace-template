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
export const PedidoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PedidoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoMinOrderByAggregateInput>;
export const PedidoMinOrderByAggregateInputObjectZodSchema = makeSchema();
