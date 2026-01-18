import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorUpdateManyMutationInputObjectSchema as EstadoVendedorUpdateManyMutationInputObjectSchema } from './objects/EstadoVendedorUpdateManyMutationInput.schema';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './objects/EstadoVendedorWhereInput.schema';

export const EstadoVendedorUpdateManySchema: z.ZodType<Prisma.EstadoVendedorUpdateManyArgs> = z.object({ data: EstadoVendedorUpdateManyMutationInputObjectSchema, where: EstadoVendedorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorUpdateManyArgs>;

export const EstadoVendedorUpdateManyZodSchema = z.object({ data: EstadoVendedorUpdateManyMutationInputObjectSchema, where: EstadoVendedorWhereInputObjectSchema.optional() }).strict();