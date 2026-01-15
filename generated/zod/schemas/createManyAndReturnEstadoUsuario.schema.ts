import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EstadoUsuarioSelectObjectSchema as EstadoUsuarioSelectObjectSchema } from './objects/EstadoUsuarioSelect.schema';
import { EstadoUsuarioCreateManyInputObjectSchema as EstadoUsuarioCreateManyInputObjectSchema } from './objects/EstadoUsuarioCreateManyInput.schema';

export const EstadoUsuarioCreateManyAndReturnSchema: z.ZodType<Prisma.EstadoUsuarioCreateManyAndReturnArgs> = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), data: z.union([ EstadoUsuarioCreateManyInputObjectSchema, z.array(EstadoUsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateManyAndReturnArgs>;

export const EstadoUsuarioCreateManyAndReturnZodSchema = z.object({ select: EstadoUsuarioSelectObjectSchema.optional(), data: z.union([ EstadoUsuarioCreateManyInputObjectSchema, z.array(EstadoUsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();