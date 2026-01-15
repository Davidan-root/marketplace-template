import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { VendedorScalarRelationFilterObjectSchema as VendedorScalarRelationFilterObjectSchema } from './VendedorScalarRelationFilter.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema';
import { ProductoScalarRelationFilterObjectSchema as ProductoScalarRelationFilterObjectSchema } from './ProductoScalarRelationFilter.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema';
import { CarritoItemListRelationFilterObjectSchema as CarritoItemListRelationFilterObjectSchema } from './CarritoItemListRelationFilter.schema';
import { PedidoItemListRelationFilterObjectSchema as PedidoItemListRelationFilterObjectSchema } from './PedidoItemListRelationFilter.schema'

const publicacionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PublicacionWhereInputObjectSchema), z.lazy(() => PublicacionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PublicacionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PublicacionWhereInputObjectSchema), z.lazy(() => PublicacionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  condicionesVenta: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enviosVenta: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  precioVenta: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  stockVenta: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  vendedorId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  productoId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  vendedor: z.union([z.lazy(() => VendedorScalarRelationFilterObjectSchema), z.lazy(() => VendedorWhereInputObjectSchema)]).optional(),
  producto: z.union([z.lazy(() => ProductoScalarRelationFilterObjectSchema), z.lazy(() => ProductoWhereInputObjectSchema)]).optional(),
  carritoItems: z.lazy(() => CarritoItemListRelationFilterObjectSchema).optional(),
  pedidoItems: z.lazy(() => PedidoItemListRelationFilterObjectSchema).optional()
}).strict();
export const PublicacionWhereInputObjectSchema: z.ZodType<Prisma.PublicacionWhereInput> = publicacionwhereinputSchema as unknown as z.ZodType<Prisma.PublicacionWhereInput>;
export const PublicacionWhereInputObjectZodSchema = publicacionwhereinputSchema;
