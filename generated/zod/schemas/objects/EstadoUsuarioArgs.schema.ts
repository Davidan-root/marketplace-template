import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './EstadoUsuarioSelect.schema';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './EstadoUsuarioInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EstadoUsuarioSelectObjectSchema).optional(),
  include: z.lazy(() => EstadoUsuarioIncludeObjectSchema).optional()
}).strict();
export const EstadoUsuarioArgsObjectSchema = makeSchema();
export const EstadoUsuarioArgsObjectZodSchema = makeSchema();
