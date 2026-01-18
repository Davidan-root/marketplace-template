import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { VendedorOrderByWithRelationInputObjectSchema as VendedorOrderByWithRelationInputObjectSchema } from './objects/VendedorOrderByWithRelationInput.schema';
import { VendedorWhereInputObjectSchema as VendedorWhereInputObjectSchema } from './objects/VendedorWhereInput.schema';
import { VendedorWhereUniqueInputObjectSchema as VendedorWhereUniqueInputObjectSchema } from './objects/VendedorWhereUniqueInput.schema';
import { VendedorCountAggregateInputObjectSchema as VendedorCountAggregateInputObjectSchema } from './objects/VendedorCountAggregateInput.schema';

export const VendedorCountSchema: z.ZodType<Prisma.VendedorCountArgs> = z.object({ orderBy: z.union([VendedorOrderByWithRelationInputObjectSchema, VendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendedorWhereInputObjectSchema.optional(), cursor: VendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VendedorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VendedorCountArgs>;

export const VendedorCountZodSchema = z.object({ orderBy: z.union([VendedorOrderByWithRelationInputObjectSchema, VendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: VendedorWhereInputObjectSchema.optional(), cursor: VendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VendedorCountAggregateInputObjectSchema ]).optional() }).strict();