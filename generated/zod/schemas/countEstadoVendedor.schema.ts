import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoVendedorOrderByWithRelationInputObjectSchema as EstadoVendedorOrderByWithRelationInputObjectSchema } from './objects/EstadoVendedorOrderByWithRelationInput.schema';
import { EstadoVendedorWhereInputObjectSchema as EstadoVendedorWhereInputObjectSchema } from './objects/EstadoVendedorWhereInput.schema';
import { EstadoVendedorWhereUniqueInputObjectSchema as EstadoVendedorWhereUniqueInputObjectSchema } from './objects/EstadoVendedorWhereUniqueInput.schema';
import { EstadoVendedorCountAggregateInputObjectSchema as EstadoVendedorCountAggregateInputObjectSchema } from './objects/EstadoVendedorCountAggregateInput.schema';

export const EstadoVendedorCountSchema: z.ZodType<Prisma.EstadoVendedorCountArgs> = z.object({ orderBy: z.union([EstadoVendedorOrderByWithRelationInputObjectSchema, EstadoVendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoVendedorWhereInputObjectSchema.optional(), cursor: EstadoVendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EstadoVendedorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EstadoVendedorCountArgs>;

export const EstadoVendedorCountZodSchema = z.object({ orderBy: z.union([EstadoVendedorOrderByWithRelationInputObjectSchema, EstadoVendedorOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoVendedorWhereInputObjectSchema.optional(), cursor: EstadoVendedorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EstadoVendedorCountAggregateInputObjectSchema ]).optional() }).strict();