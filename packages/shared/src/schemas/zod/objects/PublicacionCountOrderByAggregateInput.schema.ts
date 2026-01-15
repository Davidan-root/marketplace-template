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
export const PublicacionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PublicacionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCountOrderByAggregateInput>;
export const PublicacionCountOrderByAggregateInputObjectZodSchema = makeSchema();
