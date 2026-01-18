import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PedidoItemUncheckedUpdateManyWithoutPedidoNestedInputObjectSchema as PedidoItemUncheckedUpdateManyWithoutPedidoNestedInputObjectSchema } from './PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput.schema';
import { EnvioUncheckedUpdateOneWithoutPedidoNestedInputObjectSchema as EnvioUncheckedUpdateOneWithoutPedidoNestedInputObjectSchema } from './EnvioUncheckedUpdateOneWithoutPedidoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroPedido: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalPrecio: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuarioId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedUpdateManyWithoutPedidoNestedInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUncheckedUpdateOneWithoutPedidoNestedInputObjectSchema).optional()
}).strict();
export const PedidoUncheckedUpdateWithoutPagosInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedUpdateWithoutPagosInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedUpdateWithoutPagosInput>;
export const PedidoUncheckedUpdateWithoutPagosInputObjectZodSchema = makeSchema();
