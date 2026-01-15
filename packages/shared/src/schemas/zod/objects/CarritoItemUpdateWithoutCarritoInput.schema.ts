import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema as PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema } from './PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadCI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicacion: z.lazy(() => PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema).optional()
}).strict();
export const CarritoItemUpdateWithoutCarritoInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateWithoutCarritoInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateWithoutCarritoInput>;
export const CarritoItemUpdateWithoutCarritoInputObjectZodSchema = makeSchema();
