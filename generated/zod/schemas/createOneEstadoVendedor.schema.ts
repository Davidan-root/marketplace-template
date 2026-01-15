import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './objects/EstadoVendedorSelect.schema';
import { EstadoVendedorIncludeObjectSchema as EstadoVendedorIncludeObjectSchema } from './objects/EstadoVendedorInclude.schema';
import { EstadoVendedorCreateInputObjectSchema as EstadoVendedorCreateInputObjectSchema } from './objects/EstadoVendedorCreateInput.schema';
import { EstadoVendedorUncheckedCreateInputObjectSchema as EstadoVendedorUncheckedCreateInputObjectSchema } from './objects/EstadoVendedorUncheckedCreateInput.schema';

export const EstadoVendedorCreateOneSchema: z.ZodType<Prisma.EstadoVendedorCreateArgs> = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), data: z.union([EstadoVendedorCreateInputObjectSchema, EstadoVendedorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorCreateArgs>;

export const EstadoVendedorCreateOneZodSchema = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), data: z.union([EstadoVendedorCreateInputObjectSchema, EstadoVendedorUncheckedCreateInputObjectSchema]) }).strict();