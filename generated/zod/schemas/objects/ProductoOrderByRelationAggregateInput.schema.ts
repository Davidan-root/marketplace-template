import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProductoOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProductoOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoOrderByRelationAggregateInput>;
export const ProductoOrderByRelationAggregateInputObjectZodSchema = makeSchema();
