import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const productoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductoScalarWhereInputObjectSchema), z.lazy(() => ProductoScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductoScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductoScalarWhereInputObjectSchema), z.lazy(() => ProductoScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  descripcionProducto: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombreProducto: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoriaId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional()
}).strict();
export const ProductoScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductoScalarWhereInput> = productoscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProductoScalarWhereInput>;
export const ProductoScalarWhereInputObjectZodSchema = productoscalarwhereinputSchema;
