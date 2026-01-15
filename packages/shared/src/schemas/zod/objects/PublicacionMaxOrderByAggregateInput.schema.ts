import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  condicionesVenta: SortOrderSchema.optional(),
  enviosVenta: SortOrderSchema.optional(),
  precioVenta: SortOrderSchema.optional(),
  stockVenta: SortOrderSchema.optional(),
  vendedorId: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional()
}).strict();
export const PublicacionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionMaxOrderByAggregateInput>;
export const PublicacionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
