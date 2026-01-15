import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionCategoria: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreCategoria: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CategoriaUncheckedUpdateWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriaUncheckedUpdateWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaUncheckedUpdateWithoutProductosInput>;
export const CategoriaUncheckedUpdateWithoutProductosInputObjectZodSchema = makeSchema();
