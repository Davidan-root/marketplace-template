import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './CategoriaSelect.schema';
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from './CategoriaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CategoriaSelectObjectSchema).optional(),
  include: z.lazy(() => CategoriaIncludeObjectSchema).optional()
}).strict();
export const CategoriaArgsObjectSchema = makeSchema();
export const CategoriaArgsObjectZodSchema = makeSchema();
