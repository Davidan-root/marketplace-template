import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductoUpdateManyMutationInputObjectSchema as ProductoUpdateManyMutationInputObjectSchema } from './objects/ProductoUpdateManyMutationInput.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';

export const ProductoUpdateManySchema: z.ZodType<Prisma.ProductoUpdateManyArgs> = z.object({ data: ProductoUpdateManyMutationInputObjectSchema, where: ProductoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductoUpdateManyArgs>;

export const ProductoUpdateManyZodSchema = z.object({ data: ProductoUpdateManyMutationInputObjectSchema, where: ProductoWhereInputObjectSchema.optional() }).strict();