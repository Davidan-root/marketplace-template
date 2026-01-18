import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioUpdateManyMutationInputObjectSchema as EstadoUsuarioUpdateManyMutationInputObjectSchema } from './objects/EstadoUsuarioUpdateManyMutationInput.schema';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './objects/EstadoUsuarioWhereInput.schema';

export const EstadoUsuarioUpdateManySchema: z.ZodType<Prisma.EstadoUsuarioUpdateManyArgs> = z.object({ data: EstadoUsuarioUpdateManyMutationInputObjectSchema, where: EstadoUsuarioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioUpdateManyArgs>;

export const EstadoUsuarioUpdateManyZodSchema = z.object({ data: EstadoUsuarioUpdateManyMutationInputObjectSchema, where: EstadoUsuarioWhereInputObjectSchema.optional() }).strict();