import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEU: SortOrderSchema.optional(),
  nombreEU: SortOrderSchema.optional()
}).strict();
export const EstadoUsuarioMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioMaxOrderByAggregateInput>;
export const EstadoUsuarioMaxOrderByAggregateInputObjectZodSchema = makeSchema();
