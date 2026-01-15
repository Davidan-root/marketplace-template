import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PublicacionUncheckedUpdateManyWithoutProductoNestedInputObjectSchema as PublicacionUncheckedUpdateManyWithoutProductoNestedInputObjectSchema } from './PublicacionUncheckedUpdateManyWithoutProductoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoriaId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicaciones: z.lazy(() => PublicacionUncheckedUpdateManyWithoutProductoNestedInputObjectSchema).optional()
}).strict();
export const ProductoUncheckedUpdateWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedUpdateWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedUpdateWithoutResenasInput>;
export const ProductoUncheckedUpdateWithoutResenasInputObjectZodSchema = makeSchema();
