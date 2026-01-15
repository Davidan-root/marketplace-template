import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionSelectObjectSchema as PublicacionSelectObjectSchema } from './PublicacionSelect.schema';
import { PublicacionIncludeObjectSchema as PublicacionIncludeObjectSchema } from './PublicacionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PublicacionSelectObjectSchema).optional(),
  include: z.lazy(() => PublicacionIncludeObjectSchema).optional()
}).strict();
export const PublicacionArgsObjectSchema = makeSchema();
export const PublicacionArgsObjectZodSchema = makeSchema();
