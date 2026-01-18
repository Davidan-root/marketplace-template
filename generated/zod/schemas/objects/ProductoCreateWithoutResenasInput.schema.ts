import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CategoriaCreateNestedOneWithoutProductosInputObjectSchema as CategoriaCreateNestedOneWithoutProductosInputObjectSchema } from './CategoriaCreateNestedOneWithoutProductosInput.schema';
import { PublicacionCreateNestedManyWithoutProductoInputObjectSchema as PublicacionCreateNestedManyWithoutProductoInputObjectSchema } from './PublicacionCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoria: z.lazy(() => CategoriaCreateNestedOneWithoutProductosInputObjectSchema),
  publicaciones: z.lazy(() => PublicacionCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoCreateWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoCreateWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoCreateWithoutResenasInput>;
export const ProductoCreateWithoutResenasInputObjectZodSchema = makeSchema();
