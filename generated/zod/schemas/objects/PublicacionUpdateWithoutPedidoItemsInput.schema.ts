import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema as VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema } from './VendedorUpdateOneRequiredWithoutPublicacionesNestedInput.schema';
import { ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema as ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema } from './ProductoUpdateOneRequiredWithoutPublicacionesNestedInput.schema';
import { CarritoItemUpdateManyWithoutPublicacionNestedInputObjectSchema as CarritoItemUpdateManyWithoutPublicacionNestedInputObjectSchema } from './CarritoItemUpdateManyWithoutPublicacionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  condicionesVenta: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  enviosVenta: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioVenta: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  stockVenta: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendedor: z.lazy(() => VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema).optional(),
  producto: z.lazy(() => ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema).optional(),
  carritoItems: z.lazy(() => CarritoItemUpdateManyWithoutPublicacionNestedInputObjectSchema).optional()
}).strict();
export const PublicacionUpdateWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateWithoutPedidoItemsInput>;
export const PublicacionUpdateWithoutPedidoItemsInputObjectZodSchema = makeSchema();
