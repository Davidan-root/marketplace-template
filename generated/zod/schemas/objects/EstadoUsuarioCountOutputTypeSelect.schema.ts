import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EstadoUsuarioCountOutputTypeCountUsuariosArgsObjectSchema as EstadoUsuarioCountOutputTypeCountUsuariosArgsObjectSchema } from './EstadoUsuarioCountOutputTypeCountUsuariosArgs.schema'

const makeSchema = () => z.object({
  usuarios: z.union([z.boolean(), z.lazy(() => EstadoUsuarioCountOutputTypeCountUsuariosArgsObjectSchema)]).optional()
}).strict();
export const EstadoUsuarioCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EstadoUsuarioCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioCountOutputTypeSelect>;
export const EstadoUsuarioCountOutputTypeSelectObjectZodSchema = makeSchema();
