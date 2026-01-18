import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioCreateManyInputObjectSchema as EstadoUsuarioCreateManyInputObjectSchema } from './objects/EstadoUsuarioCreateManyInput.schema';

export const EstadoUsuarioCreateManySchema: z.ZodType<Prisma.EstadoUsuarioCreateManyArgs> = z.object({ data: z.union([ EstadoUsuarioCreateManyInputObjectSchema, z.array(EstadoUsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioCreateManyArgs>;

export const EstadoUsuarioCreateManyZodSchema = z.object({ data: z.union([ EstadoUsuarioCreateManyInputObjectSchema, z.array(EstadoUsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();