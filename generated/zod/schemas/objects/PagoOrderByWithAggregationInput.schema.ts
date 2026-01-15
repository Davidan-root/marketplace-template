import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PagoCountOrderByAggregateInputObjectSchema as PagoCountOrderByAggregateInputObjectSchema } from './PagoCountOrderByAggregateInput.schema';
import { PagoAvgOrderByAggregateInputObjectSchema as PagoAvgOrderByAggregateInputObjectSchema } from './PagoAvgOrderByAggregateInput.schema';
import { PagoMaxOrderByAggregateInputObjectSchema as PagoMaxOrderByAggregateInputObjectSchema } from './PagoMaxOrderByAggregateInput.schema';
import { PagoMinOrderByAggregateInputObjectSchema as PagoMinOrderByAggregateInputObjectSchema } from './PagoMinOrderByAggregateInput.schema';
import { PagoSumOrderByAggregateInputObjectSchema as PagoSumOrderByAggregateInputObjectSchema } from './PagoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  metodoPago: SortOrderSchema.optional(),
  monto: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  _count: z.lazy(() => PagoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PagoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PagoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PagoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PagoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PagoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PagoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoOrderByWithAggregationInput>;
export const PagoOrderByWithAggregationInputObjectZodSchema = makeSchema();
