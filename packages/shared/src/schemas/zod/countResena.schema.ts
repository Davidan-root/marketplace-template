import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaOrderByWithRelationInputObjectSchema as ResenaOrderByWithRelationInputObjectSchema } from './objects/ResenaOrderByWithRelationInput.schema';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './objects/ResenaWhereInput.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';
import { ResenaCountAggregateInputObjectSchema as ResenaCountAggregateInputObjectSchema } from './objects/ResenaCountAggregateInput.schema';

export const ResenaCountSchema: z.ZodType<Prisma.ResenaCountArgs> = z.object({ orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ResenaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ResenaCountArgs>;

export const ResenaCountZodSchema = z.object({ orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ResenaCountAggregateInputObjectSchema ]).optional() }).strict();