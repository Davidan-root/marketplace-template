import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './EstadoVendedorSelect.schema';
import { EstadoVendedorIncludeObjectSchema as EstadoVendedorIncludeObjectSchema } from './EstadoVendedorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EstadoVendedorSelectObjectSchema).optional(),
  include: z.lazy(() => EstadoVendedorIncludeObjectSchema).optional()
}).strict();
export const EstadoVendedorArgsObjectSchema = makeSchema();
export const EstadoVendedorArgsObjectZodSchema = makeSchema();
