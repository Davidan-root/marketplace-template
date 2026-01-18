import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { PedidoOrderByWithRelationInputObjectSchema as PedidoOrderByWithRelationInputObjectSchema } from './objects/PedidoOrderByWithRelationInput.schema';
import { PedidoWhereInputObjectSchema as PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';
import { PedidoWhereUniqueInputObjectSchema as PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';
import { PedidoCountAggregateInputObjectSchema as PedidoCountAggregateInputObjectSchema } from './objects/PedidoCountAggregateInput.schema';

export const PedidoCountSchema: z.ZodType<Prisma.PedidoCountArgs> = z.object({ orderBy: z.union([PedidoOrderByWithRelationInputObjectSchema, PedidoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoWhereInputObjectSchema.optional(), cursor: PedidoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PedidoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PedidoCountArgs>;

export const PedidoCountZodSchema = z.object({ orderBy: z.union([PedidoOrderByWithRelationInputObjectSchema, PedidoOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoWhereInputObjectSchema.optional(), cursor: PedidoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PedidoCountAggregateInputObjectSchema ]).optional() }).strict();