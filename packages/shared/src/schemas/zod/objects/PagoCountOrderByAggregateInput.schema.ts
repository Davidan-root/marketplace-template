import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  metodoPago: SortOrderSchema.optional(),
  monto: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const PagoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PagoCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoCountOrderByAggregateInput>;
export const PagoCountOrderByAggregateInputObjectZodSchema = makeSchema();
