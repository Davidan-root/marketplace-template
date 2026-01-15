import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  categoriaId: SortOrderSchema.optional()
}).strict();
export const ProductoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoSumOrderByAggregateInput>;
export const ProductoSumOrderByAggregateInputObjectZodSchema = makeSchema();
