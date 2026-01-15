import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema as PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './PublicacionUncheckedCreateNestedManyWithoutProductoInput.schema';
import { ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ResenaUncheckedCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  publicaciones: z.lazy(() => PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoUncheckedCreateWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedCreateWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedCreateWithoutCategoriaInput>;
export const ProductoUncheckedCreateWithoutCategoriaInputObjectZodSchema = makeSchema();
