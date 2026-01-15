import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PedidoItemCountOrderByAggregateInputObjectSchema as PedidoItemCountOrderByAggregateInputObjectSchema } from './PedidoItemCountOrderByAggregateInput.schema';
import { PedidoItemAvgOrderByAggregateInputObjectSchema as PedidoItemAvgOrderByAggregateInputObjectSchema } from './PedidoItemAvgOrderByAggregateInput.schema';
import { PedidoItemMaxOrderByAggregateInputObjectSchema as PedidoItemMaxOrderByAggregateInputObjectSchema } from './PedidoItemMaxOrderByAggregateInput.schema';
import { PedidoItemMinOrderByAggregateInputObjectSchema as PedidoItemMinOrderByAggregateInputObjectSchema } from './PedidoItemMinOrderByAggregateInput.schema';
import { PedidoItemSumOrderByAggregateInputObjectSchema as PedidoItemSumOrderByAggregateInputObjectSchema } from './PedidoItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadPI: SortOrderSchema.optional(),
  precioUnitario: SortOrderSchema.optional(),
  subtotalPI: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional(),
  _count: z.lazy(() => PedidoItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PedidoItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PedidoItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PedidoItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PedidoItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PedidoItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PedidoItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemOrderByWithAggregationInput>;
export const PedidoItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
