import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const productoscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductoScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  descripcionProducto: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nombreProducto: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  categoriaId: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const ProductoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductoScalarWhereWithAggregatesInput> = productoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductoScalarWhereWithAggregatesInput>;
export const ProductoScalarWhereWithAggregatesInputObjectZodSchema = productoscalarwherewithaggregatesinputSchema;
