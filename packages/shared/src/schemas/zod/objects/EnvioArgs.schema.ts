import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EnvioSelectObjectSchema as EnvioSelectObjectSchema } from './EnvioSelect.schema';
import { EnvioIncludeObjectSchema as EnvioIncludeObjectSchema } from './EnvioInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EnvioSelectObjectSchema).optional(),
  include: z.lazy(() => EnvioIncludeObjectSchema).optional()
}).strict();
export const EnvioArgsObjectSchema = makeSchema();
export const EnvioArgsObjectZodSchema = makeSchema();
