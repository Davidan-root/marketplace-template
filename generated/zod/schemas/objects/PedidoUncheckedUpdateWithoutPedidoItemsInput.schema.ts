import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PagoUncheckedUpdateManyWithoutPedidoNestedInputObjectSchema as PagoUncheckedUpdateManyWithoutPedidoNestedInputObjectSchema } from './PagoUncheckedUpdateManyWithoutPedidoNestedInput.schema';
import { EnvioUncheckedUpdateOneWithoutPedidoNestedInputObjectSchema as EnvioUncheckedUpdateOneWithoutPedidoNestedInputObjectSchema } from './EnvioUncheckedUpdateOneWithoutPedidoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroPedido: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalPrecio: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuarioId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  pagos: z.lazy(() => PagoUncheckedUpdateManyWithoutPedidoNestedInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUncheckedUpdateOneWithoutPedidoNestedInputObjectSchema).optional()
}).strict();
export const PedidoUncheckedUpdateWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoUncheckedUpdateWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUncheckedUpdateWithoutPedidoItemsInput>;
export const PedidoUncheckedUpdateWithoutPedidoItemsInputObjectZodSchema = makeSchema();
