import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectSchema as CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectSchema } from './CategoriaUpdateOneRequiredWithoutProductosNestedInput.schema';
import { ResenaUpdateManyWithoutProductoNestedInputObjectSchema as ResenaUpdateManyWithoutProductoNestedInputObjectSchema } from './ResenaUpdateManyWithoutProductoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoria: z.lazy(() => CategoriaUpdateOneRequiredWithoutProductosNestedInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaUpdateManyWithoutProductoNestedInputObjectSchema).optional()
}).strict();
export const ProductoUpdateWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.ProductoUpdateWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateWithoutPublicacionesInput>;
export const ProductoUpdateWithoutPublicacionesInputObjectZodSchema = makeSchema();
