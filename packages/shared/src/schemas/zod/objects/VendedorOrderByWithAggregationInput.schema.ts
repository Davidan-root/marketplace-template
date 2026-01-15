import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VendedorCountOrderByAggregateInputObjectSchema as VendedorCountOrderByAggregateInputObjectSchema } from './VendedorCountOrderByAggregateInput.schema';
import { VendedorAvgOrderByAggregateInputObjectSchema as VendedorAvgOrderByAggregateInputObjectSchema } from './VendedorAvgOrderByAggregateInput.schema';
import { VendedorMaxOrderByAggregateInputObjectSchema as VendedorMaxOrderByAggregateInputObjectSchema } from './VendedorMaxOrderByAggregateInput.schema';
import { VendedorMinOrderByAggregateInputObjectSchema as VendedorMinOrderByAggregateInputObjectSchema } from './VendedorMinOrderByAggregateInput.schema';
import { VendedorSumOrderByAggregateInputObjectSchema as VendedorSumOrderByAggregateInputObjectSchema } from './VendedorSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  nombreTienda: SortOrderSchema.optional(),
  reputacion: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional(),
  estadoVendedorId: SortOrderSchema.optional(),
  _count: z.lazy(() => VendedorCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => VendedorAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VendedorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VendedorMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => VendedorSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VendedorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VendedorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorOrderByWithAggregationInput>;
export const VendedorOrderByWithAggregationInputObjectZodSchema = makeSchema();
