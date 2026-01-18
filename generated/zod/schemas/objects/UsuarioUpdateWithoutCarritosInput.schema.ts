import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema as EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema } from './EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInput.schema';
import { VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema as VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema } from './VendedorUpdateOneWithoutUsuarioNestedInput.schema';
import { PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema as PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema } from './PedidoUpdateManyWithoutUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  direccionUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroContacto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  estadoUsuario: z.lazy(() => EstadoUsuarioUpdateOneRequiredWithoutUsuariosNestedInputObjectSchema).optional(),
  vendedor: z.lazy(() => VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema).optional()
}).strict();
export const UsuarioUpdateWithoutCarritosInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateWithoutCarritosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateWithoutCarritosInput>;
export const UsuarioUpdateWithoutCarritosInputObjectZodSchema = makeSchema();
