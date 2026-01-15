import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema as CarritoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedorId: z.bigint(),
  productoId: z.bigint(),
  carritoItems: z.lazy(() => CarritoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionUncheckedCreateWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionUncheckedCreateWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUncheckedCreateWithoutPedidoItemsInput>;
export const PublicacionUncheckedCreateWithoutPedidoItemsInputObjectZodSchema = makeSchema();
