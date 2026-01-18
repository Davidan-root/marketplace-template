import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { CarritoItemUpdateManyWithoutCarritoNestedInputObjectSchema as CarritoItemUpdateManyWithoutCarritoNestedInputObjectSchema } from './CarritoItemUpdateManyWithoutCarritoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraBaja: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fechaHoraModificacion: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  carritoItems: z.lazy(() => CarritoItemUpdateManyWithoutCarritoNestedInputObjectSchema).optional()
}).strict();
export const CarritoUpdateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.CarritoUpdateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpdateWithoutUsuarioInput>;
export const CarritoUpdateWithoutUsuarioInputObjectZodSchema = makeSchema();
