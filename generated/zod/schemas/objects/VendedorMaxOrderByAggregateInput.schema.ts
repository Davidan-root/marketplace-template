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
export const VendedorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VendedorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorMaxOrderByAggregateInput>;
export const VendedorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
