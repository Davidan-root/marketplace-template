import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  estadoEnvio: SortOrderSchema.optional(),
  numeroEnvio: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional()
}).strict();
export const EnvioMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EnvioMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioMaxOrderByAggregateInput>;
export const EnvioMaxOrderByAggregateInputObjectZodSchema = makeSchema();
