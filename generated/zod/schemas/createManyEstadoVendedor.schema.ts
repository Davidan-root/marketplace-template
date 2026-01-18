import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorCreateManyInputObjectSchema as EstadoVendedorCreateManyInputObjectSchema } from './objects/EstadoVendedorCreateManyInput.schema';

export const EstadoVendedorCreateManySchema: z.ZodType<Prisma.EstadoVendedorCreateManyArgs> = z.object({ data: z.union([ EstadoVendedorCreateManyInputObjectSchema, z.array(EstadoVendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorCreateManyArgs>;

export const EstadoVendedorCreateManyZodSchema = z.object({ data: z.union([ EstadoVendedorCreateManyInputObjectSchema, z.array(EstadoVendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();