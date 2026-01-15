import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema as PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedorId: z.bigint(),
  productoId: z.bigint(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionUncheckedCreateWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionUncheckedCreateWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUncheckedCreateWithoutCarritoItemsInput>;
export const PublicacionUncheckedCreateWithoutCarritoItemsInputObjectZodSchema = makeSchema();
