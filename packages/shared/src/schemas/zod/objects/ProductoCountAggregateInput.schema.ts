import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionProducto: z.literal(true).optional(),
  nombreProducto: z.literal(true).optional(),
  categoriaId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductoCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCountAggregateInputType>;
export const ProductoCountAggregateInputObjectZodSchema = makeSchema();
