import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EnvioOrderByWithRelationInputObjectSchema as EnvioOrderByWithRelationInputObjectSchema } from './objects/EnvioOrderByWithRelationInput.schema';
import { EnvioWhereInputObjectSchema as EnvioWhereInputObjectSchema } from './objects/EnvioWhereInput.schema';
import { EnvioWhereUniqueInputObjectSchema as EnvioWhereUniqueInputObjectSchema } from './objects/EnvioWhereUniqueInput.schema';
import { EnvioCountAggregateInputObjectSchema as EnvioCountAggregateInputObjectSchema } from './objects/EnvioCountAggregateInput.schema';

export const EnvioCountSchema: z.ZodType<Prisma.EnvioCountArgs> = z.object({ orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EnvioCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EnvioCountArgs>;

export const EnvioCountZodSchema = z.object({ orderBy: z.union([EnvioOrderByWithRelationInputObjectSchema, EnvioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EnvioWhereInputObjectSchema.optional(), cursor: EnvioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EnvioCountAggregateInputObjectSchema ]).optional() }).strict();