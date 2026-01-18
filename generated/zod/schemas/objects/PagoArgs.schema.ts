import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { PagoSelectObjectSchema as PagoSelectObjectSchema } from './PagoSelect.schema';
import { PagoIncludeObjectSchema as PagoIncludeObjectSchema } from './PagoInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PagoSelectObjectSchema).optional(),
  include: z.lazy(() => PagoIncludeObjectSchema).optional()
}).strict();
export const PagoArgsObjectSchema = makeSchema();
export const PagoArgsObjectZodSchema = makeSchema();
