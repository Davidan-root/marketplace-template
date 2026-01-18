import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEV: SortOrderSchema.optional(),
  nombreEV: SortOrderSchema.optional()
}).strict();
export const EstadoVendedorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorCountOrderByAggregateInput>;
export const EstadoVendedorCountOrderByAggregateInputObjectZodSchema = makeSchema();
