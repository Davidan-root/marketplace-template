import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  numeroPedido: SortOrderSchema.optional(),
  totalPrecio: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional()
}).strict();
export const PedidoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PedidoCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoCountOrderByAggregateInput>;
export const PedidoCountOrderByAggregateInputObjectZodSchema = makeSchema();
