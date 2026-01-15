import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const publicacionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PublicacionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PublicacionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PublicacionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PublicacionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PublicacionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  condicionesVenta: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  enviosVenta: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  precioVenta: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  stockVenta: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  vendedorId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  productoId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const PublicacionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PublicacionScalarWhereWithAggregatesInput> = publicacionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PublicacionScalarWhereWithAggregatesInput>;
export const PublicacionScalarWhereWithAggregatesInputObjectZodSchema = publicacionscalarwherewithaggregatesinputSchema;
