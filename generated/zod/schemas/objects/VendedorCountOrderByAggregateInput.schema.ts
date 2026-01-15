import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  nombreTienda: SortOrderSchema.optional(),
  reputacion: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional(),
  estadoVendedorId: SortOrderSchema.optional()
}).strict();
export const VendedorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VendedorCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorCountOrderByAggregateInput>;
export const VendedorCountOrderByAggregateInputObjectZodSchema = makeSchema();
