import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema as VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema } from './VendedorCreateNestedOneWithoutPublicacionesInput.schema';
import { ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema as ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema } from './ProductoCreateNestedOneWithoutPublicacionesInput.schema';
import { CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema as CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './CarritoItemCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedor: z.lazy(() => VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema),
  producto: z.lazy(() => ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema),
  carritoItems: z.lazy(() => CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionCreateWithoutPedidoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionCreateWithoutPedidoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateWithoutPedidoItemsInput>;
export const PublicacionCreateWithoutPedidoItemsInputObjectZodSchema = makeSchema();
