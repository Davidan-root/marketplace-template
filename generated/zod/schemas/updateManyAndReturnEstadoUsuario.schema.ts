import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioUpdateManyMutationInputObjectSchema as EstadoUsuarioUpdateManyMutationInputObjectSchema } from './objects/EstadoUsuarioUpdateManyMutationInput.schema';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './objects/EstadoUsuarioWhereInput.schema';

export const EstadoUsuarioUpdateManyAndReturnSchema: z.ZodType<Prisma.EstadoUsuarioUpdateManyAndReturnArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), data: EstadoUsuarioUpdateManyMutationInputObjectSchema, where: EstadoUsuarioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioUpdateManyAndReturnArgs>;

export const EstadoUsuarioUpdateManyAndReturnZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), data: EstadoUsuarioUpdateManyMutationInputObjectSchema, where: EstadoUsuarioWhereInputObjectSchema.optional() }).strict();