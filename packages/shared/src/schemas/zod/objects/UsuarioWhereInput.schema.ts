import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EstadoUsuarioScalarRelationFilterObjectSchema as EstadoUsuarioScalarRelationFilterObjectSchema } from './EstadoUsuarioScalarRelationFilter.schema';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './EstadoUsuarioWhereInput.schema';
import { VendedorNullableScalarRelationFilterObjectSchema as VendedorNullableScalarRelationFilterObjectSchema } from './VendedorNullableScalarRelationFilter.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './VendedorWhereInput.schema';
import { CarritoListRelationFilterObjectSchema as CarritoListRelationFilterObjectSchema } from './CarritoListRelationFilter.schema';
import { PedidoListRelationFilterObjectSchema as PedidoListRelationFilterObjectSchema } from './PedidoListRelationFilter.schema'

const usuariowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioWhereInputObjectSchema), z.lazy(() => UsuarioWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  direccionUsuario: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombreUsuario: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numeroContacto: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  estadoUsuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  estadoUsuario: z.union([z.lazy(() => EstadoUsuarioScalarRelationFilterObjectSchema), z.lazy(() => EstadoUsuarioWhereInputObjectSchema)]).optional(),
  vendedor: z.union([z.lazy(() => VendedorNullableScalarRelationFilterObjectSchema), z.lazy(() => VendedorWhereInputObjectSchema)]).optional(),
  carritos: z.lazy(() => CarritoListRelationFilterObjectSchema).optional(),
  pedidos: z.lazy(() => PedidoListRelationFilterObjectSchema).optional()
}).strict();
export const UsuarioWhereInputObjectSchema: z.ZodType<Prisma.UsuarioWhereInput> = usuariowhereinputSchema as unknown as z.ZodType<Prisma.UsuarioWhereInput>;
export const UsuarioWhereInputObjectZodSchema = usuariowhereinputSchema;
