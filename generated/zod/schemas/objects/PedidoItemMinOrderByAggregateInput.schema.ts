import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadPI: SortOrderSchema.optional(),
  precioUnitario: SortOrderSchema.optional(),
  subtotalPI: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional()
}).strict();
export const PedidoItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PedidoItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemMinOrderByAggregateInput>;
export const PedidoItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
