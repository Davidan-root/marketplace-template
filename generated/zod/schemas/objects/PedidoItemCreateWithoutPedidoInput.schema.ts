import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PublicacionCreateNestedOneWithoutPedidoItemsInputObjectSchema as PublicacionCreateNestedOneWithoutPedidoItemsInputObjectSchema } from './PublicacionCreateNestedOneWithoutPedidoItemsInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  cantidadPI: z.number().int(),
  precioUnitario: z.number(),
  subtotalPI: z.number(),
  publicacion: z.lazy(() => PublicacionCreateNestedOneWithoutPedidoItemsInputObjectSchema)
}).strict();
export const PedidoItemCreateWithoutPedidoInputObjectSchema: z.ZodType<Prisma.PedidoItemCreateWithoutPedidoInput> = makeSchema() as unknown as z.ZodType<Prisma.PedidoItemCreateWithoutPedidoInput>;
export const PedidoItemCreateWithoutPedidoInputObjectZodSchema = makeSchema();
