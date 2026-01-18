import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const usuarioscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  direccionUsuario: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombreUsuario: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numeroContacto: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  estadoUsuarioId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const UsuarioScalarWhereInputObjectSchema: z.ZodType<Prisma.UsuarioScalarWhereInput> = usuarioscalarwhereinputSchema as unknown as z.ZodType<Prisma.UsuarioScalarWhereInput>;
export const UsuarioScalarWhereInputObjectZodSchema = usuarioscalarwhereinputSchema;
