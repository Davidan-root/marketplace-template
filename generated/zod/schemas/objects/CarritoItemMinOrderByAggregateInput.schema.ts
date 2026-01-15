import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadCI: SortOrderSchema.optional(),
  carritoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional()
}).strict();
export const CarritoItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CarritoItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemMinOrderByAggregateInput>;
export const CarritoItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
