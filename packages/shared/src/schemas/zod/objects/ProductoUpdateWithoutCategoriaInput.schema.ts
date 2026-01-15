import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PublicacionUpdateManyWithoutProductoNestedInputObjectSchema as PublicacionUpdateManyWithoutProductoNestedInputObjectSchema } from './PublicacionUpdateManyWithoutProductoNestedInput.schema';
import { ResenaUpdateManyWithoutProductoNestedInputObjectSchema as ResenaUpdateManyWithoutProductoNestedInputObjectSchema } from './ResenaUpdateManyWithoutProductoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicaciones: z.lazy(() => PublicacionUpdateManyWithoutProductoNestedInputObjectSchema).optional(),
  resenas: z.lazy(() => ResenaUpdateManyWithoutProductoNestedInputObjectSchema).optional()
}).strict();
export const ProductoUpdateWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUpdateWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUpdateWithoutCategoriaInput>;
export const ProductoUpdateWithoutCategoriaInputObjectZodSchema = makeSchema();
