import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioCountOutputTypeCountUsuariosArgsObjectSchema = makeSchema();
export const EstadoUsuarioCountOutputTypeCountUsuariosArgsObjectZodSchema = makeSchema();
