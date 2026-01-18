import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const EstadoVendedorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorSumOrderByAggregateInput>;
export const EstadoVendedorSumOrderByAggregateInputObjectZodSchema = makeSchema();
