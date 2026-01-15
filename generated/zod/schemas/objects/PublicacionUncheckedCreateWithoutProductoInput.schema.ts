import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema as CarritoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema } from './CarritoItemUncheckedCreateNestedManyWithoutPublicacionInput.schema';
import { PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema as PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema } from './PedidoItemUncheckedCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedorId: z.bigint(),
  carritoItems: z.lazy(() => CarritoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemUncheckedCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionUncheckedCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.PublicacionUncheckedCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionUncheckedCreateWithoutProductoInput>;
export const PublicacionUncheckedCreateWithoutProductoInputObjectZodSchema = makeSchema();
