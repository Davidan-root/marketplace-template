import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema as PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './PublicacionUncheckedCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoriaId: z.bigint(),
  publicaciones: z.lazy(() => PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoUncheckedCreateWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedCreateWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedCreateWithoutResenasInput>;
export const ProductoUncheckedCreateWithoutResenasInputObjectZodSchema = makeSchema();
