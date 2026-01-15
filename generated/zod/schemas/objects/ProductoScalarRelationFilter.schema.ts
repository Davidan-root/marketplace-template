import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProductoWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProductoWhereInputObjectSchema).optional()
}).strict();
export const ProductoScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProductoScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductoScalarRelationFilter>;
export const ProductoScalarRelationFilterObjectZodSchema = makeSchema();
