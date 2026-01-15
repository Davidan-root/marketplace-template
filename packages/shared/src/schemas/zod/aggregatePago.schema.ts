import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PagoOrderByWithRelationInputObjectSchema as PagoOrderByWithRelationInputObjectSchema } from './objects/PagoOrderByWithRelationInput.schema';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './objects/PagoWhereInput.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './objects/PagoWhereUniqueInput.schema';
import { PagoCountAggregateInputObjectSchema as PagoCountAggregateInputObjectSchema } from './objects/PagoCountAggregateInput.schema';
import { PagoMinAggregateInputObjectSchema as PagoMinAggregateInputObjectSchema } from './objects/PagoMinAggregateInput.schema';
import { PagoMaxAggregateInputObjectSchema as PagoMaxAggregateInputObjectSchema } from './objects/PagoMaxAggregateInput.schema';
import { PagoAvgAggregateInputObjectSchema as PagoAvgAggregateInputObjectSchema } from './objects/PagoAvgAggregateInput.schema';
import { PagoSumAggregateInputObjectSchema as PagoSumAggregateInputObjectSchema } from './objects/PagoSumAggregateInput.schema';

export const PagoAggregateSchema: z.ZodType<Prisma.PagoAggregateArgs> = z.object({ orderBy: z.union([PagoOrderByWithRelationInputObjectSchema, PagoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PagoWhereInputObjectSchema.optional(), cursor: PagoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PagoCountAggregateInputObjectSchema ]).optional(), _min: PagoMinAggregateInputObjectSchema.optional(), _max: PagoMaxAggregateInputObjectSchema.optional(), _avg: PagoAvgAggregateInputObjectSchema.optional(), _sum: PagoSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PagoAggregateArgs>;

export const PagoAggregateZodSchema = z.object({ orderBy: z.union([PagoOrderByWithRelationInputObjectSchema, PagoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PagoWhereInputObjectSchema.optional(), cursor: PagoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PagoCountAggregateInputObjectSchema ]).optional(), _min: PagoMinAggregateInputObjectSchema.optional(), _max: PagoMaxAggregateInputObjectSchema.optional(), _avg: PagoAvgAggregateInputObjectSchema.optional(), _sum: PagoSumAggregateInputObjectSchema.optional() }).strict();