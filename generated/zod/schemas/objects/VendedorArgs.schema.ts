import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './VendedorSelect.schema';
import { VendedorIncludeObjectSchema as VendedorIncludeObjectSchema } from './VendedorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VendedorSelectObjectSchema).optional(),
  include: z.lazy(() => VendedorIncludeObjectSchema).optional()
}).strict();
export const VendedorArgsObjectSchema = makeSchema();
export const VendedorArgsObjectZodSchema = makeSchema();
