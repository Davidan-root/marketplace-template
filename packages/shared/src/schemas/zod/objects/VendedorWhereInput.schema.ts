import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { UsuarioScalarRelationFilterObjectSchema as UsuarioScalarRelationFilterObjectSchema } from './UsuarioScalarRelationFilter.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { EstadoVendedorScalarRelationFilterObjectSchema as EstadoVendedorScalarRelationFilterObjectSchema } from './EstadoVendedorScalarRelationFilter.schema';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './EstadoVendedorWhereInput.schema';
import { PublicacionListRelationFilterObjectSchema as PublicacionListRelationFilterObjectSchema } from './PublicacionListRelationFilter.schema'

const vendedorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VendedorWhereInputObjectSchema), z.lazy(() => VendedorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VendedorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VendedorWhereInputObjectSchema), z.lazy(() => VendedorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  nombreTienda: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reputacion: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  usuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  estadoVendedorId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  usuario: z.union([z.lazy(() => UsuarioScalarRelationFilterObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
  estadoVendedor: z.union([z.lazy(() => EstadoVendedorScalarRelationFilterObjectSchema), z.lazy(() => EstadoVendedorWhereInputObjectSchema)]).optional(),
  publicaciones: z.lazy(() => PublicacionListRelationFilterObjectSchema).optional()
}).strict();
export const VendedorWhereInputObjectSchema: z.ZodType<Prisma.VendedorWhereInput> = vendedorwhereinputSchema as unknown as z.ZodType<Prisma.VendedorWhereInput>;
export const VendedorWhereInputObjectZodSchema = vendedorwhereinputSchema;
