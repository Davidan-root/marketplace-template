import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CarritoItemSelectObjectSchema as CarritoItemSelectObjectSchema } from './CarritoItemSelect.schema';
import { CarritoItemIncludeObjectSchema as CarritoItemIncludeObjectSchema } from './CarritoItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CarritoItemSelectObjectSchema).optional(),
  include: z.lazy(() => CarritoItemIncludeObjectSchema).optional()
}).strict();
export const CarritoItemArgsObjectSchema = makeSchema();
export const CarritoItemArgsObjectZodSchema = makeSchema();
