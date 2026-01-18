import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PedidoCreateNestedOneWithoutPedidoItemsInputObjectSchema as PedidoCreateNestedOneWithoutPedidoItemsInputObjectSchema } from './PedidoCreateNestedOneWithoutPedidoItemsInput.schema';
import { PublicacionCreateNestedOneWithoutPedidoItemsInputObjectSchema as PublicacionCreateNestedOneWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateNestedOneWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  pedido: z.lazy(() => PedidoCreateNestedOneWithoutPedidoItemsInputObjectSchema),
  publicacion: z.lazy(() => PublicacionCreateNestedOneWithoutPedidoItemsInputObjectSchema)
}).strict();
export const PedidoItemCreateInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateInput>;
export const PedidoItemCreateInputObjectZodSchema = makeSchema();
