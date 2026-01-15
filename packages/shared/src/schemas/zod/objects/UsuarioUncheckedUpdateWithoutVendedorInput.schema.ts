import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CarritoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema as CarritoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema } from './CarritoUncheckedUpdateManyWithoutUsuarioNestedInput.schema';
import { PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema as PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema } from './PedidoUncheckedUpdateManyWithoutUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  direccionUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreUsuario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroContacto: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  estadoUsuarioId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carritos: z.lazy(() => CarritoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema).optional()
}).strict();
export const UsuarioUncheckedUpdateWithoutVendedorInputObjectSchema: z.ZodType<Prisma.UsuarioUncheckedUpdateWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioUncheckedUpdateWithoutVendedorInput>;
export const UsuarioUncheckedUpdateWithoutVendedorInputObjectZodSchema = makeSchema();
