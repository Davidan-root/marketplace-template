import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PublicacionUncheckedUpdateManyWithoutVendedorNestedInputObjectSchema as PublicacionUncheckedUpdateManyWithoutVendedorNestedInputObjectSchema } from './PublicacionUncheckedUpdateManyWithoutVendedorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreTienda: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reputacion: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  estadoVendedorId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicaciones: z.lazy(() => PublicacionUncheckedUpdateManyWithoutVendedorNestedInputObjectSchema).optional()
}).strict();
export const VendedorUncheckedUpdateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.VendedorUncheckedUpdateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUncheckedUpdateWithoutUsuarioInput>;
export const VendedorUncheckedUpdateWithoutUsuarioInputObjectZodSchema = makeSchema();
