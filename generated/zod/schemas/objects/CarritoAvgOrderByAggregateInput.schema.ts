import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional()
}).strict();
export const CarritoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CarritoAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoAvgOrderByAggregateInput>;
export const CarritoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
