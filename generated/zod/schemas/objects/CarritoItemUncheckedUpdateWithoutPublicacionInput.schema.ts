import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadCI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carritoId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CarritoItemUncheckedUpdateWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemUncheckedUpdateWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUncheckedUpdateWithoutPublicacionInput>;
export const CarritoItemUncheckedUpdateWithoutPublicacionInputObjectZodSchema = makeSchema();
