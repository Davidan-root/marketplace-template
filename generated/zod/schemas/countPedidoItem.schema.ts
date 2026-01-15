import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PedidoItemOrderByWithRelationInputObjectSchema as PedidoItemOrderByWithRelationInputObjectSchema } from './objects/PedidoItemOrderByWithRelationInput.schema';
import { PedidoItemWhereInputObjectSchema as PedidoItemWhereInputObjectSchema } from './objects/PedidoItemWhereInput.schema';
import { PedidoItemWhereUniqueInputObjectSchema as PedidoItemWhereUniqueInputObjectSchema } from './objects/PedidoItemWhereUniqueInput.schema';
import { PedidoItemCountAggregateInputObjectSchema as PedidoItemCountAggregateInputObjectSchema } from './objects/PedidoItemCountAggregateInput.schema';

export const PedidoItemCountSchema: z.ZodType<Prisma.PedidoItemCountArgs> = z.object({ orderBy: z.union([PedidoItemOrderByWithRelationInputObjectSchema, PedidoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoItemWhereInputObjectSchema.optional(), cursor: PedidoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PedidoItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PedidoItemCountArgs>;

export const PedidoItemCountZodSchema = z.object({ orderBy: z.union([PedidoItemOrderByWithRelationInputObjectSchema, PedidoItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: PedidoItemWhereInputObjectSchema.optional(), cursor: PedidoItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PedidoItemCountAggregateInputObjectSchema ]).optional() }).strict();