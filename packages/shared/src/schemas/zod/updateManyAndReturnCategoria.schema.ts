import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './objects/CategoriaSelect.schema';
import { CategoriaUpdateManyMutationInputObjectSchema as CategoriaUpdateManyMutationInputObjectSchema } from './objects/CategoriaUpdateManyMutationInput.schema';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './objects/CategoriaWhereInput.schema';

export const CategoriaUpdateManyAndReturnSchema: z.ZodType<Prisma.CategoriaUpdateManyAndReturnArgs> = z.object({ select: CategoriaSelectObjectSchema.optional(), data: CategoriaUpdateManyMutationInputObjectSchema, where: CategoriaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CategoriaUpdateManyAndReturnArgs>;

export const CategoriaUpdateManyAndReturnZodSchema = z.object({ select: CategoriaSelectObjectSchema.optional(), data: CategoriaUpdateManyMutationInputObjectSchema, where: CategoriaWhereInputObjectSchema.optional() }).strict();