import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';

export const ProductoDeleteManySchema: z.ZodType<Prisma.ProductoDeleteManyArgs> = z.object({ where: ProductoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductoDeleteManyArgs>;

export const ProductoDeleteManyZodSchema = z.object({ where: ProductoWhereInputObjectSchema.optional() }).strict();