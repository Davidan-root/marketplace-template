import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { VendedorArgsObjectSchema as VendedorArgsObjectSchema } from './VendedorArgs.schema';
import { ProductoArgsObjectSchema as ProductoArgsObjectSchema } from './ProductoArgs.schema';
import { CarritoItemFindManySchema as CarritoItemFindManySchema } from '../findManyCarritoItem.schema';
import { PedidoItemFindManySchema as PedidoItemFindManySchema } from '../findManyPedidoItem.schema';
import { PublicacionCountOutputTypeArgsObjectSchema as PublicacionCountOutputTypeArgsObjectSchema } from './PublicacionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  vendedor: z.union([z.boolean(), z.lazy(() => VendedorArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductoArgsObjectSchema)]).optional(),
  carritoItems: z.union([z.boolean(), z.lazy(() => CarritoItemFindManySchema)]).optional(),
  pedidoItems: z.union([z.boolean(), z.lazy(() => PedidoItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PublicacionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PublicacionIncludeObjectSchema: z.ZodType<Prisma.PublicacionInclude> = makeSchema() as unknown as z.ZodType<Prisma.PublicacionInclude>;
export const PublicacionIncludeObjectZodSchema = makeSchema();
