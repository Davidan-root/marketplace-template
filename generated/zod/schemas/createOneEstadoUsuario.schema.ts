import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioIncludeObjectSchema as EstadoUsuarioIncludeObjectSchema } from './objects/EstadoUsuarioInclude.schema';
import { EstadoUsuarioCreateInputObjectSchema as EstadoUsuarioCreateInputObjectSchema } from './objects/EstadoUsuarioCreateInput.schema';
import { EstadoUsuarioUncheckedCreateInputObjectSchema as EstadoUsuarioUncheckedCreateInputObjectSchema } from './objects/EstadoUsuarioUncheckedCreateInput.schema';

export const EstadoUsuarioCreateOneSchema: z.ZodType<Prisma.EstadoUsuarioCreateArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), data: z.union([EstadoUsuarioCreateInputObjectSchema, EstadoUsuarioUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateArgs>;

export const EstadoUsuarioCreateOneZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), include: EstadoUsuarioIncludeObjectSchema.optional(), data: z.union([EstadoUsuarioCreateInputObjectSchema, EstadoUsuarioUncheckedCreateInputObjectSchema]) }).strict();