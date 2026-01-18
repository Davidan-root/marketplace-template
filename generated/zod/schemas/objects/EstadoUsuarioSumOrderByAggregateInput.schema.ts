import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const EstadoUsuarioSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioSumOrderByAggregateInput>;
export const EstadoUsuarioSumOrderByAggregateInputObjectZodSchema = makeSchema();
