import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  metodoPago: SortOrderSchema.optional(),
  monto: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const PagoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PagoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoMinOrderByAggregateInput>;
export const PagoMinOrderByAggregateInputObjectZodSchema = makeSchema();
