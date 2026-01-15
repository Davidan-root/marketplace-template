import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectSchema as UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutVendedorNestedInput.schema';
import { EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInputObjectSchema as EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInputObjectSchema } from './EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreTienda: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  reputacion: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuario: z.lazy(() => UsuarioUpdateOneRequiredWithoutVendedorNestedInputObjectSchema).optional(),
  estadoVendedor: z.lazy(() => EstadoVendedorUpdateOneRequiredWithoutVendedoresNestedInputObjectSchema).optional()
}).strict();
export const VendedorUpdateWithoutPublicacionesInputObjectSchema: z.ZodType<Prisma.VendedorUpdateWithoutPublicacionesInput> = makeSchema() as unknown as z.ZodType<Prisma.VendedorUpdateWithoutPublicacionesInput>;
export const VendedorUpdateWithoutPublicacionesInputObjectZodSchema = makeSchema();
