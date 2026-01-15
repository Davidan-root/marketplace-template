import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResenaOrderByWithRelationInputObjectSchema as ResenaOrderByWithRelationInputObjectSchema } from './objects/ResenaOrderByWithRelationInput.schema';
import { ResenaWhereInputObjectSchema as ResenaWhereInputObjectSchema } from './objects/ResenaWhereInput.schema';
import { ResenaWhereUniqueInputObjectSchema as ResenaWhereUniqueInputObjectSchema } from './objects/ResenaWhereUniqueInput.schema';
import { ResenaCountAggregateInputObjectSchema as ResenaCountAggregateInputObjectSchema } from './objects/ResenaCountAggregateInput.schema';
import { ResenaMinAggregateInputObjectSchema as ResenaMinAggregateInputObjectSchema } from './objects/ResenaMinAggregateInput.schema';
import { ResenaMaxAggregateInputObjectSchema as ResenaMaxAggregateInputObjectSchema } from './objects/ResenaMaxAggregateInput.schema';
import { ResenaAvgAggregateInputObjectSchema as ResenaAvgAggregateInputObjectSchema } from './objects/ResenaAvgAggregateInput.schema';
import { ResenaSumAggregateInputObjectSchema as ResenaSumAggregateInputObjectSchema } from './objects/ResenaSumAggregateInput.schema';

export const ResenaAggregateSchema: z.ZodType<Prisma.ResenaAggregateArgs> = z.object({ orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ResenaCountAggregateInputObjectSchema ]).optional(), _min: ResenaMinAggregateInputObjectSchema.optional(), _max: ResenaMaxAggregateInputObjectSchema.optional(), _avg: ResenaAvgAggregateInputObjectSchema.optional(), _sum: ResenaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ResenaAggregateArgs>;

export const ResenaAggregateZodSchema = z.object({ orderBy: z.union([ResenaOrderByWithRelationInputObjectSchema, ResenaOrderByWithRelationInputObjectSchema.array()]).optional(), where: ResenaWhereInputObjectSchema.optional(), cursor: ResenaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ResenaCountAggregateInputObjectSchema ]).optional(), _min: ResenaMinAggregateInputObjectSchema.optional(), _max: ResenaMaxAggregateInputObjectSchema.optional(), _avg: ResenaAvgAggregateInputObjectSchema.optional(), _sum: ResenaSumAggregateInputObjectSchema.optional() }).strict();