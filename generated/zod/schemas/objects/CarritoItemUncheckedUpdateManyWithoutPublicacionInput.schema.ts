import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadCI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carritoId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CarritoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemUncheckedUpdateManyWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUncheckedUpdateManyWithoutPublicacionInput>;
export const CarritoItemUncheckedUpdateManyWithoutPublicacionInputObjectZodSchema = makeSchema();
