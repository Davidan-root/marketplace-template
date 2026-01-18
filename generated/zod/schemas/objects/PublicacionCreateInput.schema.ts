import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema as VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema } from './VendedorCreateNestedOneWithoutPublicacionesInput.schema';
import { ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema as ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema } from './ProductoCreateNestedOneWithoutPublicacionesInput.schema';
import { CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema as CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './CarritoItemCreateNestedManyWithoutPublicacionInput.schema';
import { PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema as PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema } from './PedidoItemCreateNestedManyWithoutPublicacionInput.schema'

const makeSchema = () => z.object({
  id: z.bigint().optional(),
  condicionesVenta: z.string(),
  enviosVenta: z.boolean(),
  precioVenta: z.number(),
  stockVenta: z.number().int(),
  vendedor: z.lazy(() => VendedorCreateNestedOneWithoutPublicacionesInputObjectSchema),
  producto: z.lazy(() => ProductoCreateNestedOneWithoutPublicacionesInputObjectSchema),
  carritoItems: z.lazy(() => CarritoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemCreateNestedManyWithoutPublicacionInputObjectSchema).optional()
}).strict();
export const PublicacionCreateInputObjectSchema: z.ZodType<Prisma.PublicacionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionCreateInput>;
export const PublicacionCreateInputObjectZodSchema = makeSchema();
