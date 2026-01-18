import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './objects/EstadoVendedorWhereInput.schema';

export const EstadoVendedorDeleteManySchema: z.ZodType<Prisma.EstadoVendedorDeleteManyArgs> = z.object({ where: EstadoVendedorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorDeleteManyArgs>;

export const EstadoVendedorDeleteManyZodSchema = z.object({ where: EstadoVendedorWhereInputObjectSchema.optional() }).strict();