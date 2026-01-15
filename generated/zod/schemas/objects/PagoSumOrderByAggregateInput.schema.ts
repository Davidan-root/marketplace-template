import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  monto: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const PagoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PagoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoSumOrderByAggregateInput>;
export const PagoSumOrderByAggregateInputObjectZodSchema = makeSchema();
