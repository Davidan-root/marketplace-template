import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioFindManySchema as UsuarioFindManySchema } from '../findManyUsuario.schema';
import { EstadoUsuarioCountOutputTypeArgsObjectSchema as EstadoUsuarioCountOutputTypeArgsObjectSchema } from './EstadoUsuarioCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  usuarios: z.union([z.boolean(), z.lazy(() => UsuarioFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EstadoUsuarioCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EstadoUsuarioIncludeObjectSchema: z.ZodType<Prisma.EstadoUsuarioInclude> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioInclude>;
export const EstadoUsuarioIncludeObjectZodSchema = makeSchema();
