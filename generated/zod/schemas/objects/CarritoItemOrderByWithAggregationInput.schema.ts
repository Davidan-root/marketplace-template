import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CarritoItemCountOrderByAggregateInputObjectSchema as CarritoItemCountOrderByAggregateInputObjectSchema } from './CarritoItemCountOrderByAggregateInput.schema';
import { CarritoItemAvgOrderByAggregateInputObjectSchema as CarritoItemAvgOrderByAggregateInputObjectSchema } from './CarritoItemAvgOrderByAggregateInput.schema';
import { CarritoItemMaxOrderByAggregateInputObjectSchema as CarritoItemMaxOrderByAggregateInputObjectSchema } from './CarritoItemMaxOrderByAggregateInput.schema';
import { CarritoItemMinOrderByAggregateInputObjectSchema as CarritoItemMinOrderByAggregateInputObjectSchema } from './CarritoItemMinOrderByAggregateInput.schema';
import { CarritoItemSumOrderByAggregateInputObjectSchema as CarritoItemSumOrderByAggregateInputObjectSchema } from './CarritoItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cantidadCI: SortOrderSchema.optional(),
  carritoId: SortOrderSchema.optional(),
  publicacionId: SortOrderSchema.optional(),
  _count: z.lazy(() => CarritoItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CarritoItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CarritoItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CarritoItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CarritoItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CarritoItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CarritoItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemOrderByWithAggregationInput>;
export const CarritoItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
