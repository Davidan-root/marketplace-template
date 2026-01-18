import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './objects/ProductoSelect.schema';
import { ProductoIncludeObjectSchema as ProductoIncludeObjectSchema } from './objects/ProductoInclude.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';
import { ProductoCreateInputObjectSchema as ProductoCreateInputObjectSchema } from './objects/ProductoCreateInput.schema';
import { ProductoUncheckedCreateInputObjectSchema as ProductoUncheckedCreateInputObjectSchema } from './objects/ProductoUncheckedCreateInput.schema';
import { ProductoUpdateInputObjectSchema as ProductoUpdateInputObjectSchema } from './objects/ProductoUpdateInput.schema';
import { ProductoUncheckedUpdateInputObjectSchema as ProductoUncheckedUpdateInputObjectSchema } from './objects/ProductoUncheckedUpdateInput.schema';

export const ProductoUpsertOneSchema: z.ZodType<Prisma.ProductoUpsertArgs> = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), where: ProductoWhereUniqueInputObjectSchema, create: z.union([ ProductoCreateInputObjectSchema, ProductoUncheckedCreateInputObjectSchema ]), update: z.union([ ProductoUpdateInputObjectSchema, ProductoUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductoUpsertArgs>;

export const ProductoUpsertOneZodSchema = z.object({ select: ProductoSelectObjectSchema.optional(), include: ProductoIncludeObjectSchema.optional(), where: ProductoWhereUniqueInputObjectSchema, create: z.union([ ProductoCreateInputObjectSchema, ProductoUncheckedCreateInputObjectSchema ]), update: z.union([ ProductoUpdateInputObjectSchema, ProductoUncheckedUpdateInputObjectSchema ]) }).strict();