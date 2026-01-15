import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUncheckedUpdateWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUncheckedUpdateWithoutVendedoresInput>;
export const EstadoVendedorUncheckedUpdateWithoutVendedoresInputObjectZodSchema = makeSchema();
