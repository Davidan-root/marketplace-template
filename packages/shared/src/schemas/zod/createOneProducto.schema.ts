import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './objects/ProductoSelect.schema';
import { ProductoIncludeObjectSchema as ProductoIncludeObjectSchema } from './objects/ProductoInclude.schema';
import { ProductoCreateInputObjectSchema as ProductoCreateInputObjectSchema } from './objects/ProductoCreateInput.schema';
import { ProductoUncheckedCreateInputObjectSchema as ProductoUncheckedCreateInputObjectSchema } from './objects/ProductoUncheckedCreateInput.schema';

export const ProductoCreateOneSchema: z.ZodType<Prisma.ProductoCreateArgs> = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), data: z.union([ProductoCreateInputObjectSchema, ProductoUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProductoCreateArgs>;

export const ProductoCreateOneZodSchema = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), data: z.union([ProductoCreateInputObjectSchema, ProductoUncheckedCreateInputObjectSchema]) }).strict();