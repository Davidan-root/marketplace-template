import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductoUncheckedUpdateManyWithoutCategoriaNestedInputObjectSchema as ProductoUncheckedUpdateManyWithoutCategoriaNestedInputObjectSchema } from './ProductoUncheckedUpdateManyWithoutCategoriaNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionCategoria: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreCategoria: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productos: z.lazy(() => ProductoUncheckedUpdateManyWithoutCategoriaNestedInputObjectSchema).optional()
}).strict();
export const CategoriaUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CategoriaUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUncheckedUpdateInput>;
export const CategoriaUncheckedUpdateInputObjectZodSchema = makeSchema();
