import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CategoriaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaAvgOrderByAggregateInput>;
export const CategoriaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
