import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EnvioOrderByWithRelationInputObjectSchema as EnvioOrderByWithRelationInputObjectSchema } from './objects/EnvioOrderByWithRelationInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './objects/EnvioWhereUniqueInput.schema';
import { EnvioCountAggregateInputObjectSchema as EnvioCountAggregateInputObjectSchema } from './objects/EnvioCountAggregateInput.schema';
import { EnvioMinAggregateInputObjectSchema as EnvioMinAggregateInputObjectSchema } from './objects/EnvioMinAggregateInput.schema';
import { EnvioMaxAggregateInputObjectSchema as EnvioMaxAggregateInputObjectSchema } from './objects/EnvioMaxAggregateInput.schema';
import { EnvioAvgAggregateInputObjectSchema as EnvioAvgAggregateInputObjectSchema } from './objects/EnvioAvgAggregateInput.schema';
import { EnvioSumAggregateInputObjectSchema as EnvioSumAggregateInputObjectSchema } from './objects/EnvioSumAggregateInput.schema';

export const EnvioAggregateSchema: z.ZodType<Prisma.EnvioAggregateArgs> = z.object({ orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EnvioCountAggregateInputObjectSchema ]).optional(), _min: EnvioMinAggregateInputObjectSchema.optional(), _max: EnvioMaxAggregateInputObjectSchema.optional(), _avg: EnvioAvgAggregateInputObjectSchema.optional(), _sum: EnvioSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EnvioAggregateArgs>;

export const EnvioAggregateZodSchema = z.object({ orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EnvioCountAggregateInputObjectSchema ]).optional(), _min: EnvioMinAggregateInputObjectSchema.optional(), _max: EnvioMaxAggregateInputObjectSchema.optional(), _avg: EnvioAvgAggregateInputObjectSchema.optional(), _sum: EnvioSumAggregateInputObjectSchema.optional() }).strict();