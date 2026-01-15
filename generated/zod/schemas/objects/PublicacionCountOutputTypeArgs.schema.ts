import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PublicacionCountOutputTypeSelectObjectSchema as PublicacionCountOutputTypeSelectObjectSchema } from './PublicacionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PublicacionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PublicacionCountOutputTypeArgsObjectSchema = makeSchema();
export const PublicacionCountOutputTypeArgsObjectZodSchema = makeSchema();
