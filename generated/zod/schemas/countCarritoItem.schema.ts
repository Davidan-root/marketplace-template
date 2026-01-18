import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { CarritoItemOrderByWithRelationInputObjectSchema as CarritoItemOrderByWithRelationInputObjectSchema } from './objects/CarritoItemOrderByWithRelationInput.schema';
import { CarritoItemWhereInputObjectSchema as CarritoItemWhereInputObjectSchema } from './objects/CarritoItemWhereInput.schema';
import { CarritoItemWhereUniqueInputObjectSchema as CarritoItemWhereUniqueInputObjectSchema } from './objects/CarritoItemWhereUniqueInput.schema';
import { CarritoItemCountAggregateInputObjectSchema as CarritoItemCountAggregateInputObjectSchema } from './objects/CarritoItemCountAggregateInput.schema';

export const CarritoItemCountSchema: z.ZodType<Prisma.CarritoItemCountArgs> = z.object({ orderBy: z.union([CarritoItemOrderByWithRelationInputObjectSchema, CarritoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoItemWhereInputObjectSchema.optional(), cursor: CarritoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CarritoItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CarritoItemCountArgs>;

export const CarritoItemCountZodSchema = z.object({ orderBy: z.union([CarritoItemOrderByWithRelationInputObjectSchema, CarritoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CarritoItemWhereInputObjectSchema.optional(), cursor: CarritoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CarritoItemCountAggregateInputObjectSchema ]).optional() }).strict();