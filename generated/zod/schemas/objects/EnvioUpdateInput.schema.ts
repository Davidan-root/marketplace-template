import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PedidoUpdateOneRequiredWithoutEnvioNestedInputObjectSchema as PedidoUpdateOneRequiredWithoutEnvioNestedInputObjectSchema } from './PedidoUpdateOneRequiredWithoutEnvioNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  estadoEnvio: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numeroEnvio: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  pedido: z.lazy(() => PedidoUpdateOneRequiredWithoutEnvioNestedInputObjectSchema).optional()
}).strict();
export const EnvioUpdateInputObjectSchema: z.ZodType<Prisma.EnvioUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EnvioUpdateInput>;
export const EnvioUpdateInputObjectZodSchema = makeSchema();
