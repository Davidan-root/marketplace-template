import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoOrderByWithRelationInputObjectSchema as CarritoOrderByWithRelationInputObjectSchema } from './objects/CarritoOrderByWithRelationInput.schema';
import { CarritoWhereInputObjectSchema as CarritoWhereInputObjectSchema } from './objects/CarritoWhereInput.schema';
import { CarritoWhereUniqueInputObjectSchema as CarritoWhereUniqueInputObjectSchema } from './objects/CarritoWhereUniqueInput.schema';
import { CarritoCountAggregateInputObjectSchema as CarritoCountAggregateInputObjectSchema } from './objects/CarritoCountAggregateInput.schema';

export const CarritoCountSchema: z.ZodType<Prisma.CarritoCountArgs> = z.object({ orderBy: z.union([CarritoOrderByWithRelationInputObjectSchema, CarritoOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoWhereInputObjectSchema.optional(), cursor: CarritoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CarritoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CarritoCountArgs>;

export const CarritoCountZodSchema = z.object({ orderBy: z.union([CarritoOrderByWithRelationInputObjectSchema, CarritoOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoWhereInputObjectSchema.optional(), cursor: CarritoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CarritoCountAggregateInputObjectSchema ]).optional() }).strict();