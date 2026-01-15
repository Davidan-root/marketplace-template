import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema as PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema } from './PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadPI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioUnitario: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  subtotalPI: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  publicacion: z.lazy(() => PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema).optional()
}).strict();
export const PedidoItemUpdateWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemUpdateWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpdateWithoutPedidoInput>;
export const PedidoItemUpdateWithoutPedidoInputObjectZodSchema = makeSchema();
