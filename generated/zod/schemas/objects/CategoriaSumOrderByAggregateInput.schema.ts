import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CategoriaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaSumOrderByAggregateInput>;
export const CategoriaSumOrderByAggregateInputObjectZodSchema = makeSchema();
