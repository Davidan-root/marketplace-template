import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numeroEnvio: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const EnvioSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EnvioSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioSumOrderByAggregateInput>;
export const EnvioSumOrderByAggregateInputObjectZodSchema = makeSchema();
