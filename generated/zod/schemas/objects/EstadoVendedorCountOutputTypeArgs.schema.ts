import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoVendedorCountOutputTypeSelectObjectSchema as EstadoVendedorCountOutputTypeSelectObjectSchema } from './EstadoVendedorCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EstadoVendedorCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EstadoVendedorCountOutputTypeArgsObjectSchema = makeSchema();
export const EstadoVendedorCountOutputTypeArgsObjectZodSchema = makeSchema();
