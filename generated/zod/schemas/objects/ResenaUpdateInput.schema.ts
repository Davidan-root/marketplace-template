import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductoUpdateOneRequiredWithoutResenasNestedInputObjectSchema as ProductoUpdateOneRequiredWithoutResenasNestedInputObjectSchema } from './ProductoUpdateOneRequiredWithoutResenasNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  comentario: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  puntaje: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  producto: z.lazy(() => ProductoUpdateOneRequiredWithoutResenasNestedInputObjectSchema).optional()
}).strict();
export const ResenaUpdateInputObjectSchema: z.ZodType<Prisma.ResenaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResenaUpdateInput>;
export const ResenaUpdateInputObjectZodSchema = makeSchema();
