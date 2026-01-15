import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const VendedorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.VendedorOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorOrderByRelationAggregateInput>;
export const VendedorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
