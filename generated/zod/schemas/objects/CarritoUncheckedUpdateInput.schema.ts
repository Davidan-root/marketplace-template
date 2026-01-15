import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CarritoItemUncheckedUpdateManyWithoutCarritoNestedInputObjectSchema as CarritoItemUncheckedUpdateManyWithoutCarritoNestedInputObjectSchema } from './CarritoItemUncheckedUpdateManyWithoutCarritoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraBaja: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fechaHoraModificacion: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  usuarioId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carritoItems: z.lazy(() => CarritoItemUncheckedUpdateManyWithoutCarritoNestedInputObjectSchema).optional()
}).strict();
export const CarritoUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CarritoUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUncheckedUpdateInput>;
export const CarritoUncheckedUpdateInputObjectZodSchema = makeSchema();
