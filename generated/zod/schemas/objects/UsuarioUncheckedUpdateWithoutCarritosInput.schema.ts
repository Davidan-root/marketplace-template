import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VendedorUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema as VendedorUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema } from './VendedorUncheckedUpdateOneWithoutUsuarioNestedInput.schema';
import { PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema as PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema } from './PedidoUncheckedUpdateManyWithoutUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  direccionUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroContacto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  estadoUsuarioId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendedor: z.lazy(() => VendedorUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedUpdateWithoutCarritosInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedUpdateWithoutCarritosInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedUpdateWithoutCarritosInput>;
export const UsuarioUncheckedUpdateWithoutCarritosInputObjectZodSchema = makeSchema();
