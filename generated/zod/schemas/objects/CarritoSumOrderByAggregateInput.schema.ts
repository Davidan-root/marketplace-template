import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional()
}).strict();
export const CarritoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CarritoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoSumOrderByAggregateInput>;
export const CarritoSumOrderByAggregateInputObjectZodSchema = makeSchema();
