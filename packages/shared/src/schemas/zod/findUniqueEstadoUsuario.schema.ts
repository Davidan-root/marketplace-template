import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './objects/EstadoUsuarioInclude.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './objects/EstadoUsuarioWhereUniqueInput.schema';

export const EstadoUsuarioFindUniqueSchema: z.ZodType<Prisma.EstadoUsuarioFindUniqueArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioFindUniqueArgs>;

export const EstadoUsuarioFindUniqueZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict();