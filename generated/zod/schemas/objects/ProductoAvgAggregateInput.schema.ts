import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  categoriaId: z.literal(true).optional()
}).strict();
export const ProductoAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductoAvgAggregateInputType>;
export const ProductoAvgAggregateInputObjectZodSchema = makeSchema();
