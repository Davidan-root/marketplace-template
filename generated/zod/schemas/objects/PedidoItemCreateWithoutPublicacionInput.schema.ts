import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoCreateNestedOneWithoutPedidoItemsInputObjectSchema as PedidoCreateNestedOneWithoutPedidoItemsInputObjectSchema } from './PedidoCreateNestedOneWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedido: z.lazy(() => PedidoCreateNestedOneWithoutPedidoItemsInputObjectSchema)
}).strict();
export const PedidoItemCreateWithoutPublicacionInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateWithoutPublicacionInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateWithoutPublicacionInput>;
export const PedidoItemCreateWithoutPublicacionInputObjectZodSchema = makeSchema();
