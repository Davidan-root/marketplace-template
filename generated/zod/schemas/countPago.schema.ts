import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PagoOrderByWithRelationInputObjectSchema as PagoOrderByWithRelationInputObjectSchema } from './objects/PagoOrderByWithRelationInput.schema';
import { PagoWhereInputObjectSchema as PagoWhereInputObjectSchema } from './objects/PagoWhereInput.schema';
import { PagoWhereUniqueInputObjectSchema as PagoWhereUniqueInputObjectSchema } from './objects/PagoWhereUniqueInput.schema';
import { PagoCountAggregateInputObjectSchema as PagoCountAggregateInputObjectSchema } from './objects/PagoCountAggregateInput.schema';

export const PagoCountSchema: z.ZodType<Prisma.PagoCountArgs> = z.object({ orderBy: z.union([PagoOrderByWithRelationInputObjectSchema, PagoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PagoWhereInputObjectSchema.optional(), cursor: PagoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PagoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PagoCountArgs>;

export const PagoCountZodSchema = z.object({ orderBy: z.union([PagoOrderByWithRelationInputObjectSchema, PagoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PagoWhereInputObjectSchema.optional(), cursor: PagoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PagoCountAggregateInputObjectSchema ]).optional() }).strict();