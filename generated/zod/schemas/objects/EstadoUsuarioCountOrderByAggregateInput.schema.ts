import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEU: SortOrderSchema.optional(),
  nombreEU: SortOrderSchema.optional()
}).strict();
export const EstadoUsuarioCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCountOrderByAggregateInput>;
export const EstadoUsuarioCountOrderByAggregateInputObjectZodSchema = makeSchema();
