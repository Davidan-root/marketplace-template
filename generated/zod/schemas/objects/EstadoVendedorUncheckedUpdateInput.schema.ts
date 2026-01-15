import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInputObjectSchema as VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInputObjectSchema } from './VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendedores: z.lazy(() => VendedorUncheckedUpdateManyWithoutEstadoVendedorNestedInputObjectSchema).optional()
}).strict();
export const EstadoVendedorUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUncheckedUpdateInput>;
export const EstadoVendedorUncheckedUpdateInputObjectZodSchema = makeSchema();
