import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema as ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema } from './ProductoCreateNestedOneWithoutPublicacionesInput.schema';
import { CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema as CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './CarritoItemCreateNestedManyWithoutPublicacionInput.schema';
import { PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema as PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './PedidoItemCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  producto: z.lazy(() => ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema),
  carritoItems: z.lazy(() => CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionCreateWithoutVendedorInputObjectSchema: z.ZodType<Prisma.PublicacionCreateWithoutVendedorInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateWithoutVendedorInput>;
export const PublicacionCreateWithoutVendedorInputObjectZodSchema = makeSchema();
