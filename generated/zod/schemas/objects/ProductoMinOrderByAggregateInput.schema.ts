import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionProducto: SortOrderSchema.optional(),
  nombreProducto: SortOrderSchema.optional(),
  categoriaId: SortOrderSchema.optional()
}).strict();
export const ProductoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoMinOrderByAggregateInput>;
export const ProductoMinOrderByAggregateInputObjectZodSchema = makeSchema();
