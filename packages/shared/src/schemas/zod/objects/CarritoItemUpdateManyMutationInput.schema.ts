import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadCI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CarritoItemUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateManyMutationInput>;
export const CarritoItemUpdateManyMutationInputObjectZodSchema = makeSchema();
