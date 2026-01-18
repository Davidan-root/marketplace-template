import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';
import { EnvioOrderByWithAggregationInputObjectSchema as EnvioOrderByWithAggregationInputObjectSchema } from './objects/EnvioOrderByWithAggregationInput.schema';
import { EnvioScalarWhereWithAggregatesInputObjectSchema as EnvioScalarWhereWithAggregatesInputObjectSchema } from './objects/EnvioScalarWhereWithAggregatesInput.schema';
import { EnvioScalarFieldEnumSchema } from './enums/EnvioScalarFieldEnum.schema';
import { EnvioCountAggregateInputObjectSchema as EnvioCountAggregateInputObjectSchema } from './objects/EnvioCountAggregateInput.schema';
import { EnvioMinAggregateInputObjectSchema as EnvioMinAggregateInputObjectSchema } from './objects/EnvioMinAggregateInput.schema';
import { EnvioMaxAggregateInputObjectSchema as EnvioMaxAggregateInputObjectSchema } from './objects/EnvioMaxAggregateInput.schema';
import { EnvioAvgAggregateInputObjectSchema as EnvioAvgAggregateInputObjectSchema } from './objects/EnvioAvgAggregateInput.schema';
import { EnvioSumAggregateInputObjectSchema as EnvioSumAggregateInputObjectSchema } from './objects/EnvioSumAggregateInput.schema';

export const EnvioGroupBySchema: z.ZodType<Prisma.EnvioGroupByArgs> = z.object({ where: EnvioWhereInputObjectSchema.optional(), orderBy: z.union([EnvioOrderByWithAggregationInputObjectSchema, EnvioOrderByWithAggregationInputObjectSchema.array()]).optional(), having: EnvioScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EnvioScalarFieldEnumSchema), _count: z.union([ z.literal(true), EnvioCountAggregateInputObjectSchema ]).optional(), _min: EnvioMinAggregateInputObjectSchema.optional(), _max: EnvioMaxAggregateInputObjectSchema.optional(), _avg: EnvioAvgAggregateInputObjectSchema.optional(), _sum: EnvioSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EnvioGroupByArgs>;

export const EnvioGroupByZodSchema = z.object({ where: EnvioWhereInputObjectSchema.optional(), orderBy: z.union([EnvioOrderByWithAggregationInputObjectSchema, EnvioOrderByWithAggregationInputObjectSchema.array()]).optional(), having: EnvioScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(EnvioScalarFieldEnumSchema), _count: z.union([ z.literal(true), EnvioCountAggregateInputObjectSchema ]).optional(), _min: EnvioMinAggregateInputObjectSchema.optional(), _max: EnvioMaxAggregateInputObjectSchema.optional(), _avg: EnvioAvgAggregateInputObjectSchema.optional(), _sum: EnvioSumAggregateInputObjectSchema.optional() }).strict();