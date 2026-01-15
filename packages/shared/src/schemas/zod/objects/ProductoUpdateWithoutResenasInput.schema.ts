import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectSchema as CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectSchema } from './CategoriaUpdateOneRequiredWithoutProductosNestedInput.schema';
import { PublicacionUpdateManyWithoutProductoNestedInputObjectSchema as PublicacionUpdateManyWithoutProductoNestedInputObjectSchema } from './PublicacionUpdateManyWithoutProductoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoria: z.lazy(() => CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectSchema).optional(),
  publicaciones: z.lazy(() => PublicacionUpdateManyWithoutProductoNestedInputObjectSchema).optional()
}).strict();
export const ProductoUpdateWithoutResenasInputObjectSchema: z.ZodType<Prisma.ProductoUpdateWithoutResenasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateWithoutResenasInput>;
export const ProductoUpdateWithoutResenasInputObjectZodSchema = makeSchema();
