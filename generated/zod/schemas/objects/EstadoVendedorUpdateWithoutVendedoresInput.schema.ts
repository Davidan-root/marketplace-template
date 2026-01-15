import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const EstadoVendedorUpdateWithoutVendedoresInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUpdateWithoutVendedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUpdateWithoutVendedoresInput>;
export const EstadoVendedorUpdateWithoutVendedoresInputObjectZodSchema = makeSchema();
