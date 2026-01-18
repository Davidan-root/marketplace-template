import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './objects/EstadoVendedorSelect.schema';
import { EstadoVendedorCreateManyInputObjectSchema as EstadoVendedorCreateManyInputObjectSchema } from './objects/EstadoVendedorCreateManyInput.schema';

export const EstadoVendedorCreateManyAndReturnSchema: z.ZodType<Prisma.EstadoVendedorCreateManyAndReturnArgs> = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), data: z.union([ EstadoVendedorCreateManyInputObjectSchema, z.array(EstadoVendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorCreateManyAndReturnArgs>;

export const EstadoVendedorCreateManyAndReturnZodSchema = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), data: z.union([ EstadoVendedorCreateManyInputObjectSchema, z.array(EstadoVendedorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();