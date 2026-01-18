import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  categoriaId: SortOrderSchema.optional()
}).strict();
export const ProductoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductoAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoAvgOrderByAggregateInput>;
export const ProductoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
