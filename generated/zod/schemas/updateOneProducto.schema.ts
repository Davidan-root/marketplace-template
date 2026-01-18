import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './objects/ProductoSelect.schema';
import { ProductoIncludeObjectSchema as ProductoIncludeObjectSchema } from './objects/ProductoInclude.schema';
import { ProductoUpdateInputObjectSchema as ProductoUpdateInputObjectSchema } from './objects/ProductoUpdateInput.schema';
import { ProductoUncheckedUpdateInputObjectSchema as ProductoUncheckedUpdateInputObjectSchema } from './objects/ProductoUncheckedUpdateInput.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';

export const ProductoUpdateOneSchema: z.ZodType<Prisma.ProductoUpdateArgs> = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), data: z.union([ProductoUpdateInputObjectSchema, ProductoUncheckedUpdateInputObjectSchema]), where: ProductoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductoUpdateArgs>;

export const ProductoUpdateOneZodSchema = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), data: z.union([ProductoUpdateInputObjectSchema, ProductoUncheckedUpdateInputObjectSchema]), where: ProductoWhereUniqueInputObjectSchema }).strict();