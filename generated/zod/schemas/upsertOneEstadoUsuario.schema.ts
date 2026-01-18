import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './objects/EstadoUsuarioInclude.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './objects/EstadoUsuarioWhereUniqueInput.schema';
import { EstadoUsuarioCreateInputObjectSchema as EstadoUsuarioCreateInputObjectSchema } from './objects/EstadoUsuarioCreateInput.schema';
import { EstadoUsuarioUncheckedCreateInputObjectSchema as EstadoUsuarioUncheckedCreateInputObjectSchema } from './objects/EstadoUsuarioUncheckedCreateInput.schema';
import { EstadoUsuarioUpdateInputObjectSchema as EstadoUsuarioUpdateInputObjectSchema } from './objects/EstadoUsuarioUpdateInput.schema';
import { EstadoUsuarioUncheckedUpdateInputObjectSchema as EstadoUsuarioUncheckedUpdateInputObjectSchema } from './objects/EstadoUsuarioUncheckedUpdateInput.schema';

export const EstadoUsuarioUpsertOneSchema: z.ZodType<Prisma.EstadoUsuarioUpsertArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema, create: z.union([ EstadoUsuarioCreateInputObjectSchema, EstadoUsuarioUncheckedCreateInputObjectSchema ]), update: z.union([ EstadoUsuarioUpdateInputObjectSchema, EstadoUsuarioUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioUpsertArgs>;

export const EstadoUsuarioUpsertOneZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), where: EstadoUsuarioWhereUniqueInputObjectSchema, create: z.union([ EstadoUsuarioCreateInputObjectSchema, EstadoUsuarioUncheckedCreateInputObjectSchema ]), update: z.union([ EstadoUsuarioUpdateInputObjectSchema, EstadoUsuarioUncheckedUpdateInputObjectSchema ]) }).strict();