import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EstadoUsuarioCountOrderByAggregateInputObjectSchema as EstadoUsuarioCountOrderByAggregateInputObjectSchema } from './EstadoUsuarioCountOrderByAggregateInput.schema';
import { EstadoUsuarioAvgOrderByAggregateInputObjectSchema as EstadoUsuarioAvgOrderByAggregateInputObjectSchema } from './EstadoUsuarioAvgOrderByAggregateInput.schema';
import { EstadoUsuarioMaxOrderByAggregateInputObjectSchema as EstadoUsuarioMaxOrderByAggregateInputObjectSchema } from './EstadoUsuarioMaxOrderByAggregateInput.schema';
import { EstadoUsuarioMinOrderByAggregateInputObjectSchema as EstadoUsuarioMinOrderByAggregateInputObjectSchema } from './EstadoUsuarioMinOrderByAggregateInput.schema';
import { EstadoUsuarioSumOrderByAggregateInputObjectSchema as EstadoUsuarioSumOrderByAggregateInputObjectSchema } from './EstadoUsuarioSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  descripcionEU: SortOrderSchema.optional(),
  nombreEU: SortOrderSchema.optional(),
  _count: z.lazy(() => EstadoUsuarioCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EstadoUsuarioAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EstadoUsuarioMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EstadoUsuarioMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EstadoUsuarioSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioOrderByWithAggregationInput>;
export const EstadoUsuarioOrderByWithAggregationInputObjectZodSchema = makeSchema();
