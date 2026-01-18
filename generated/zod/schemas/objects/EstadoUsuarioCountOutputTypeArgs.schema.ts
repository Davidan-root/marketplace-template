import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoUsuarioCountOutputTypeSelectObjectSchema as EstadoUsuarioCountOutputTypeSelectObjectSchema } from './EstadoUsuarioCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EstadoUsuarioCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EstadoUsuarioCountOutputTypeArgsObjectSchema = makeSchema();
export const EstadoUsuarioCountOutputTypeArgsObjectZodSchema = makeSchema();
