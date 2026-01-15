import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoSelectObjectSchema as CarritoSelectObjectSchema } from './CarritoSelect.schema';
import { CarritoIncludeObjectSchema as CarritoIncludeObjectSchema } from './CarritoInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CarritoSelectObjectSchema).optional(),
  include: z.lazy(() => CarritoIncludeObjectSchema).optional()
}).strict();
export const CarritoArgsObjectSchema = makeSchema();
export const CarritoArgsObjectZodSchema = makeSchema();
