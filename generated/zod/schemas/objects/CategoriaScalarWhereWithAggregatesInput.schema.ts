import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const categoriascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoriaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  descripcionCategoria: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nombreCategoria: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CategoriaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CategoriaScalarWhereWithAggregatesInput> = categoriascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CategoriaScalarWhereWithAggregatesInput>;
export const CategoriaScalarWhereWithAggregatesInputObjectZodSchema = categoriascalarwherewithaggregatesinputSchema;
