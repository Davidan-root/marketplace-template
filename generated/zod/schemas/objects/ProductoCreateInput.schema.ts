import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriaCreateNestedOneWithoutProductosInputObjectSchema as CategoriaCreateNestedOneWithoutProductosInputObjectSchema } from './CategoriaCreateNestedOneWithoutProductosInput.schema';
import { PublicacionCreateNestedManyWithoutProductoInputObjectSchema as PublicacionCreateNestedManyWithoutProductoInputObjectSchema } from './PublicacionCreateNestedManyWithoutProductoInput.schema';
import { ResenaCreateNestedManyWithoutProductoInputObjectSchema as ResenaCreateNestedManyWithoutProductoInputObjectSchema } from './ResenaCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoria: z.lazy(() => CategoriaCreateNestedOneWithoutProductosInputObjectSchema),
  publicaciones: z.lazy(() => PublicacionCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoCreateInputObjectSchema: z.ZodType<Prisma.ProductoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateInput>;
export const ProductoCreateInputObjectZodSchema = makeSchema();
