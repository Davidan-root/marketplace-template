import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './EstadoUsuarioWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EstadoUsuarioWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => EstadoUsuarioWhereInputObjectSchema).optional()
}).strict();
export const EstadoUsuarioScalarRelationFilterObjectSchema: z.ZodType<Prisma.EstadoUsuarioScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUsuarioScalarRelationFilter>;
export const EstadoUsuarioScalarRelationFilterObjectZodSchema = makeSchema();
