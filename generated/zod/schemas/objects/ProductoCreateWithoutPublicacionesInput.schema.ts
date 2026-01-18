import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoriaCreateNestedOneWithoutProductosInputObjectSchema as CategoriaCreateNestedOneWithoutProductosInputObjectSchema } from './CategoriaCreateNestedOneWithoutProductosInput.schema';
import { ResenaCreateNestedManyWithoutProductoInputObjectSchema as ResenaCreateNestedManyWithoutProductoInputObjectSchema } from './ResenaCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoria: z.lazy(() => CategoriaCreateNestedOneWithoutProductosInputObjectSchema),
  resenas: z.lazy(() => ResenaCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoCreateWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.ProductoCreateWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateWithoutPublicacionesInput>;
export const ProductoCreateWithoutPublicacionesInputObjectZodSchema = makeSchema();
