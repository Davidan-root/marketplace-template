import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadCI: SortOrderSchema.optional(),
  carritoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional()
}).strict();
export const CarritoItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CarritoItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemSumOrderByAggregateInput>;
export const CarritoItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
