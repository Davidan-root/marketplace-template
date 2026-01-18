import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ProductoSelectObjectSchema as ProductoSelectObjectSchema } from './objects/ProductoSelect.schema';
import { ProductoCreateManyInputObjectSchema as ProductoCreateManyInputObjectSchema } from './objects/ProductoCreateManyInput.schema';

export const ProductoCreateManyAndReturnSchema: z.ZodType<Prisma.ProductoCreateManyAndReturnArgs> = z.object({ select: ProductoSelectObjectSchema.optional(), data: z.union([ ProductoCreateManyInputObjectSchema, z.array(ProductoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductoCreateManyAndReturnArgs>;

export const ProductoCreateManyAndReturnZodSchema = z.object({ select: ProductoSelectObjectSchema.optional(), data: z.union([ ProductoCreateManyInputObjectSchema, z.array(ProductoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();