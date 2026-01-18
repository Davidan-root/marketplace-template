import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CarritoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectSchema as CarritoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectSchema } from './CarritoItemUncheckedUpdateManyWithoutPublicacionNestedInput.schema';
import { PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectSchema as PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectSchema } from './PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  condicionesVenta: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  enviosVenta: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioVenta: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  stockVenta: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendedorId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  productoId: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  carritoItems: z.lazy(() => CarritoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedUpdateManyWithoutPublicacionNestedInputObjectSchema).optional()
}).strict();
export const PublicacionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PublicacionUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUncheckedUpdateInput>;
export const PublicacionUncheckedUpdateInputObjectZodSchema = makeSchema();
