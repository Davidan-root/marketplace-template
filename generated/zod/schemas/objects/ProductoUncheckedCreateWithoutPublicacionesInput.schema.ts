import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema as ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './ResenaUncheckedCreateNestedManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  descripcionProducto: z.string(),
  nombreProducto: z.string(),
  categoriaId: z.bigint(),
  resenas: z.lazy(() => ResenaUncheckedCreateNestedManyWithoutProductoInputObjectSchema).optional()
}).strict();
export const ProductoUncheckedCreateWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedCreateWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedCreateWithoutPublicacionesInput>;
export const ProductoUncheckedCreateWithoutPublicacionesInputObjectZodSchema = makeSchema();
