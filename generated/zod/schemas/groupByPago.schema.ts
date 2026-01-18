import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './objects/PagoWhereInput.schema';
import { PagoOrderByWithAggregationInputObjectSchema as PagoOrderByWithAggregationInputObjectSchema } from './objects/PagoOrderByWithAggregationInput.schema';
import { PagoScalarWhereWithAggregatesInputObjectSchema as PagoScalarWhereWithAggregatesInputObjectSchema } from './objects/PagoScalarWhereWithAggregatesInput.schema';
import { PagoScalarFieldEnumSchema } from './enums/PagoScalarFieldEnum.schema';
import { PagoCountAggregateInputObjectSchema as PagoCountAggregateInputObjectSchema } from './objects/PagoCountAggregateInput.schema';
import { PagoMinAggregateInputObjectSchema as PagoMinAggregateInputObjectSchema } from './objects/PagoMinAggregateInput.schema';
import { PagoMaxAggregateInputObjectSchema as PagoMaxAggregateInputObjectSchema } from './objects/PagoMaxAggregateInput.schema';
import { PagoAvgAggregateInputObjectSchema as PagoAvgAggregateInputObjectSchema } from './objects/PagoAvgAggregateInput.schema';
import { PagoSumAggregateInputObjectSchema as PagoSumAggregateInputObjectSchema } from './objects/PagoSumAggregateInput.schema';

export const PagoGroupBySchema: z.ZodType<Prisma.PagoGroupByArgs> = z.object({ where: PagoWhereInputObjectSchema.optional(), orderBy: z.union([PagoOrderByWithAggregationInputObjectSchema, PagoOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PagoScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PagoScalarFieldEnumSchema), _count: z.union([ z.literal(true), PagoCountAggregateInputObjectSchema ]).optional(), _min: PagoMinAggregateInputObjectSchema.optional(), _max: PagoMaxAggregateInputObjectSchema.optional(), _avg: PagoAvgAggregateInputObjectSchema.optional(), _sum: PagoSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PagoGroupByArgs>;

export const PagoGroupByZodSchema = z.object({ where: PagoWhereInputObjectSchema.optional(), orderBy: z.union([PagoOrderByWithAggregationInputObjectSchema, PagoOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PagoScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PagoScalarFieldEnumSchema), _count: z.union([ z.literal(true), PagoCountAggregateInputObjectSchema ]).optional(), _min: PagoMinAggregateInputObjectSchema.optional(), _max: PagoMaxAggregateInputObjectSchema.optional(), _avg: PagoAvgAggregateInputObjectSchema.optional(), _sum: PagoSumAggregateInputObjectSchema.optional() }).strict();