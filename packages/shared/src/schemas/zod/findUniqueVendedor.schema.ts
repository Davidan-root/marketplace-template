import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { VendedorSelectObjectSchema as VendedorSelectObjectSchema } from './objects/VendedorSelect.schema';
import { VendedorIncludeObjectSchema as VendedorIncludeObjectSchema } from './objects/VendedorInclude.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './objects/VendedorWhereUniqueInput.schema';

export const VendedorFindUniqueSchema: z.ZodType<Prisma.VendedorFindUniqueArgs> = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), where: VendedorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VendedorFindUniqueArgs>;

export const VendedorFindUniqueZodSchema = z.object({ select: VendedorSelectObjectSchema.optional(), include: VendedorIncludeObjectSchema.optional(), where: VendedorWhereUniqueInputObjectSchema }).strict();