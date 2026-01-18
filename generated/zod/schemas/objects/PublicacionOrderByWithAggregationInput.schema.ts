import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PublicacionCountOrderByAggregateInputObjectSchema as PublicacionCountOrderByAggregateInputObjectSchema } from './PublicacionCountOrderByAggregateInput.schema';
import { PublicacionAvgOrderByAggregateInputObjectSchema as PublicacionAvgOrderByAggregateInputObjectSchema } from './PublicacionAvgOrderByAggregateInput.schema';
import { PublicacionMaxOrderByAggregateInputObjectSchema as PublicacionMaxOrderByAggregateInputObjectSchema } from './PublicacionMaxOrderByAggregateInput.schema';
import { PublicacionMinOrderByAggregateInputObjectSchema as PublicacionMinOrderByAggregateInputObjectSchema } from './PublicacionMinOrderByAggregateInput.schema';
import { PublicacionSumOrderByAggregateInputObjectSchema as PublicacionSumOrderByAggregateInputObjectSchema } from './PublicacionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  condicionesVenta: SortOrderSchema.optional(),
  enviosVenta: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional(),
  stockVenta: SortOrderSchema.optional(),
  vendedorId: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional(),
  _count: z.lazy(() => PublicacionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PublicacionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PublicacionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PublicacionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PublicacionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PublicacionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PublicacionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionOrderByWithAggregationInput>;
export const PublicacionOrderByWithAggregationInputObjectZodSchema = makeSchema();
