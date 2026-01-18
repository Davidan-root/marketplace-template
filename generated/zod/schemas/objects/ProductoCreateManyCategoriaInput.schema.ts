import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string()
}).strict();
export const ProductoCreateManyCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoCreateManyCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateManyCategoriaInput>;
export const ProductoCreateManyCategoriaInputObjectZodSchema = makeSchema();
