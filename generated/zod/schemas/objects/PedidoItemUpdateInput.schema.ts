import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PedidoUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema as PedidoUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema } from './PedidoUpdateOneRequiredWithoutPedidoItemsNestedInput.schema';
import { PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema as PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema } from './PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadPI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioUnitario: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  subtotalPI: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  pedido: z.lazy(() => PedidoUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema).optional(),
  publicacion: z.lazy(() => PublicacionUpdateOneRequiredWithoutPedidoItemsNestedInputObjectSchema).optional()
}).strict();
export const PedidoItemUpdateInputObjectSchema: z.ZodType<Prisma.PedidoItemUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUpdateInput>;
export const PedidoItemUpdateInputObjectZodSchema = makeSchema();
