import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  puntaje: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional()
}).strict();
export const ResenaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResenaSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaSumOrderByAggregateInput>;
export const ResenaSumOrderByAggregateInputObjectZodSchema = makeSchema();
