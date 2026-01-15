import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CarritoCountOrderByAggregateInputObjectSchema as CarritoCountOrderByAggregateInputObjectSchema } from './CarritoCountOrderByAggregateInput.schema';
import { CarritoAvgOrderByAggregateInputObjectSchema as CarritoAvgOrderByAggregateInputObjectSchema } from './CarritoAvgOrderByAggregateInput.schema';
import { CarritoMaxOrderByAggregateInputObjectSchema as CarritoMaxOrderByAggregateInputObjectSchema } from './CarritoMaxOrderByAggregateInput.schema';
import { CarritoMinOrderByAggregateInputObjectSchema as CarritoMinOrderByAggregateInputObjectSchema } from './CarritoMinOrderByAggregateInput.schema';
import { CarritoSumOrderByAggregateInputObjectSchema as CarritoSumOrderByAggregateInputObjectSchema } from './CarritoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  fechaHoraAlta: SortOrderSchema.optional(),
  fechaHoraBaja: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fechaHoraModificacion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  usuarioId: SortOrderSchema.optional(),
  _count: z.lazy(() => CarritoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CarritoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CarritoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CarritoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CarritoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CarritoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CarritoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoOrderByWithAggregationInput>;
export const CarritoOrderByWithAggregationInputObjectZodSchema = makeSchema();
