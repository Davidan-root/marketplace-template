import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoriaId: z.bigint()
}).strict();
export const ProductoCreateManyInputObjectSchema: z.ZodType<Prisma.ProductoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateManyInput>;
export const ProductoCreateManyInputObjectZodSchema = makeSchema();
