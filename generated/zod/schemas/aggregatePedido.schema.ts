import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoOrderByWithRelationInputObjectSchema as PedidoOrderByWithRelationInputObjectSchema } from './objects/PedidoOrderByWithRelationInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';
import { PedidoCountAggregateInputObjectSchema as PedidoCountAggregateInputObjectSchema } from './objects/PedidoCountAggregateInput.schema';
import { PedidoMinAggregateInputObjectSchema as PedidoMinAggregateInputObjectSchema } from './objects/PedidoMinAggregateInput.schema';
import { PedidoMaxAggregateInputObjectSchema as PedidoMaxAggregateInputObjectSchema } from './objects/PedidoMaxAggregateInput.schema';
import { PedidoAvgAggregateInputObjectSchema as PedidoAvgAggregateInputObjectSchema } from './objects/PedidoAvgAggregateInput.schema';
import { PedidoSumAggregateInputObjectSchema as PedidoSumAggregateInputObjectSchema } from './objects/PedidoSumAggregateInput.schema';

export const PedidoAggregateSchema: z.ZodType<Prisma.PedidoAggregateArgs> = z.object({ orderBy: z.union([PedidoOrderByWithRelationInputObjectSchema, PedidoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoWhereInputObjectSchema.optional(), cursor: PedidoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PedidoCountAggregateInputObjectSchema ]).optional(), _min: PedidoMinAggregateInputObjectSchema.optional(), _max: PedidoMaxAggregateInputObjectSchema.optional(), _avg: PedidoAvgAggregateInputObjectSchema.optional(), _sum: PedidoSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PedidoAggregateArgs>;

export const PedidoAggregateZodSchema = z.object({ orderBy: z.union([PedidoOrderByWithRelationInputObjectSchema, PedidoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoWhereInputObjectSchema.optional(), cursor: PedidoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PedidoCountAggregateInputObjectSchema ]).optional(), _min: PedidoMinAggregateInputObjectSchema.optional(), _max: PedidoMaxAggregateInputObjectSchema.optional(), _avg: PedidoAvgAggregateInputObjectSchema.optional(), _sum: PedidoSumAggregateInputObjectSchema.optional() }).strict();