import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResenaCountOrderByAggregateInputObjectSchema as ResenaCountOrderByAggregateInputObjectSchema } from './ResenaCountOrderByAggregateInput.schema';
import { ResenaAvgOrderByAggregateInputObjectSchema as ResenaAvgOrderByAggregateInputObjectSchema } from './ResenaAvgOrderByAggregateInput.schema';
import { ResenaMaxOrderByAggregateInputObjectSchema as ResenaMaxOrderByAggregateInputObjectSchema } from './ResenaMaxOrderByAggregateInput.schema';
import { ResenaMinOrderByAggregateInputObjectSchema as ResenaMinOrderByAggregateInputObjectSchema } from './ResenaMinOrderByAggregateInput.schema';
import { ResenaSumOrderByAggregateInputObjectSchema as ResenaSumOrderByAggregateInputObjectSchema } from './ResenaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  comentario: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  puntaje: SortOrderSchema.optional(),
  productoId: SortOrderSchema.optional(),
  _count: z.lazy(() => ResenaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ResenaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ResenaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ResenaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ResenaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ResenaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ResenaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaOrderByWithAggregationInput>;
export const ResenaOrderByWithAggregationInputObjectZodSchema = makeSchema();
