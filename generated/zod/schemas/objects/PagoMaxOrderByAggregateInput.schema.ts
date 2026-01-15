import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  metodoPago: SortOrderSchema.optional(),
  monto: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const PagoMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PagoMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoMaxOrderByAggregateInput>;
export const PagoMaxOrderByAggregateInputObjectZodSchema = makeSchema();
