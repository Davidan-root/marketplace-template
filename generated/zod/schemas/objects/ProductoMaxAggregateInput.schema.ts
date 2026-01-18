import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  descripcionProducto: z.literal(true).optional(),
  nombreProducto: z.literal(true).optional(),
  categoriaId: z.literal(true).optional()
}).strict();
export const ProductoMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductoMaxAggregateInputType>;
export const ProductoMaxAggregateInputObjectZodSchema = makeSchema();
