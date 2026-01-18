import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './objects/VendedorSelect.schema';
import { VendedorIncludeObjectSchema as VendedorIncludeObjectSchema } from './objects/VendedorInclude.schema';
import { VendedorUpdateInputObjectSchema as VendedorUpdateInputObjectSchema } from './objects/VendedorUpdateInput.schema';
import { VendedorUncheckedUpdateInputObjectSchema as VendedorUncheckedUpdateInputObjectSchema } from './objects/VendedorUncheckedUpdateInput.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './objects/VendedorWhereUniqueInput.schema';

export const VendedorUpdateOneSchema: z.ZodType<Prisma.VendedorUpdateArgs> = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), data: z.union([VendedorUpdateInputObjectSchema, VendedorUncheckedUpdateInputObjectSchema]), where: VendedorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VendedorUpdateArgs>;

export const VendedorUpdateOneZodSchema = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), data: z.union([VendedorUpdateInputObjectSchema, VendedorUncheckedUpdateInputObjectSchema]), where: VendedorWhereUniqueInputObjectSchema }).strict();