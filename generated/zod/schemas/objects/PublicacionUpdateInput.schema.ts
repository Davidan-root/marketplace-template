import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema as VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema } from './VendedorUpdateOneRequiredWithoutPublicacionesNestedInput.schema';
import { ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema as ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema } from './ProductoUpdateOneRequiredWithoutPublicacionesNestedInput.schema';
import { CarritoItemUpdateManyWithoutPublicacionNestedInputObjectSchema as CarritoItemUpdateManyWithoutPublicacionNestedInputObjectSchema } from './CarritoItemUpdateManyWithoutPublicacionNestedInput.schema';
import { PedidoItemUpdateManyWithoutPublicacionNestedInputObjectSchema as PedidoItemUpdateManyWithoutPublicacionNestedInputObjectSchema } from './PedidoItemUpdateManyWithoutPublicacionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  condicionesVenta: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  enviosVenta: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  precioVenta: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  stockVenta: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  vendedor: z.lazy(() => VendedorUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema).optional(),
  producto: z.lazy(() => ProductoUpdateOneRequiredWithoutPublicacionesNestedInputObjectSchema).optional(),
  carritoItems: z.lazy(() => CarritoItemUpdateManyWithoutPublicacionNestedInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemUpdateManyWithoutPublicacionNestedInputObjectSchema).optional()
}).strict();
export const PublicacionUpdateInputObjectSchema: z.ZodType<Prisma.PublicacionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUpdateInput>;
export const PublicacionUpdateInputObjectZodSchema = makeSchema();
