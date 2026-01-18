import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { CategoriaScalarRelationFilterObjectSchema as CategoriaScalarRelationFilterObjectSchema } from './CategoriaScalarRelationFilter.schema';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './CategoriaWhereInput.schema';
import { PublicacionListRelationFilterObjectSchema as PublicacionListRelationFilterObjectSchema } from './PublicacionListRelationFilter.schema';
import { ResenaListRelationFilterObjectSchema as ResenaListRelationFilterObjectSchema } from './ResenaListRelationFilter.schema'

const productowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductoWhereInputObjectSchema), z.lazy(() => ProductoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductoWhereInputObjectSchema), z.lazy(() => ProductoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  descripcionProducto: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nombreProducto: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoriaId: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  categoria: z.union([z.lazy(() => CategoriaScalarRelationFilterObjectSchema), z.lazy(() => CategoriaWhereInputObjectSchema)]).optional(),
  publicaciones: z.lazy(() => PublicacionListRelationFilterObjectSchema).optional(),
  resenas: z.lazy(() => ResenaListRelationFilterObjectSchema).optional()
}).strict();
export const ProductoWhereInputObjectSchema: z.ZodType<Prisma.ProductoWhereInput> = productowhereinputSchema as unknown as z.ZodType<Prisma.ProductoWhereInput>;
export const ProductoWhereInputObjectZodSchema = productowhereinputSchema;
