import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema as CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema } from './CarritoUpdateOneRequiredWithoutCarritoItemsNestedInput.schema';
import { PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema as PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema } from './PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadCI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carrito: z.lazy(() => CarritoUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema).optional(),
  publicacion: z.lazy(() => PublicacionUpdateOneRequiredWithoutCarritoItemsNestedInputObjectSchema).optional()
}).strict();
export const CarritoItemUpdateInputObjectSchema: z.ZodType<Prisma.CarritoItemUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CarritoItemUpdateInput>;
export const CarritoItemUpdateInputObjectZodSchema = makeSchema();
