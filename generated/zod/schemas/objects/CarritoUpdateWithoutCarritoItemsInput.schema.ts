import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutCarritosNestedInputObjectSchema as UsuarioUpdateOneRequiredWithoutCarritosNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutCarritosNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraBaja: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  fechaHoraModificacion: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  usuario: z.lazy(() => UsuarioUpdateOneRequiredWithoutCarritosNestedInputObjectSchema).optional()
}).strict();
export const CarritoUpdateWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.CarritoUpdateWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoUpdateWithoutCarritoItemsInput>;
export const CarritoUpdateWithoutCarritoItemsInputObjectZodSchema = makeSchema();
