import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema as CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema } from './CarritoUpdateOneRequiredWithoutCarritoItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadCI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carrito: z.lazy(() => CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema).optional()
}).strict();
export const CarritoItemUpdateWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateWithoutPublicacionInput>;
export const CarritoItemUpdateWithoutPublicacionInputObjectZodSchema = makeSchema();
