import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { EstadoUsuarioOrderByWithRelationInputObjectSchema as EstadoUsuarioOrderByWithRelationInputObjectSchema } from './objects/EstadoUsuarioOrderByWithRelationInput.schema';
import { EstadoUsuarioWhereInputObjectSchema as EstadoUsuarioWhereInputObjectSchema } from './objects/EstadoUsuarioWhereInput.schema';
import { EstadoUsuarioWhereUniqueInputObjectSchema as EstadoUsuarioWhereUniqueInputObjectSchema } from './objects/EstadoUsuarioWhereUniqueInput.schema';
import { EstadoUsuarioCountAggregateInputObjectSchema as EstadoUsuarioCountAggregateInputObjectSchema } from './objects/EstadoUsuarioCountAggregateInput.schema';

export const EstadoUsuarioCountSchema: z.ZodType<Prisma.EstadoUsuarioCountArgs> = z.object({ orderBy: z.union([EstadoUsuarioOrderByWithRelationInputObjectSchema, EstadoUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoUsuarioWhereInputObjectSchema.optional(), cursor: EstadoUsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EstadoUsuarioCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EstadoUsuarioCountArgs>;

export const EstadoUsuarioCountZodSchema = z.object({ orderBy: z.union([EstadoUsuarioOrderByWithRelationInputObjectSchema, EstadoUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(), where: EstadoUsuarioWhereInputObjectSchema.optional(), cursor: EstadoUsuarioWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EstadoUsuarioCountAggregateInputObjectSchema ]).optional() }).strict();