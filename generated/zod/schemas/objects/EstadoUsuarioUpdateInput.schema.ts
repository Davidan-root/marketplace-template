import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UsuarioUpdateManyWithoutEstadoUsuarioNestedInputObjectSchema as UsuarioUpdateManyWithoutEstadoUsuarioNestedInputObjectSchema } from './UsuarioUpdateManyWithoutEstadoUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuarios: z.lazy(() => UsuarioUpdateManyWithoutEstadoUsuarioNestedInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioUpdateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUpdateInput>;
export const EstadoUsuarioUpdateInputObjectZodSchema = makeSchema();
