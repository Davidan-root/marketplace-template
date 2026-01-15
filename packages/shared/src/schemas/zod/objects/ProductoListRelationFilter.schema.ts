import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductoWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductoWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductoWhereInputObjectSchema).optional()
}).strict();
export const ProductoListRelationFilterObjectSchema: z.ZodType<Prisma.ProductoListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductoListRelationFilter>;
export const ProductoListRelationFilterObjectZodSchema = makeSchema();
