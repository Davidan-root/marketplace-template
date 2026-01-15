import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductoCountOutputTypeSelectObjectSchema as ProductoCountOutputTypeSelectObjectSchema } from './ProductoCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductoCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProductoCountOutputTypeArgsObjectSchema = makeSchema();
export const ProductoCountOutputTypeArgsObjectZodSchema = makeSchema();
