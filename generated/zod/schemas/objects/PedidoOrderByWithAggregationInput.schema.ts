import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PedidoCountOrderByAggregateInputObjectSchema as PedidoCountOrderByAggregateInputObjectSchema } from './PedidoCountOrderByAggregateInput.schema';
import { PedidoAvgOrderByAggregateInputObjectSchema as PedidoAvgOrderByAggregateInputObjectSchema } from './PedidoAvgOrderByAggregateInput.schema';
import { PedidoMaxOrderByAggregateInputObjectSchema as PedidoMaxOrderByAggregateInputObjectSchema } from './PedidoMaxOrderByAggregateInput.schema';
import { PedidoMinOrderByAggregateInputObjectSchema as PedidoMinOrderByAggregateInputObjectSchema } from './PedidoMinOrderByAggregateInput.schema';
import { PedidoSumOrderByAggregateInputObjectSchema as PedidoSumOrderByAggregateInputObjectSchema } from './PedidoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  numeroPedido: SortOrderSchema.optional(),
  totalPrecio: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional(),
  _count: z.lazy(() => PedidoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PedidoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PedidoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PedidoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PedidoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PedidoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PedidoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoOrderByWithAggregationInput>;
export const PedidoOrderByWithAggregationInputObjectZodSchema = makeSchema();
