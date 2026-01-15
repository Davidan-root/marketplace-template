import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  estadoEnvio: SortOrderSchema.optional(),
  numeroEnvio: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const EnvioMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EnvioMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioMinOrderByAggregateInput>;
export const EnvioMinOrderByAggregateInputObjectZodSchema = makeSchema();
