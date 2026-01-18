import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './objects/ProductoSelect.schema';
import { ProductoIncludeObjectSchema as ProductoIncludeObjectSchema } from './objects/ProductoInclude.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';

export const ProductoFindUniqueSchema: z.ZodType<Prisma.ProductoFindUniqueArgs> = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), where: ProductoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductoFindUniqueArgs>;

export const ProductoFindUniqueZodSchema = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), where: ProductoWhereUniqueInputObjectSchema }).strict();