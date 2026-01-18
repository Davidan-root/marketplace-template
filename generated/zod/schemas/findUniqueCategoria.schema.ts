import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './objects/CategoriaSelect.schema';
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from './objects/CategoriaInclude.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './objects/CategoriaWhereUniqueInput.schema';

export const CategoriaFindUniqueSchema: z.ZodType<Prisma.CategoriaFindUniqueArgs> = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoriaFindUniqueArgs>;

export const CategoriaFindUniqueZodSchema = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema }).strict();