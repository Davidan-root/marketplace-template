import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ProductoCreateManyInputObjectSchema as ProductoCreateManyInputObjectSchema } from './objects/ProductoCreateManyInput.schema';

export const ProductoCreateManySchema: z.ZodType<Prisma.ProductoCreateManyArgs> = z.object({ data: z.union([ ProductoCreateManyInputObjectSchema, z.array(ProductoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductoCreateManyArgs>;

export const ProductoCreateManyZodSchema = z.object({ data: z.union([ ProductoCreateManyInputObjectSchema, z.array(ProductoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();