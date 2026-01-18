import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ResenaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ResenaOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaOrderByRelationAggregateInput>;
export const ResenaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
