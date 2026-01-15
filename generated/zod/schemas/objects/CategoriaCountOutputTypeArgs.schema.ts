import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriaCountOutputTypeSelectObjectSchema as CategoriaCountOutputTypeSelectObjectSchema } from './CategoriaCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CategoriaCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CategoriaCountOutputTypeArgsObjectSchema = makeSchema();
export const CategoriaCountOutputTypeArgsObjectZodSchema = makeSchema();
