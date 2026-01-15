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
export const PedidoItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PedidoItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemAvgOrderByAggregateInput>;
export const PedidoItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
