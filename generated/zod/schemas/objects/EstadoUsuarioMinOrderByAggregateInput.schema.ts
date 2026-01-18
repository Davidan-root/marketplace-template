import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEU: SortOrderSchema.optional(),
  nombreEU: SortOrderSchema.optional()
}).strict();
export const EstadoUsuarioMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioMinOrderByAggregateInput>;
export const EstadoUsuarioMinOrderByAggregateInputObjectZodSchema = makeSchema();
