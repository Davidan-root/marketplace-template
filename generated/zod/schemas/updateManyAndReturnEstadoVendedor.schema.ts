import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './objects/EstadoVendedorSelect.schema';
import { EstadoVendedorUpdateManyMutationInputObjectSchema as EstadoVendedorUpdateManyMutationInputObjectSchema } from './objects/EstadoVendedorUpdateManyMutationInput.schema';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './objects/EstadoVendedorWhereInput.schema';

export const EstadoVendedorUpdateManyAndReturnSchema: z.ZodType<Prisma.EstadoVendedorUpdateManyAndReturnArgs> = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), data: EstadoVendedorUpdateManyMutationInputObjectSchema, where: EstadoVendedorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorUpdateManyAndReturnArgs>;

export const EstadoVendedorUpdateManyAndReturnZodSchema = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), data: EstadoVendedorUpdateManyMutationInputObjectSchema, where: EstadoVendedorWhereInputObjectSchema.optional() }).strict();