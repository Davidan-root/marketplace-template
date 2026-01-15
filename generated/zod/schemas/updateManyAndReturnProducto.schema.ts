import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './objects/ProductoSelect.schema';
import { ProductoUpdateManyMutationInputObjectSchema as ProductoUpdateManyMutationInputObjectSchema } from './objects/ProductoUpdateManyMutationInput.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';

export const ProductoUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductoUpdateManyAndReturnArgs> = z.object({ select: ProductoSelectObjectSchema.optional(), data: ProductoUpdateManyMutationInputObjectSchema, where: ProductoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductoUpdateManyAndReturnArgs>;

export const ProductoUpdateManyAndReturnZodSchema = z.object({ select: ProductoSelectObjectSchema.optional(), data: ProductoUpdateManyMutationInputObjectSchema, where: ProductoWhereInputObjectSchema.optional() }).strict();