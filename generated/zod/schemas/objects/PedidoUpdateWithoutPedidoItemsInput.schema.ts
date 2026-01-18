import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectSchema as UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutPedidosNestedInput.schema';
import { PagoUpdateManyWithoutPedidoNestedInputObjectSchema as PagoUpdateManyWithoutPedidoNestedInputObjectSchema } from './PagoUpdateManyWithoutPedidoNestedInput.schema';
import { EnvioUpdateOneWithoutPedidoNestedInputObjectSchema as EnvioUpdateOneWithoutPedidoNestedInputObjectSchema } from './EnvioUpdateOneWithoutPedidoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaHoraAlta: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroPedido: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalPrecio: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuario: z.lazy(() => UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectSchema).optional(),
  pagos: z.lazy(() => PagoUpdateManyWithoutPedidoNestedInputObjectSchema).optional(),
  envio: z.lazy(() => EnvioUpdateOneWithoutPedidoNestedInputObjectSchema).optional()
}).strict();
export const PedidoUpdateWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PedidoUpdateWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoUpdateWithoutPedidoItemsInput>;
export const PedidoUpdateWithoutPedidoItemsInputObjectZodSchema = makeSchema();
