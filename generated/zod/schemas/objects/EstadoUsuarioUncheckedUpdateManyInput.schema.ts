import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEU: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const EstadoUsuarioUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioUncheckedUpdateManyInput>;
export const EstadoUsuarioUncheckedUpdateManyInputObjectZodSchema = makeSchema();
