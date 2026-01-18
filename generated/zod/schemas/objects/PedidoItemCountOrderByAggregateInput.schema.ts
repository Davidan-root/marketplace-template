import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadPI: SortOrderSchema.optional(),
  precioUnitario: SortOrderSchema.optional(),
  subtotalPI: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional()
}).strict();
export const PedidoItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PedidoItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCountOrderByAggregateInput>;
export const PedidoItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
