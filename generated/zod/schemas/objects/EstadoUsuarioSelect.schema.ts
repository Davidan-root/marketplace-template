import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UsuarioFindManySchema as UsuarioFindManySchema } from '../findManyUsuario.schema';
import { EstadoUsuarioCountOutputTypeArgsObjectSchema as EstadoUsuarioCountOutputTypeArgsObjectSchema } from './EstadoUsuarioCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  descripcionEU: z.boolean().optional(),
  nombreEU: z.boolean().optional(),
  usuarios: z.union([z.boolean(), z.lazy(() => UsuarioFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EstadoUsuarioCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EstadoUsuarioSelectObjectSchema: z.ZodType<Prisma.EstadoUsuarioSelect> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioSelect>;
export const EstadoUsuarioSelectObjectZodSchema = makeSchema();
