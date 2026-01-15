import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './objects/EstadoUsuarioInclude.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './objects/EstadoUsuarioWhereUniqueInput.schema';

export const EstadoUsuarioDeleteOneSchema: z.ZodType<Prisma.EstadoUsuarioDeleteArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioDeleteArgs>;

export const EstadoUsuarioDeleteOneZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict();