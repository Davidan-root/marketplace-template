import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  cantidadPI: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioUnitario: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  subtotalPI: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  pedidoId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PedidoItemUncheckedUpdateManyWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemUncheckedUpdateManyWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemUncheckedUpdateManyWithoutPublicacionInput>;
export const PedidoItemUncheckedUpdateManyWithoutPublicacionInputObjectZodSchema = makeSchema();
