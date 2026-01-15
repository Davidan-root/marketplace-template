import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema as PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './PublicacionUncheckedCreateNestedManyWithoutProductoInput.schema';
import { ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ResenaUncheckedCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoriaId: z.bigint(),
  publicaciones: z.lazy(() => PublicacionUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedCreateInput>;
export const ProductoUncheckedCreateInputObjectZodSchema = makeSchema();
