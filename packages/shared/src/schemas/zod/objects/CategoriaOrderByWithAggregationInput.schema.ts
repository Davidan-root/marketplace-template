import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoriaCountOrderByAggregateInputObjectSchema as CategoriaCountOrderByAggregateInputObjectSchema } from './CategoriaCountOrderByAggregateInput.schema';
import { CategoriaAvgOrderByAggregateInputObjectSchema as CategoriaAvgOrderByAggregateInputObjectSchema } from './CategoriaAvgOrderByAggregateInput.schema';
import { CategoriaMaxOrderByAggregateInputObjectSchema as CategoriaMaxOrderByAggregateInputObjectSchema } from './CategoriaMaxOrderByAggregateInput.schema';
import { CategoriaMinOrderByAggregateInputObjectSchema as CategoriaMinOrderByAggregateInputObjectSchema } from './CategoriaMinOrderByAggregateInput.schema';
import { CategoriaSumOrderByAggregateInputObjectSchema as CategoriaSumOrderByAggregateInputObjectSchema } from './CategoriaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionCategoria: SortOrderSchema.optional(),
  nombreCategoria: SortOrderSchema.optional(),
  _count: z.lazy(() => CategoriaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CategoriaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CategoriaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CategoriaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CategoriaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CategoriaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CategoriaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaOrderByWithAggregationInput>;
export const CategoriaOrderByWithAggregationInputObjectZodSchema = makeSchema();
