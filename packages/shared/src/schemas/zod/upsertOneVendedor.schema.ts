import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './objects/VendedorSelect.schema';
import { VendedorIncludeObjectSchema as VendedorIncludeObjectSchema } from './objects/VendedorInclude.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './objects/VendedorWhereUniqueInput.schema';
import { VendedorCreateInputObjectSchema as VendedorCreateInputObjectSchema } from './objects/VendedorCreateInput.schema';
import { VendedorUncheckedCreateInputObjectSchema as VendedorUncheckedCreateInputObjectSchema } from './objects/VendedorUncheckedCreateInput.schema';
import { VendedorUpdateInputObjectSchema as VendedorUpdateInputObjectSchema } from './objects/VendedorUpdateInput.schema';
import { VendedorUncheckedUpdateInputObjectSchema as VendedorUncheckedUpdateInputObjectSchema } from './objects/VendedorUncheckedUpdateInput.schema';

export const VendedorUpsertOneSchema: z.ZodType<Prisma.VendedorUpsertArgs> = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), where: VendedorWhereUniqueInputObjectSchema, create: z.union([ VendedorCreateInputObjectSchema, VendedorUncheckedCreateInputObjectSchema ]), update: z.union([ VendedorUpdateInputObjectSchema, VendedorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VendedorUpsertArgs>;

export const VendedorUpsertOneZodSchema = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), where: VendedorWhereUniqueInputObjectSchema, create: z.union([ VendedorCreateInputObjectSchema, VendedorUncheckedCreateInputObjectSchema ]), update: z.union([ VendedorUpdateInputObjectSchema, VendedorUncheckedUpdateInputObjectSchema ]) }).strict();