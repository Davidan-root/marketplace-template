import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional(),
  stockVenta: SortOrderSchema.optional(),
  vendedorId: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional()
}).strict();
export const PublicacionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionAvgOrderByAggregateInput>;
export const PublicacionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
