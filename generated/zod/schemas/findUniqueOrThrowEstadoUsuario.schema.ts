import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './objects/EstadoUsuarioInclude.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './objects/EstadoUsuarioWhereUniqueInput.schema';

export const EstadoUsuarioFindUniqueOrThrowSchema: z.ZodType<Prisma.EstadoUsuarioFindUniqueOrThrowArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioFindUniqueOrThrowArgs>;

export const EstadoUsuarioFindUniqueOrThrowZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict();