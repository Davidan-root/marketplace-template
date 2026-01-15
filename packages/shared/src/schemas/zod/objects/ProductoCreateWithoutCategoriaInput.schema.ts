import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCreateNestedManyWithoutProductoInputObjectSchema as PublicacionCreateNestedManyWithoutProductoInputObjectSchema } from './PublicacionCreateNestedManyWithoutProductoInput.schema';
import { ResenaCreateNestedManyWithoutProductoInputObjectSchema as ResenaCreateNestedManyWithoutProductoInputObjectSchema } from './ResenaCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  publicaciones: z.lazy(() => PublicacionCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoCreateWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoCreateWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateWithoutCategoriaInput>;
export const ProductoCreateWithoutCategoriaInputObjectZodSchema = makeSchema();
