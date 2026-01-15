import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema as VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema } from './VendedorCreateNestedOneWithoutPublicacionesInput.schema';
import { CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema as CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './CarritoItemCreateNestedManyWithoutPublicacionInput.schema';
import { PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema as PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './PedidoItemCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedor: z.lazy(() => VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema),
  carritoItems: z.lazy(() => CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionCreateWithoutProductoInputObjectSchema: z.ZodType<Prisma.PublicacionCreateWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateWithoutProductoInput>;
export const PublicacionCreateWithoutProductoInputObjectZodSchema = makeSchema();
