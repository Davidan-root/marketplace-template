import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  estadoEnvio: SortOrderSchema.optional(),
  numeroEnvio: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const EnvioCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EnvioCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioCountOrderByAggregateInput>;
export const EnvioCountOrderByAggregateInputObjectZodSchema = makeSchema();
