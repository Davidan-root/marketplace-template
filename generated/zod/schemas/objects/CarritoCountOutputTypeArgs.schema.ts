import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CarritoCountOutputTypeSelectObjectSchema as CarritoCountOutputTypeSelectObjectSchema } from './CarritoCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CarritoCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CarritoCountOutputTypeArgsObjectSchema = makeSchema();
export const CarritoCountOutputTypeArgsObjectZodSchema = makeSchema();
