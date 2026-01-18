import * as z from 'zod';
import type { Prisma } from '../../../prisma';
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
export const PublicacionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionMinOrderByAggregateInput>;
export const PublicacionMinOrderByAggregateInputObjectZodSchema = makeSchema();
