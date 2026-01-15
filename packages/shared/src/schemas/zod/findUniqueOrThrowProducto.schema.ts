import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './objects/ProductoSelect.schema';
import { ProductoIncludeObjectSchema as ProductoIncludeObjectSchema } from './objects/ProductoInclude.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';

export const ProductoFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductoFindUniqueOrThrowArgs> = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), where: ProductoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductoFindUniqueOrThrowArgs>;

export const ProductoFindUniqueOrThrowZodSchema = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), where: ProductoWhereUniqueInputObjectSchema }).strict();