import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CarritoOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CarritoOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoOrderByRelationAggregateInput>;
export const CarritoOrderByRelationAggregateInputObjectZodSchema = makeSchema();
