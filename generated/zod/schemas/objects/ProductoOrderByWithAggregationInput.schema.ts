import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductoCountOrderByAggregateInputObjectSchema as ProductoCountOrderByAggregateInputObjectSchema } from './ProductoCountOrderByAggregateInput.schema';
import { ProductoAvgOrderByAggregateInputObjectSchema as ProductoAvgOrderByAggregateInputObjectSchema } from './ProductoAvgOrderByAggregateInput.schema';
import { ProductoMaxOrderByAggregateInputObjectSchema as ProductoMaxOrderByAggregateInputObjectSchema } from './ProductoMaxOrderByAggregateInput.schema';
import { ProductoMinOrderByAggregateInputObjectSchema as ProductoMinOrderByAggregateInputObjectSchema } from './ProductoMinOrderByAggregateInput.schema';
import { ProductoSumOrderByAggregateInputObjectSchema as ProductoSumOrderByAggregateInputObjectSchema } from './ProductoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionProducto: SortOrderSchema.optional(),
  nombreProducto: SortOrderSchema.optional(),
  categoriaId: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoOrderByWithAggregationInput>;
export const ProductoOrderByWithAggregationInputObjectZodSchema = makeSchema();
