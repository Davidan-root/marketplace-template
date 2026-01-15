import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEV: SortOrderSchema.optional(),
  nombreEV: SortOrderSchema.optional()
}).strict();
export const EstadoVendedorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorMaxOrderByAggregateInput>;
export const EstadoVendedorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
