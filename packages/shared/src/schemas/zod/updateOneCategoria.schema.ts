import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './objects/CategoriaSelect.schema';
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from './objects/CategoriaInclude.schema';
import { CategoriaUpdateInputObjectSchema as CategoriaUpdateInputObjectSchema } from './objects/CategoriaUpdateInput.schema';
import { CategoriaUncheckedUpdateInputObjectSchema as CategoriaUncheckedUpdateInputObjectSchema } from './objects/CategoriaUncheckedUpdateInput.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './objects/CategoriaWhereUniqueInput.schema';

export const CategoriaUpdateOneSchema: z.ZodType<Prisma.CategoriaUpdateArgs> = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), data: z.union([CategoriaUpdateInputObjectSchema, CategoriaUncheckedUpdateInputObjectSchema]), where: CategoriaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoriaUpdateArgs>;

export const CategoriaUpdateOneZodSchema = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), data: z.union([CategoriaUpdateInputObjectSchema, CategoriaUncheckedUpdateInputObjectSchema]), where: CategoriaWhereUniqueInputObjectSchema }).strict();