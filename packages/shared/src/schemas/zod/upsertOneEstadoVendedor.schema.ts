import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EstadoVendedorSelectObjectSchema as EstadoVendedorSelectObjectSchema } from './objects/EstadoVendedorSelect.schema';
import { EstadoVendedorIncludeObjectSchema as EstadoVendedorIncludeObjectSchema } from './objects/EstadoVendedorInclude.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './objects/EstadoVendedorWhereUniqueInput.schema';
import { EstadoVendedorCreateInputObjectSchema as EstadoVendedorCreateInputObjectSchema } from './objects/EstadoVendedorCreateInput.schema';
import { EstadoVendedorUncheckedCreateInputObjectSchema as EstadoVendedorUncheckedCreateInputObjectSchema } from './objects/EstadoVendedorUncheckedCreateInput.schema';
import { EstadoVendedorUpdateInputObjectSchema as EstadoVendedorUpdateInputObjectSchema } from './objects/EstadoVendedorUpdateInput.schema';
import { EstadoVendedorUncheckedUpdateInputObjectSchema as EstadoVendedorUncheckedUpdateInputObjectSchema } from './objects/EstadoVendedorUncheckedUpdateInput.schema';

export const EstadoVendedorUpsertOneSchema: z.ZodType<Prisma.EstadoVendedorUpsertArgs> = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), where: EstadoVendedorWhereUniqueInputObjectSchema, create: z.union([ EstadoVendedorCreateInputObjectSchema, EstadoVendedorUncheckedCreateInputObjectSchema ]), update: z.union([ EstadoVendedorUpdateInputObjectSchema, EstadoVendedorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorUpsertArgs>;

export const EstadoVendedorUpsertOneZodSchema = z.object({ select: EstadoVendedorSelectObjectSchema.optional(), include: EstadoVendedorIncludeObjectSchema.optional(), where: EstadoVendedorWhereUniqueInputObjectSchema, create: z.union([ EstadoVendedorCreateInputObjectSchema, EstadoVendedorUncheckedCreateInputObjectSchema ]), update: z.union([ EstadoVendedorUpdateInputObjectSchema, EstadoVendedorUncheckedUpdateInputObjectSchema ]) }).strict();