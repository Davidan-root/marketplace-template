import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './objects/CategoriaSelect.schema';
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from './objects/CategoriaInclude.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './objects/CategoriaWhereUniqueInput.schema';
import { CategoriaCreateInputObjectSchema as CategoriaCreateInputObjectSchema } from './objects/CategoriaCreateInput.schema';
import { CategoriaUncheckedCreateInputObjectSchema as CategoriaUncheckedCreateInputObjectSchema } from './objects/CategoriaUncheckedCreateInput.schema';
import { CategoriaUpdateInputObjectSchema as CategoriaUpdateInputObjectSchema } from './objects/CategoriaUpdateInput.schema';
import { CategoriaUncheckedUpdateInputObjectSchema as CategoriaUncheckedUpdateInputObjectSchema } from './objects/CategoriaUncheckedUpdateInput.schema';

export const CategoriaUpsertOneSchema: z.ZodType<Prisma.CategoriaUpsertArgs> = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema, create: z.union([ CategoriaCreateInputObjectSchema, CategoriaUncheckedCreateInputObjectSchema ]), update: z.union([ CategoriaUpdateInputObjectSchema, CategoriaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CategoriaUpsertArgs>;

export const CategoriaUpsertOneZodSchema = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema, create: z.union([ CategoriaCreateInputObjectSchema, CategoriaUncheckedCreateInputObjectSchema ]), update: z.union([ CategoriaUpdateInputObjectSchema, CategoriaUncheckedUpdateInputObjectSchema ]) }).strict();