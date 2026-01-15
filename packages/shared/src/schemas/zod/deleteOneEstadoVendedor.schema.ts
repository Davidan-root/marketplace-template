import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './objects/EstadoVendedorSelect.schema';
import { EstadoVendedorIncludeObjectSchema as EstadoVendedorIncludeObjectSchema } from './objects/EstadoVendedorInclude.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './objects/EstadoVendedorWhereUniqueInput.schema';

export const EstadoVendedorDeleteOneSchema: z.ZodType<Prisma.EstadoVendedorDeleteArgs> = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), where: EstadoVendedorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorDeleteArgs>;

export const EstadoVendedorDeleteOneZodSchema = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), where: EstadoVendedorWhereUniqueInputObjectSchema }).strict();