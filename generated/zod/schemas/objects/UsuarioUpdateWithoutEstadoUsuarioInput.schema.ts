import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema as VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema } from './VendedorUpdateOneWithoutUsuarioNestedInput.schema';
import { CarritoUpdateManyWithoutUsuarioNestedInputObjectSchema as CarritoUpdateManyWithoutUsuarioNestedInputObjectSchema } from './CarritoUpdateManyWithoutUsuarioNestedInput.schema';
import { PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema as PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema } from './PedidoUpdateManyWithoutUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  direccionUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroContacto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendedor: z.lazy(() => VendedorUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
  carritos: z.lazy(() => CarritoUpdateManyWithoutUsuarioNestedInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema).optional()
}).strict();
export const UsuarioUpdateWithoutEstadoUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateWithoutEstadoUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateWithoutEstadoUsuarioInput>;
export const UsuarioUpdateWithoutEstadoUsuarioInputObjectZodSchema = makeSchema();
