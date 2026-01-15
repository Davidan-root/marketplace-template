import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VendedorUpdateManyWithoutEstadoVendedorNestedInputObjectSchema as VendedorUpdateManyWithoutEstadoVendedorNestedInputObjectSchema } from './VendedorUpdateManyWithoutEstadoVendedorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendedores: z.lazy(() => VendedorUpdateManyWithoutEstadoVendedorNestedInputObjectSchema).optional()
}).strict();
export const EstadoVendedorUpdateInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUpdateInput>;
export const EstadoVendedorUpdateInputObjectZodSchema = makeSchema();
