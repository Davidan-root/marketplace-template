import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreProducto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProductoUncheckedUpdateManyWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.ProductoUncheckedUpdateManyWithoutCategoriaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductoUncheckedUpdateManyWithoutCategoriaInput>;
export const ProductoUncheckedUpdateManyWithoutCategoriaInputObjectZodSchema = makeSchema();
