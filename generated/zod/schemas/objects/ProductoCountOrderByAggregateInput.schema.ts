import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionProducto: SortOrderSchema.optional(),
  nombreProducto: SortOrderSchema.optional(),
  categoriaId: SortOrderSchema.optional()
}).strict();
export const ProductoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductoCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCountOrderByAggregateInput>;
export const ProductoCountOrderByAggregateInputObjectZodSchema = makeSchema();
