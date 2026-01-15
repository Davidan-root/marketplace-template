import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reputacion: SortOrderSchema.optional(),
  usuarioId: SortOrderSchema.optional(),
  estadoVendedorId: SortOrderSchema.optional()
}).strict();
export const VendedorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VendedorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorSumOrderByAggregateInput>;
export const VendedorSumOrderByAggregateInputObjectZodSchema = makeSchema();
