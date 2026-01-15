import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CategoriaOrderByWithRelationInputObjectSchema as CategoriaOrderByWithRelationInputObjectSchema } from './objects/CategoriaOrderByWithRelationInput.schema';
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from './objects/CategoriaWhereInput.schema';
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from './objects/CategoriaWhereUniqueInput.schema';
import { CategoriaCountAggregateInputObjectSchema as CategoriaCountAggregateInputObjectSchema } from './objects/CategoriaCountAggregateInput.schema';

export const CategoriaCountSchema: z.ZodType<Prisma.CategoriaCountArgs> = z.object({ orderBy: z.union([CategoriaOrderByWithRelationInputObjectSchema, CategoriaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriaWhereInputObjectSchema.optional(), cursor: CategoriaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CategoriaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CategoriaCountArgs>;

export const CategoriaCountZodSchema = z.object({ orderBy: z.union([CategoriaOrderByWithRelationInputObjectSchema, CategoriaOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoriaWhereInputObjectSchema.optional(), cursor: CategoriaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CategoriaCountAggregateInputObjectSchema ]).optional() }).strict();