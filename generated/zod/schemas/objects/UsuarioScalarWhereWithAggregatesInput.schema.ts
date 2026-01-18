import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const usuarioscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  direccionUsuario: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nombreUsuario: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  numeroContacto: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  estadoUsuarioId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const UsuarioScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UsuarioScalarWhereWithAggregatesInput> = usuarioscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UsuarioScalarWhereWithAggregatesInput>;
export const UsuarioScalarWhereWithAggregatesInputObjectZodSchema = usuarioscalarwherewithaggregatesinputSchema;
