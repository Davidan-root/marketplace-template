import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './objects/EstadoUsuarioWhereInput.schema';

export const EstadoUsuarioDeleteManySchema: z.ZodType<Prisma.EstadoUsuarioDeleteManyArgs> = z.object({ where: EstadoUsuarioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioDeleteManyArgs>;

export const EstadoUsuarioDeleteManyZodSchema = z.object({ where: EstadoUsuarioWhereInputObjectSchema.optional() }).strict();