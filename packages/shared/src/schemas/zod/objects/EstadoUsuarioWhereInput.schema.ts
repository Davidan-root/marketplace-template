import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UsuarioListRelationFilterObjectSchema as UsuarioListRelationFilterObjectSchema } from './UsuarioListRelationFilter.schema'

const estadousuariowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EstadoUsuarioWhereInputObjectSchema), z.lazy(() => EstadoUsuarioWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EstadoUsuarioWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EstadoUsuarioWhereInputObjectSchema), z.lazy(() => EstadoUsuarioWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  descripcionEU: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombreEU: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  usuarios: z.lazy(() => UsuarioListRelationFilterObjectSchema).optional()
}).strict();
export const EstadoUsuarioWhereInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioWhereInput> = estadousuariowhereinputSchema as unknown as z.ZodType<Prisma.EstadoUsuarioWhereInput>;
export const EstadoUsuarioWhereInputObjectZodSchema = estadousuariowhereinputSchema;
