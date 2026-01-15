import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ProductoListRelationFilterObjectSchema as ProductoListRelationFilterObjectSchema } from './ProductoListRelationFilter.schema'

const categoriawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoriaWhereInputObjectSchema), z.lazy(() => CategoriaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoriaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoriaWhereInputObjectSchema), z.lazy(() => CategoriaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  descripcionCategoria: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombreCategoria: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productos: z.lazy(() => ProductoListRelationFilterObjectSchema).optional()
}).strict();
export const CategoriaWhereInputObjectSchema: z.ZodType<Prisma.CategoriaWhereInput> = categoriawhereinputSchema as unknown as z.ZodType<Prisma.CategoriaWhereInput>;
export const CategoriaWhereInputObjectZodSchema = categoriawhereinputSchema;
