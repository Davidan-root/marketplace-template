import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PedidoUpdateOneRequiredWithoutPagosNestedInputObjectSchema as PedidoUpdateOneRequiredWithoutPagosNestedInputObjectSchema } from './PedidoUpdateOneRequiredWithoutPagosNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  metodoPago: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  monto: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  pedido: z.lazy(() => PedidoUpdateOneRequiredWithoutPagosNestedInputObjectSchema).optional()
}).strict();
export const PagoUpdateInputObjectSchema: z.ZodType<Prisma.PagoUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PagoUpdateInput>;
export const PagoUpdateInputObjectZodSchema = makeSchema();
