import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcionEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombreEV: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const EstadoVendedorUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.EstadoVendedorUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoVendedorUncheckedUpdateManyInput>;
export const EstadoVendedorUncheckedUpdateManyInputObjectZodSchema = makeSchema();
