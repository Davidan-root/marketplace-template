import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './objects/EstadoVendedorSelect.schema';
import { EstadoVendedorIncludeObjectSchema as EstadoVendedorIncludeObjectSchema } from './objects/EstadoVendedorInclude.schema';
import { EstadoVendedorUpdateInputObjectSchema as EstadoVendedorUpdateInputObjectSchema } from './objects/EstadoVendedorUpdateInput.schema';
import { EstadoVendedorUncheckedUpdateInputObjectSchema as EstadoVendedorUncheckedUpdateInputObjectSchema } from './objects/EstadoVendedorUncheckedUpdateInput.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './objects/EstadoVendedorWhereUniqueInput.schema';

export const EstadoVendedorUpdateOneSchema: z.ZodType<Prisma.EstadoVendedorUpdateArgs> = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), data: z.union([EstadoVendedorUpdateInputObjectSchema, EstadoVendedorUncheckedUpdateInputObjectSchema]), where: EstadoVendedorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorUpdateArgs>;

export const EstadoVendedorUpdateOneZodSchema = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), data: z.union([EstadoVendedorUpdateInputObjectSchema, EstadoVendedorUncheckedUpdateInputObjectSchema]), where: EstadoVendedorWhereUniqueInputObjectSchema }).strict();