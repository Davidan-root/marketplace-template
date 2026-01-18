import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PublicacionUncheckedUpdateManyWithoutProductoNestedInputObjectSchema as PublicacionUncheckedUpdateManyWithoutProductoNestedInputObjectSchema } from './PublicacionUncheckedUpdateManyWithoutProductoNestedInput.schema';
import { ResenaUncheckedUpdateManyWithoutProductoNestedInputObjectSchema as ResenaUncheckedUpdateManyWithoutProductoNestedInputObjectSchema } from './ResenaUncheckedUpdateManyWithoutProductoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicaciones: z.lazy(() => PublicacionUncheckedUpdateManyWithoutProductoNestedInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaUncheckedUpdateManyWithoutProductoNestedInputObjectSchema).optional()
}).strict();
export const ProductoUncheckedUpdateWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedUpdateWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedUpdateWithoutCategoriaInput>;
export const ProductoUncheckedUpdateWithoutCategoriaInputObjectZodSchema = makeSchema();
