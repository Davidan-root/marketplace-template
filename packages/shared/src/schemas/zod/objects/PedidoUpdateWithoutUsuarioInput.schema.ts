import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { PedidoItemUpdateManyWithoutPedidoNestedInputObjectSchema as PedidoItemUpdateManyWithoutPedidoNestedInputObjectSchema } from './PedidoItemUpdateManyWithoutPedidoNestedInput.schema';
import { PagoUpdateManyWithoutPedidoNestedInputObjectSchema as PagoUpdateManyWithoutPedidoNestedInputObjectSchema } from './PagoUpdateManyWithoutPedidoNestedInput.schema';
import { EnvioUpdateOneWithoutPedidoNestedInputObjectSchema as EnvioUpdateOneWithoutPedidoNestedInputObjectSchema } from './EnvioUpdateOneWithoutPedidoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroPedido: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalPrecio: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  pedidoItems: z.lazy(() => PedidoItemUpdateManyWithoutPedidoNestedInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoUpdateManyWithoutPedidoNestedInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUpdateOneWithoutPedidoNestedInputObjectSchema).optional()
}).strict();
export const PedidoUpdateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.PedidoUpdateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateWithoutUsuarioInput>;
export const PedidoUpdateWithoutUsuarioInputObjectZodSchema = makeSchema();
