import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionProducto: z.literal(true).optional(),
  nombreProducto: z.literal(true).optional(),
  categoriaId: z.literal(true).optional()
}).strict();
export const ProductoMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductoMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductoMinAggregateInputType>;
export const ProductoMinAggregateInputObjectZodSchema = makeSchema();
