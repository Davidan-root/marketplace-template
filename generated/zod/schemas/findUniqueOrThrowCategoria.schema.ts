import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from './objects/CategoriaSelect.schema';
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from './objects/CategoriaInclude.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './objects/CategoriaWhereUniqueInput.schema';

export const CategoriaFindUniqueOrThrowSchema: z.ZodType<Prisma.CategoriaFindUniqueOrThrowArgs> = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CategoriaFindUniqueOrThrowArgs>;

export const CategoriaFindUniqueOrThrowZodSchema = z.object({ select: CategoriaSelectObjectSchema.optional(), include: CategoriaIncludeObjectSchema.optional(), where: CategoriaWhereUniqueInputObjectSchema }).strict();