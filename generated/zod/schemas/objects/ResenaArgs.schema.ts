import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResenaSelectObjectSchema as ResenaSelectObjectSchema } from './ResenaSelect.schema';
import { ResenaIncludeObjectSchema as ResenaIncludeObjectSchema } from './ResenaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResenaSelectObjectSchema).optional(),
  include: z.lazy(() => ResenaIncludeObjectSchema).optional()
}).strict();
export const ResenaArgsObjectSchema = makeSchema();
export const ResenaArgsObjectZodSchema = makeSchema();
