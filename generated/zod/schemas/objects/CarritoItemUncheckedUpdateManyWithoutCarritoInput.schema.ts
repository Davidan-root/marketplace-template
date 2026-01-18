import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadCI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicacionId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CarritoItemUncheckedUpdateManyWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemUncheckedUpdateManyWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUncheckedUpdateManyWithoutCarritoInput>;
export const CarritoItemUncheckedUpdateManyWithoutCarritoInputObjectZodSchema = makeSchema();
