import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './ProductoSelect.schema';
import { ProductoIncludeObjectSchema as ProductoIncludeObjectSchema } from './ProductoInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductoSelectObjectSchema).optional(),
  include: z.lazy(() => ProductoIncludeObjectSchema).optional()
}).strict();
export const ProductoArgsObjectSchema = makeSchema();
export const ProductoArgsObjectZodSchema = makeSchema();
