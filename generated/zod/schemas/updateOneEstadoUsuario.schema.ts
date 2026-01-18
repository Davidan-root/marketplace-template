import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './objects/EstadoUsuarioInclude.schema';
import { EstadoUsuarioUpdateInputObjectSchema as EstadoUsuarioUpdateInputObjectSchema } from './objects/EstadoUsuarioUpdateInput.schema';
import { EstadoUsuarioUncheckedUpdateInputObjectSchema as EstadoUsuarioUncheckedUpdateInputObjectSchema } from './objects/EstadoUsuarioUncheckedUpdateInput.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './objects/EstadoUsuarioWhereUniqueInput.schema';

export const EstadoUsuarioUpdateOneSchema: z.ZodType<Prisma.EstadoUsuarioUpdateArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), data: z.union([EstadoUsuarioUpdateInputObjectSchema, EstadoUsuarioUncheckedUpdateInputObjectSchema]), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioUpdateArgs>;

export const EstadoUsuarioUpdateOneZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), data: z.union([EstadoUsuarioUpdateInputObjectSchema, EstadoUsuarioUncheckedUpdateInputObjectSchema]), where: EstadoUsuarioWhereUniqueInputObjectSchema }).strict();