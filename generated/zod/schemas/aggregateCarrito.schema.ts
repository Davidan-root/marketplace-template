import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CarritoOrderByWithRelationInputObjectSchema as CarritoOrderByWithRelationInputObjectSchema } from './objects/CarritoOrderByWithRelationInput.schema';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './objects/CarritoWhereInput.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './objects/CarritoWhereUniqueInput.schema';
import { CarritoCountAggregateInputObjectSchema as CarritoCountAggregateInputObjectSchema } from './objects/CarritoCountAggregateInput.schema';
import { CarritoMinAggregateInputObjectSchema as CarritoMinAggregateInputObjectSchema } from './objects/CarritoMinAggregateInput.schema';
import { CarritoMaxAggregateInputObjectSchema as CarritoMaxAggregateInputObjectSchema } from './objects/CarritoMaxAggregateInput.schema';
import { CarritoAvgAggregateInputObjectSchema as CarritoAvgAggregateInputObjectSchema } from './objects/CarritoAvgAggregateInput.schema';
import { CarritoSumAggregateInputObjectSchema as CarritoSumAggregateInputObjectSchema } from './objects/CarritoSumAggregateInput.schema';

export const CarritoAggregateSchema: z.ZodType<Prisma.CarritoAggregateArgs> = z.object({ orderBy: z.union([CarritoOrderByWithRelationInputObjectSchema, CarritoOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoWhereInputObjectSchema.optional(), cursor: CarritoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CarritoCountAggregateInputObjectSchema ]).optional(), _min: CarritoMinAggregateInputObjectSchema.optional(), _max: CarritoMaxAggregateInputObjectSchema.optional(), _avg: CarritoAvgAggregateInputObjectSchema.optional(), _sum: CarritoSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CarritoAggregateArgs>;

export const CarritoAggregateZodSchema = z.object({ orderBy: z.union([CarritoOrderByWithRelationInputObjectSchema, CarritoOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoWhereInputObjectSchema.optional(), cursor: CarritoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CarritoCountAggregateInputObjectSchema ]).optional(), _min: CarritoMinAggregateInputObjectSchema.optional(), _max: CarritoMaxAggregateInputObjectSchema.optional(), _avg: CarritoAvgAggregateInputObjectSchema.optional(), _sum: CarritoSumAggregateInputObjectSchema.optional() }).strict();