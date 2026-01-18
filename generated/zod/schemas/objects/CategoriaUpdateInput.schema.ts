import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductoUpdateManyWithoutCategoriaNestedInputObjectSchema as ProductoUpdateManyWithoutCategoriaNestedInputObjectSchema } from './ProductoUpdateManyWithoutCategoriaNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionCategoria: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreCategoria: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productos: z.lazy(() => ProductoUpdateManyWithoutCategoriaNestedInputObjectSchema).optional()
}).strict();
export const CategoriaUpdateInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateInput>;
export const CategoriaUpdateInputObjectZodSchema = makeSchema();
