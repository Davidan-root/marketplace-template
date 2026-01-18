import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional(),
  stockVenta: SortOrderSchema.optional(),
  vendedorId: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional()
}).strict();
export const PublicacionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionSumOrderByAggregateInput>;
export const PublicacionSumOrderByAggregateInputObjectZodSchema = makeSchema();
