import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ProductoOrderByWithRelationInputObjectSchema as ProductoOrderByWithRelationInputObjectSchema } from './objects/ProductoOrderByWithRelationInput.schema';
import { ProductoWhereInputObjectSchema as ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';
import { ProductoWhereUniqueInputObjectSchema as ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';
import { ProductoCountAggregateInputObjectSchema as ProductoCountAggregateInputObjectSchema } from './objects/ProductoCountAggregateInput.schema';

export const ProductoCountSchema: z.ZodType<Prisma.ProductoCountArgs> = z.object({ orderBy: z.union([ProductoOrderByWithRelationInputObjectSchema, ProductoOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductoWhereInputObjectSchema.optional(), cursor: ProductoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductoCountArgs>;

export const ProductoCountZodSchema = z.object({ orderBy: z.union([ProductoOrderByWithRelationInputObjectSchema, ProductoOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductoWhereInputObjectSchema.optional(), cursor: ProductoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductoCountAggregateInputObjectSchema ]).optional() }).strict();