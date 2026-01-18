import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CarritoItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CarritoItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemOrderByRelationAggregateInput>;
export const CarritoItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
