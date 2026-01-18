import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadCI: SortOrderSchema.optional(),
  carritoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional()
}).strict();
export const CarritoItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CarritoItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemCountOrderByAggregateInput>;
export const CarritoItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
