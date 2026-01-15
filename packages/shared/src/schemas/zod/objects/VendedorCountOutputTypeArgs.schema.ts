import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorCountOutputTypeSelectObjectSchema as VendedorCountOutputTypeSelectObjectSchema } from './VendedorCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VendedorCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const VendedorCountOutputTypeArgsObjectSchema = makeSchema();
export const VendedorCountOutputTypeArgsObjectZodSchema = makeSchema();
