import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PedidoItemOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PedidoItemOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemOrderByRelationAggregateInput>;
export const PedidoItemOrderByRelationAggregateInputObjectZodSchema = makeSchema();
