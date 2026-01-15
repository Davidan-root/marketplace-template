import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  puntaje: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional()
}).strict();
export const ResenaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResenaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaAvgOrderByAggregateInput>;
export const ResenaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
