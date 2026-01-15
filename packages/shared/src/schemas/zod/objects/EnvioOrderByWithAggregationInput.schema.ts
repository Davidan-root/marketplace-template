import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EnvioCountOrderByAggregateInputObjectSchema as EnvioCountOrderByAggregateInputObjectSchema } from './EnvioCountOrderByAggregateInput.schema';
import { EnvioAvgOrderByAggregateInputObjectSchema as EnvioAvgOrderByAggregateInputObjectSchema } from './EnvioAvgOrderByAggregateInput.schema';
import { EnvioMaxOrderByAggregateInputObjectSchema as EnvioMaxOrderByAggregateInputObjectSchema } from './EnvioMaxOrderByAggregateInput.schema';
import { EnvioMinOrderByAggregateInputObjectSchema as EnvioMinOrderByAggregateInputObjectSchema } from './EnvioMinOrderByAggregateInput.schema';
import { EnvioSumOrderByAggregateInputObjectSchema as EnvioSumOrderByAggregateInputObjectSchema } from './EnvioSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  estadoEnvio: SortOrderSchema.optional(),
  numeroEnvio: SortOrderSchema.optional(),
  pedidoId: SortOrderSchema.optional(),
  _count: z.lazy(() => EnvioCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EnvioAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EnvioMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EnvioMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EnvioSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EnvioOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EnvioOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioOrderByWithAggregationInput>;
export const EnvioOrderByWithAggregationInputObjectZodSchema = makeSchema();
