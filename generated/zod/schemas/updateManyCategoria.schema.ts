import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CategoriaUpdateManyMutationInputObjectSchema as CategoriaUpdateManyMutationInputObjectSchema } from './objects/CategoriaUpdateManyMutationInput.schema';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './objects/CategoriaWhereInput.schema';

export const CategoriaUpdateManySchema: z.ZodType<Prisma.CategoriaUpdateManyArgs> = z.object({ data: CategoriaUpdateManyMutationInputObjectSchema, where: CategoriaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CategoriaUpdateManyArgs>;

export const CategoriaUpdateManyZodSchema = z.object({ data: CategoriaUpdateManyMutationInputObjectSchema, where: CategoriaWhereInputObjectSchema.optional() }).strict();