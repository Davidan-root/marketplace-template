import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numeroEnvio: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const EnvioAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EnvioAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioAvgOrderByAggregateInput>;
export const EnvioAvgOrderByAggregateInputObjectZodSchema = makeSchema();
