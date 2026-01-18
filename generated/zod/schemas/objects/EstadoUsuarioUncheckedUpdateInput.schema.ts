import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInputObjectSchema as UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInputObjectSchema } from './UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuarios: z.lazy(() => UsuarioUncheckedUpdateManyWithoutEstadoUsuarioNestedInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUncheckedUpdateInput>;
export const EstadoUsuarioUncheckedUpdateInputObjectZodSchema = makeSchema();
