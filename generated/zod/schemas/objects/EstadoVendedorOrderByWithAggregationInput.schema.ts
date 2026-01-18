import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EstadoVendedorCountOrderByAggregateInputObjectSchema as EstadoVendedorCountOrderByAggregateInputObjectSchema } from './EstadoVendedorCountOrderByAggregateInput.schema';
import { EstadoVendedorAvgOrderByAggregateInputObjectSchema as EstadoVendedorAvgOrderByAggregateInputObjectSchema } from './EstadoVendedorAvgOrderByAggregateInput.schema';
import { EstadoVendedorMaxOrderByAggregateInputObjectSchema as EstadoVendedorMaxOrderByAggregateInputObjectSchema } from './EstadoVendedorMaxOrderByAggregateInput.schema';
import { EstadoVendedorMinOrderByAggregateInputObjectSchema as EstadoVendedorMinOrderByAggregateInputObjectSchema } from './EstadoVendedorMinOrderByAggregateInput.schema';
import { EstadoVendedorSumOrderByAggregateInputObjectSchema as EstadoVendedorSumOrderByAggregateInputObjectSchema } from './EstadoVendedorSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEV: SortOrderSchema.optional(),
  nombreEV: SortOrderSchema.optional(),
  _count: z.lazy(() => EstadoVendedorCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EstadoVendedorAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EstadoVendedorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EstadoVendedorMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EstadoVendedorSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EstadoVendedorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EstadoVendedorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorOrderByWithAggregationInput>;
export const EstadoVendedorOrderByWithAggregationInputObjectZodSchema = makeSchema();
