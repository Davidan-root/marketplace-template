import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './objects/CategoriaSelect.schema';
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from './objects/CategoriaInclude.schema';
import { CategoriaCreateInputObjectSchema as CategoriaCreateInputObjectSchema } from './objects/CategoriaCreateInput.schema';
import { CategoriaUncheckedCreateInputObjectSchema as CategoriaUncheckedCreateInputObjectSchema } from './objects/CategoriaUncheckedCreateInput.schema';

export const CategoriaCreateOneSchema: z.ZodType<Prisma.CategoriaCreateArgs> = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), data: z.union([CategoriaCreateInputObjectSchema, CategoriaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CategoriaCreateArgs>;

export const CategoriaCreateOneZodSchema = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), data: z.union([CategoriaCreateInputObjectSchema, CategoriaUncheckedCreateInputObjectSchema]) }).strict();