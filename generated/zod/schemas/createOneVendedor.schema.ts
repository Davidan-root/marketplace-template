import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './objects/VendedorSelect.schema';
import { VendedorIncludeObjectSchema as VendedorIncludeObjectSchema } from './objects/VendedorInclude.schema';
import { VendedorCreateInputObjectSchema as VendedorCreateInputObjectSchema } from './objects/VendedorCreateInput.schema';
import { VendedorUncheckedCreateInputObjectSchema as VendedorUncheckedCreateInputObjectSchema } from './objects/VendedorUncheckedCreateInput.schema';

export const VendedorCreateOneSchema: z.ZodType<Prisma.VendedorCreateArgs> = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), data: z.union([VendedorCreateInputObjectSchema, VendedorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VendedorCreateArgs>;

export const VendedorCreateOneZodSchema = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), data: z.union([VendedorCreateInputObjectSchema, VendedorUncheckedCreateInputObjectSchema]) }).strict();