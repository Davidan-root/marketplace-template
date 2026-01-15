import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const estadousuarioscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EstadoUsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EstadoUsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EstadoUsuarioScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EstadoUsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EstadoUsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  descripcionEU: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nombreEU: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const EstadoUsuarioScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EstadoUsuarioScalarWhereWithAggregatesInput> = estadousuarioscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EstadoUsuarioScalarWhereWithAggregatesInput>;
export const EstadoUsuarioScalarWhereWithAggregatesInputObjectZodSchema = estadousuarioscalarwherewithaggregatesinputSchema;
