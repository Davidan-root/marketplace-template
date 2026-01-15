import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema as VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema } from './VendedorCreateNestedOneWithoutPublicacionesInput.schema';
import { ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema as ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema } from './ProductoCreateNestedOneWithoutPublicacionesInput.schema';
import { PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema as PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './PedidoItemCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedor: z.lazy(() => VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema),
  producto: z.lazy(() => ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema),
  pedidoItems: z.lazy(() => PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionCreateWithoutCarritoItemsInputObjectSchema: z.ZodType<Prisma.PublicacionCreateWithoutCarritoItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateWithoutCarritoItemsInput>;
export const PublicacionCreateWithoutCarritoItemsInputObjectZodSchema = makeSchema();
