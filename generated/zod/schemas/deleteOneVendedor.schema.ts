import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './objects/VendedorSelect.schema';
import { VendedorIncludeObjectSchema as VendedorIncludeObjectSchema } from './objects/VendedorInclude.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './objects/VendedorWhereUniqueInput.schema';

export const VendedorDeleteOneSchema: z.ZodType<Prisma.VendedorDeleteArgs> = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), where: VendedorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VendedorDeleteArgs>;

export const VendedorDeleteOneZodSchema = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), where: VendedorWhereUniqueInputObjectSchema }).strict();