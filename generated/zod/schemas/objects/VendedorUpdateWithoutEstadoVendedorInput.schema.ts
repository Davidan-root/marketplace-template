import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectSchema as UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutVendedorNestedInput.schema';
import { PublicacionUpdateManyWithoutVendedorNestedInputObjectSchema as PublicacionUpdateManyWithoutVendedorNestedInputObjectSchema } from './PublicacionUpdateManyWithoutVendedorNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreTienda: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reputacion: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuario: z.lazy(() => UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectSchema).optional(),
  publicaciones: z.lazy(() => PublicacionUpdateManyWithoutVendedorNestedInputObjectSchema).optional()
}).strict();
export const VendedorUpdateWithoutEstadoVendedorInputObjectSchema: z.ZodType<Prisma.VendedorUpdateWithoutEstadoVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateWithoutEstadoVendedorInput>;
export const VendedorUpdateWithoutEstadoVendedorInputObjectZodSchema = makeSchema();
