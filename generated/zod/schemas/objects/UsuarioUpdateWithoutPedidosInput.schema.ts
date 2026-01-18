import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema as EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema } from './EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInput.schema';
import { VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema as VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema } from './VendedorUpdateOneWithoutUsuarioNestedInput.schema';
import { CarritoUpdateManyWithoutUsuarioNestedInputObjectSchema as CarritoUpdateManyWithoutUsuarioNestedInputObjectSchema } from './CarritoUpdateManyWithoutUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  direccionUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroContacto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  estadoUsuario: z.lazy(() => EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema).optional(),
  vendedor: z.lazy(() => VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
  carritos: z.lazy(() => CarritoUpdateManyWithoutUsuarioNestedInputObjectSchema).optional()
}).strict();
export const UsuarioUpdateWithoutPedidosInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateWithoutPedidosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateWithoutPedidosInput>;
export const UsuarioUpdateWithoutPedidosInputObjectZodSchema = makeSchema();
