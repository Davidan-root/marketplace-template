import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PublicacionOrderByWithRelationInputObjectSchema as PublicacionOrderByWithRelationInputObjectSchema } from './objects/PublicacionOrderByWithRelationInput.schema';
import { PublicacionWhereInputObjectSchema as PublicacionWhereInputObjectSchema } from './objects/PublicacionWhereInput.schema';
import { PublicacionWhereUniqueInputObjectSchema as PublicacionWhereUniqueInputObjectSchema } from './objects/PublicacionWhereUniqueInput.schema';
import { PublicacionCountAggregateInputObjectSchema as PublicacionCountAggregateInputObjectSchema } from './objects/PublicacionCountAggregateInput.schema';

export const PublicacionCountSchema: z.ZodType<Prisma.PublicacionCountArgs> = z.object({ orderBy: z.union([PublicacionOrderByWithRelationInputObjectSchema, PublicacionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublicacionWhereInputObjectSchema.optional(), cursor: PublicacionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PublicacionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PublicacionCountArgs>;

export const PublicacionCountZodSchema = z.object({ orderBy: z.union([PublicacionOrderByWithRelationInputObjectSchema, PublicacionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PublicacionWhereInputObjectSchema.optional(), cursor: PublicacionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PublicacionCountAggregateInputObjectSchema ]).optional() }).strict();