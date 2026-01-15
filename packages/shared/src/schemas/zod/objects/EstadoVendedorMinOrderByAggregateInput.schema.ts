import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEV: SortOrderSchema.optional(),
  nombreEV: SortOrderSchema.optional()
}).strict();
export const EstadoVendedorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorMinOrderByAggregateInput>;
export const EstadoVendedorMinOrderByAggregateInputObjectZodSchema = makeSchema();
